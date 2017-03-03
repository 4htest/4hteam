package com.b2ks.controller;

import java.util.HashMap;
import java.util.List;

import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.b2ks.model.Comment;
import com.b2ks.service.CommentService;



@Controller
public class CommentController {
  
  @Autowired
  CommentService commentService;
  
  @RequestMapping(value = "/api/get/comments", method = {RequestMethod.GET, RequestMethod.POST}, produces = "application/json")
  public @ResponseBody String getCommentlist(int id) {

    List<Comment> commentList;
    HashMap<String,Object> result;
    try {
      commentList = commentService.getCommentlist(id);
      
      result = new HashMap<>();
      result.put("list", commentList);
      return JSONObject.valueToString(new JSONObject(result)); 
    } catch (Exception e) {
      e.printStackTrace();
      result = new HashMap<>();
      result.put("result","fail");
      return JSONObject.valueToString(new JSONObject(result)); 
    }
  }    
  
  @RequestMapping(value = "/api/get/comment", method = {RequestMethod.GET, RequestMethod.POST}, produces = "application/json")
  public @ResponseBody String getComment(int id) {
    Comment comment = new Comment();
    JSONObject result;
    try {
      comment = commentService.getComment(id);
      result = new JSONObject();
      result.put("comment_no", comment.getComment_no());
      result.put("post_no", comment.getPost_no());
      result.put("content", comment.getContent());
      result.put("createdDate", comment.getCreatedDate());
      return JSONObject.valueToString(result); 
    } catch (Exception e) {
      e.printStackTrace();
      result = new JSONObject();
      result.put("result","fail");
      return JSONObject.valueToString(result); 
    }
  }    
  

  @RequestMapping(value = "/api/delete/comment", method = {RequestMethod.GET, RequestMethod.POST}, produces = "application/json")
  public @ResponseBody String deleteComment(@RequestBody Comment state) {
    JSONObject result;
    System.out.println(state.getComment_no());
    try {
    commentService.deleteComment(state.getComment_no());
    result = new JSONObject();
    result.put("result", "success");
    return JSONObject.valueToString(result);
    } catch (Exception e) {
      result = new JSONObject();
      result.put("result", "fail");
      return JSONObject.valueToString(result);
    }
  }
  
  @RequestMapping(value = "/api/insert/comment", method = {RequestMethod.GET, RequestMethod.POST}, produces = "application/json")
  public @ResponseBody String insertComment(@RequestBody Comment state) {
    JSONObject result;
    System.out.println(state);
    try {
      result = new JSONObject();
      Comment comment = new Comment();
      comment.setPost_no(state.getPost_no());
      comment.setContent(state.getContent());
      comment.setCreatedDate(state.getCreatedDate());
      commentService.insertComment(comment);
      System.out.println(comment.getComment_no());
      result.put("comment_no", comment.getComment_no());
      result.put("result", "success");
      return JSONObject.valueToString(result);
    } catch (Exception e) {
      e.printStackTrace();
      result = new JSONObject();
      result.put("result", "fail");
      return JSONObject.valueToString(result);
    }
  }    
  
  @RequestMapping(value = "/api/modify/comment", method = {RequestMethod.GET, RequestMethod.POST}, produces = "application/json")
  public @ResponseBody String modifyComment(@RequestBody Comment state) {
    JSONObject result;
    try {
      result = new JSONObject();
      Comment comment = new Comment();
      comment.setComment_no(state.getComment_no());
      comment.setContent(state.getContent());
      commentService.modifyComment(comment);
      
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







