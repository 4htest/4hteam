package com.b2ks;

import org.json.JSONArray;
import org.json.JSONObject;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;



@Controller
public class CommentController {
  
  
  @RequestMapping(value = "/api/get/comments", method = {RequestMethod.GET, RequestMethod.POST}, produces = "application/json")
  public @ResponseBody String getComment() {
    
    JSONObject comment;
    JSONArray comments = new JSONArray();
    
    for (int i = 0; i < 4; i++) {
      comment = new JSONObject();
      comment.put("comment_no", i);
      comment.put("content_no", i);
      comment.put("content", "content" + i);
      comment.put("createdDate", "2017-02-0" + i);
      comments.put(comment);
    }
    return JSONObject.valueToString(comments);
  }    
  
  @RequestMapping(value = "/api/get/comment", method = {RequestMethod.GET, RequestMethod.POST}, produces = "application/json")
  public @ResponseBody String getCommentById(int id) {
    
    JSONObject comment;
    comment = new JSONObject();
    comment.put("comment_no", id);
    comment.put("content_no", 1);
    comment.put("content", "content" + id);
    comment.put("createdDate", "2017-02-01");

    return JSONObject.valueToString(comment);
  }    
  

  @RequestMapping(value = "/api/delete/comment", method = {RequestMethod.GET, RequestMethod.POST}, produces = "application/json")
  public @ResponseBody String deleteCommentBy(int id) {
    
    JSONObject comment = new JSONObject();
    comment.put("result", "success");
    return JSONObject.valueToString(comment);
  }
  
  @RequestMapping(value = "/api/insert/comment", method = {RequestMethod.GET, RequestMethod.POST}, produces = "application/json")
  public @ResponseBody String insertCommentBy(int id, int content_no, String content) {
    
    JSONObject comment = new JSONObject();
    comment.put("result", "success");
    return JSONObject.valueToString(comment);
  }    
  
  @RequestMapping(value = "/api/modify/comment", method = {RequestMethod.GET, RequestMethod.POST}, produces = "application/json")
  public @ResponseBody String modifyCommentBy(int id, int content_no, String content) {
    
    JSONObject comment = new JSONObject();
    comment.put("result", "success");
    return JSONObject.valueToString(comment);
  }    
}







