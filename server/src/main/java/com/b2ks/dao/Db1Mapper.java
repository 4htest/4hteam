package com.b2ks.dao;

import java.util.List;
import java.util.Map;

import com.b2ks.model.Testinfo;

public interface Db1Mapper {
  public List<Testinfo> getTestlist(Map<String,Object> paramMap) throws Exception;
}
