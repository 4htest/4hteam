package com.b2ks;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class TestController {
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

}
