package com.b2ks.dao;

import java.util.List;
import java.util.Map;

import com.b2ks.model.Post;

public interface PostMapper {
  public List<Post> getPostlist(Map<String,Object> paramMap);
  public Post getPost(int no);
  public void deletePost(int no);
  public void insertPost(Post post);
  public void modifyPost(Post post);
}
