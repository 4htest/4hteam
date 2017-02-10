package com.b2ks.controller;

import org.json.JSONArray;
import org.json.JSONObject;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class PostController {
  @RequestMapping(value = "/api/get/posts", method = {RequestMethod.GET, RequestMethod.POST}, produces = "application/json")
  public @ResponseBody String getPost() {
    
    JSONObject post;
    JSONArray posts = new JSONArray();
    
    for (int i = 0; i < 4; i++) {
      post = new JSONObject();
      post.put("post_no", i);
      post.put("category_no", i);
      post.put("title", "title" + i);
      post.put("post_text", "post_text" + i);
      post.put("post_mediaURL", "post_mediaURL" + i);
      post.put("createdDate", "2017-02-0" + i);
      posts.put(post);
    }
    return JSONObject.valueToString(posts);
  }    
  
  @RequestMapping(value = "/api/get/post", method = {RequestMethod.GET, RequestMethod.POST}, produces = "application/json")
  public @ResponseBody String getPostById(int id) {
    
    JSONObject post;
    post = new JSONObject();
    post.put("post_no", id);
    post.put("category_no", 1);
    post.put("title", "title" + id);
    post.put("post_text", "post_text" + id);
    post.put("post_mediaURL", "post_mediaURL" + id);
    post.put("createdDate", "2017-02-0" + id);

    return JSONObject.valueToString(post);
  }    
  

  @RequestMapping(value = "/api/delete/post", method = {RequestMethod.GET, RequestMethod.POST}, produces = "application/json")
  public @ResponseBody String deletePostBy(int id) {
    
    JSONObject post = new JSONObject();
    post.put("result", "success");
    return JSONObject.valueToString(post);
  }
  
  @RequestMapping(value = "/api/insert/post", method = {RequestMethod.GET, RequestMethod.POST}, produces = "application/json")
  public @ResponseBody String insertPostBy(int id, int category_no, String title, String content_text, String mediaURL) {
    
    JSONObject post = new JSONObject();
    post.put("result", "success");
    return JSONObject.valueToString(post);
  }    
  
  @RequestMapping(value = "/api/modify/post", method = {RequestMethod.GET, RequestMethod.POST}, produces = "application/json")
  public @ResponseBody String modifyPostBy(int id, int category_no, String title, String content_text, String mediaURL) {
    
    JSONObject post = new JSONObject();
    post.put("result", "success");
    return JSONObject.valueToString(post);
  }    
}







