package com.b2ks.controller;

import org.json.JSONArray;
import org.json.JSONObject;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
@Controller
@RequestMapping("/api/")
public class CategoryController {
  @RequestMapping(value="get/categories", method={RequestMethod.GET, RequestMethod.POST})
  public @ResponseBody String sendCategories() {
    JSONObject jsonObject = new JSONObject();
    
    //Json Array 생성.
    JSONArray categoryList = new JSONArray();
    for (int i = 0 ; i < 4; i++) {
      categoryList.put("JSON test" + i);
    }
    
    jsonObject.put("result", "SUCCESS");
    jsonObject.put("categories", categoryList);

    return JSONObject.valueToString(jsonObject);
  }
  
  @RequestMapping(value="get/category", method={RequestMethod.GET, RequestMethod.POST})
  @ResponseBody 
  public String sendCategory(int id) {
    JSONObject jsonObject = new JSONObject();
    
    //TEST DATA
    try {
      if(id == 1){
        jsonObject.put("title", "정복자");
      } else {
        jsonObject.put("result", "FAILURE");
      }
    } catch(Exception e) {
      jsonObject.put("result", "FAILURE");
    }
    
    jsonObject.put("result", "SUCCESS");

    return JSONObject.valueToString(jsonObject);
  }
  
  @RequestMapping(value="delete/category", method={RequestMethod.GET, RequestMethod.POST})
  @ResponseBody 
  public String deleteCategory(int id) {
    JSONObject jsonObject = new JSONObject();
    
    //TEST DATA
    try {
        jsonObject.put("result", "SUCCESS");
    } catch(Exception e) {
      jsonObject.put("result", "FAILURE");
    }

    return JSONObject.valueToString(jsonObject);
  }
  
  @RequestMapping(value="insert/category", method={RequestMethod.GET, RequestMethod.POST})
  @ResponseBody 
  public String insertCategory(int id, String title) {
    JSONObject jsonObject = new JSONObject();
    
    //TEST DATA
    if(this.isEmpty(title)) {
      jsonObject.put("result", "FAILURE");
      return JSONObject.valueToString(jsonObject);
    }
    try {
        jsonObject.put("result", "SUCCESS");
    } catch(Exception e) {
      jsonObject.put("result", "FAILURE");
    }
    
    jsonObject.put("result", "SUCCESS");

    return JSONObject.valueToString(jsonObject);
  }
  
  @RequestMapping(value="modify/category", method={RequestMethod.GET, RequestMethod.POST})
  @ResponseBody 
  public String modifyCategory(int id, String title) {
    JSONObject jsonObject = new JSONObject();
    
    //TEST DATA
    if(this.isEmpty(title)) {
      jsonObject.put("result", "FAILURE");
      return JSONObject.valueToString(jsonObject);
    }

    try {
      
    } catch(Exception e) {
      jsonObject.put("result", "FAILURE");
    }
    jsonObject.put("result", "SUCCESS");

    return JSONObject.valueToString(jsonObject);
  }
  
  public boolean isEmpty(String str) {
    if (str.equals("") || str == null){
      return true;
    }
    return false;
    
  }
}
