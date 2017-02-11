package com.b2ks.service;

import java.util.HashMap;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.b2ks.dao.CategoryMapper;
import com.b2ks.model.Category;

@Service
public class CategoryService {
  
  @Autowired
  CategoryMapper categoryMapper;

  public List<Category> getCategoryList() throws Exception{
    HashMap<String,Object> paramMap = new HashMap<>();
    return categoryMapper.getCategoryList(paramMap);
  }
  
  public String getTitle(int no) throws Exception {
    return categoryMapper.getTitle(no);
  }
  
  public void deleteCategory(int no) throws Exception {
    categoryMapper.deleteCategory(no);
  }
  
  public void insertCategory(Category category) throws Exception{
    categoryMapper.insertCategory(category);
  };
  
  public void modifyCategory(Category category) throws Exception{
    categoryMapper.modifyCategory(category);
  }
}
