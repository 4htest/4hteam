package com.b2ks.controller;

import java.util.HashMap;
import java.util.List;

import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.b2ks.model.Category;
import com.b2ks.service.CategoryService;
@Controller
@RequestMapping("/api/")
public class CategoryController {
  
  @Autowired CategoryService categoryService;
  @RequestMapping(value="get/categories", method={RequestMethod.GET, RequestMethod.POST})
  public @ResponseBody String sendCategories() throws Exception {
    JSONObject jsonObject = new JSONObject();
    
    List<Category> categoryList;
    HashMap<String,Object> result;
    try {
      categoryList = categoryService.getCategoryList();
      
      result = new HashMap<>();
      result.put("list", categoryList);
      return JSONObject.valueToString(new JSONObject(result)); 
    } catch (Exception e) {
      e.printStackTrace();
      result = new HashMap<>();
      result.put("result","fail");
      return JSONObject.valueToString(new JSONObject(result)); 
    }
    
    
  }
  
  @RequestMapping(value="get/category", method={RequestMethod.GET, RequestMethod.POST})
  @ResponseBody 
  public String sendCategory(int id) throws Exception {
    JSONObject jsonObject = new JSONObject();
    String title= null;
    try {
      
      title = categoryService.getTitle(id);
    } catch (Exception e) {
      e.printStackTrace();
    }
    
    jsonObject.put("Tilte", title);
    jsonObject.put("result", "SUCCESS");

    return JSONObject.valueToString(jsonObject);
  }
  
  @RequestMapping(value="delete/category", method={RequestMethod.GET, RequestMethod.POST})
  @ResponseBody 
  public String deleteCategory(int id) {
    JSONObject jsonObject = new JSONObject();
    
    
    try {
      categoryService.deleteCategory(id);
    } catch(Exception e) {
      jsonObject.put("result", "FAILURE");
    }
    jsonObject.put("result", "SUCCESS");

    return JSONObject.valueToString(jsonObject);
  }
  
  @RequestMapping(value="insert/category", method={RequestMethod.GET, RequestMethod.POST})
  @ResponseBody 
  public String insertCategory(int id, String title) {
    JSONObject jsonObject = new JSONObject();
    
    Category category = new Category();
    category.setCategory_no(id);
    category.setTitle(title);
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
