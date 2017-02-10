package com.b2ks.service;
 
import java.util.HashMap;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.b2ks.dao.CommentMapper;
import com.b2ks.model.Comment;
 
@Service
public class CommentService {
 
    @Autowired
    CommentMapper commentMapper;
 
    public List<Comment> getCommentlist() throws Exception{
      HashMap<String,Object> paramMap = new HashMap<>();
      return commentMapper.getCommentlist(paramMap);
    }

    public Comment getComment(int no) {
      return commentMapper.getComment(no);
    }

    public void deleteComment(int no) {
      commentMapper.deleteComment(no);
    }

    public void insertComment(Comment comment) {
      commentMapper.insertComment(comment);
    }

    public void modifyComment(Comment comment) {
      commentMapper.modifyComment(comment);
    }
    
 
}