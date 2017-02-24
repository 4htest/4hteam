package com.b2ks.controller;

import java.util.HashMap;
import java.util.List;

import org.json.JSONArray;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.b2ks.model.Post;
import com.b2ks.model.Post;
import com.b2ks.model.Post;
import com.b2ks.service.PostService;

@Controller
public class PostController {
  
  @Autowired
  PostService postService;
  
  @RequestMapping(value = "/api/get/posts", method = {RequestMethod.GET, RequestMethod.POST}, produces = "application/json")
  public @ResponseBody String getPost() {
    
    List<Post> postList;
    HashMap<String,Object> result;
    try {
      postList = postService.getPostlist();
      
      result = new HashMap<>();
      result.put("list", postList);
      return JSONObject.valueToString(new JSONObject(result)); 
    } catch (Exception e) {
      e.printStackTrace();
      result = new HashMap<>();
      result.put("result","fail");
      return JSONObject.valueToString(new JSONObject(result)); 
    }
  }    
  
  @RequestMapping(value = "/api/get/post", method = {RequestMethod.GET, RequestMethod.POST}, produces = "application/json")
  public @ResponseBody String getPostById(int id) {
    Post post = new Post();
    JSONObject result;
    try {
      post = postService.getPost(id);
      result = new JSONObject();
      result.put("post_no", post.getPost_no());
      result.put("category_no", post.getCategory_no());
      result.put("title", post.getTitle());
      result.put("content_text", post.getContent_text());
      result.put("content_mediaURL", post.getContent_mediaURL());
      result.put("createdDate", post.getCreatedDate());
      return JSONObject.valueToString(result); 
    } catch (Exception e) {
      e.printStackTrace();
      result = new JSONObject();
      result.put("result","fail");
      return JSONObject.valueToString(result); 
    }
  }    
  

  @RequestMapping(value = "/api/delete/post", method = {RequestMethod.GET, RequestMethod.POST}, produces = "application/json")
  public @ResponseBody String deletePost(int id) {
    JSONObject result;
    try {
    postService.deletePost(id);
    result = new JSONObject();
    result.put("result", "success");
    return JSONObject.valueToString(result);
    } catch (Exception e) {
      result = new JSONObject();
      result.put("result", "fail");
      return JSONObject.valueToString(result);
    }
  }
  
  @RequestMapping(value = "/api/insert/post", method = {RequestMethod.GET, RequestMethod.POST}, produces = "application/json")
  public @ResponseBody String insertPost(int category_id, String title, String text, String media) {
    
    JSONObject result;
    try {
      result = new JSONObject();
      Post post = new Post();
      post.setCategory_no(category_id);
      post.setTitle(title);
      post.setContent_text(text);
      post.setContent_mediaURL(media);
      postService.insertPost(post);
      
      result.put("result", "success");
      return JSONObject.valueToString(result);
    } catch (Exception e) {
      e.printStackTrace();
      result = new JSONObject();
      result.put("result", "fail");
      return JSONObject.valueToString(result);
    }
  }    
  
  @RequestMapping(value = "/api/modify/post", method = {RequestMethod.GET, RequestMethod.POST}, produces = "application/json")
  public @ResponseBody String modifyPost(int id, int category_id, String title, String text, String media) {
    JSONObject result;
    try {
      result = new JSONObject();
      Post post = new Post();
      post.setPost_no(id);
      post.setCategory_no(category_id);
      post.setTitle(title);
      post.setContent_text(text);
      post.setContent_mediaURL(media);
      postService.insertPost(post);
      
      result.put("result", "success");
      return JSONObject.valueToString(result);
    } catch (Exception e) {
      e.printStackTrace();
      result = new JSONObject();
      result.put("result", "fail");
      return JSONObject.valueToString(result);
    }
  }    
}







