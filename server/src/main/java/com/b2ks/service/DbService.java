package com.b2ks.service;
 
import java.util.HashMap;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.b2ks.dao.Db1Mapper;
import com.b2ks.model.Testinfo;
 
@Service
public class DbService {
 
    @Autowired
    Db1Mapper db1Mapper;
 
    public List<Testinfo> getTestlist() throws Exception{
      HashMap<String,Object> paramMap = new HashMap<>();
      return db1Mapper.getTestlist(paramMap);
    }
 
}