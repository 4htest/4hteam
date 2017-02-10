package com.b2ks.service;
 
import java.util.HashMap;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.b2ks.dao.PostMapper;
import com.b2ks.model.Post;
 
@Service
public class PostService {
 
    @Autowired
    PostMapper postMapper;
 
    public List<Post> getPostlist() throws Exception{
      HashMap<String,Object> paramMap = new HashMap<>();
      return postMapper.getPostlist(paramMap);
    }

    public Post getPost(int no) {
      return postMapper.getPost(no);
    }

    public void deletePost(int no) {
      postMapper.deletePost(no);
    }

    public void insertPost(Post post) {
      postMapper.insertPost(post);
    }

    public void modifyPost(Post post) {
      postMapper.modifyPost(post);
    }
    
 
}