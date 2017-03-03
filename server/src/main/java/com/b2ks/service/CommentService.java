package com.b2ks.service;
 
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.b2ks.dao.CommentMapper;
import com.b2ks.model.Comment;
 
@Service
public class CommentService {
 
    @Autowired
    CommentMapper commentMapper;
 
    public List<Comment> getCommentlist(int no) {
      return commentMapper.getCommentlist(no);
    }

    public Comment getComment(int no) {
      return commentMapper.getComment(no);
    }

    public void deleteComment(int no) {
      commentMapper.deleteComment(no);
    }

    public int insertComment(Comment comment) {
      return commentMapper.insertComment(comment);
    }

    public void modifyComment(Comment comment) {
      commentMapper.modifyComment(comment);
    }
    
 
}