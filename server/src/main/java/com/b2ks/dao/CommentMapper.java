package com.b2ks.dao;

import java.util.List;

import com.b2ks.model.Comment;

public interface CommentMapper {
  public List<Comment> getCommentlist(int no);
  public Comment getComment(int no);
  public void deleteComment(int no);
  public int insertComment(Comment comment);
  public void modifyComment(Comment comment);
}
