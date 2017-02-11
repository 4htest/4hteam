package com.b2ks.dao;

import java.util.List;
import java.util.Map;

import com.b2ks.model.Category;

public interface CategoryMapper {
  public List<Category> getCategoryList(Map<String,Object> paramMap) throws Exception;
  public String getTitle(int no) throws Exception;
  public void deleteCategory(int no) throws Exception;
  public void insertCategory(Category category);
  public void modifyCategory(Category category);
}

