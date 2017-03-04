package com.b2ks.model;

import java.sql.Date;

public class Comment {
  private int comment_no;
  private int post_no;
  private String content;
  private String createdDate;
  public int getComment_no() {
    return comment_no;
  }
  public void setComment_no(int comment_no) {
    this.comment_no = comment_no;
  }
  public int getPost_no() {
    return post_no;
  }
  public void setPost_no(int post_no) {
    this.post_no = post_no;
  }
  public String getContent() {
    return content;
  }
  public void setContent(String content) {
    this.content = content;
  }
  public String getCreatedDate() {
    return createdDate;
  }
  public void setCreatedDate(String createdDate) {
    this.createdDate = createdDate;
  }
  @Override
  public String toString() {
    return "Comment [comment_no=" + comment_no + ", post_no=" + post_no + ", content=" + content + ", createdDate="
        + createdDate + "]";
  }
  
  
}
