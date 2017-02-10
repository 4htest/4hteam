package com.b2ks.dao;

import java.util.List;
import java.util.Map;

import com.b2ks.model.Comment;

public interface CommentMapper {
  public List<Comment> getCommentlist(Map<String,Object> paramMap);
  public Comment getComment(int no);
  public void deleteComment(int no);
  public void insertComment(Comment comment);
  public void modifyComment(Comment comment);
}
