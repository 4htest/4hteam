package com.b2ks.controller;

import java.util.HashMap;
import java.util.List;

import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.b2ks.model.Testinfo;
import com.b2ks.service.DbService;

@Controller
public class TestController {
  @Autowired
  DbService dbService;
  
  @RequestMapping("/api/test")
  public @ResponseBody String helloWorld() {
    String jsonData = new String();
    jsonData = "[";
    for (int i = 0; i < 10; i++) {
      if (i == 9) {
        jsonData += "{data" + i + ":communicationTest" + i + "}]";
        break;
      }
      jsonData += "{data" + i + ":communicationTest" + i + "},";
      
    }
     
    return jsonData;
  }
  
  
  @RequestMapping(value="/test", produces="application/json;charset=UTF-8")
  public @ResponseBody String hello() throws Exception{
    List<Testinfo> testList = dbService.getTestlist();

    HashMap<String,Object> result = new HashMap<>();
    result.put("list", testList);
    return JSONObject.valueToString(new JSONObject(testList)); 
    
  }

}
