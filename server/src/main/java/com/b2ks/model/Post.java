package com.b2ks.model;

import java.sql.Date;

public class Post {
  private int post_no;
  private int category_no;
  private String title;
  private String content_text;
  private String content_mediaURL;
  private Date createdDate;
  public int getPost_no() {
    return post_no;
  }
  public void setPost_no(int post_no) {
    this.post_no = post_no;
  }
  public int getCategory_no() {
    return category_no;
  }
  public void setCategory_no(int category_no) {
    this.category_no = category_no;
  }
  public String getTitle() {
    return title;
  }
  public void setTitle(String title) {
    this.title = title;
  }
  public String getContent_text() {
    return content_text;
  }
  public void setContent_text(String content_text) {
    this.content_text = content_text;
  }
  public String getContent_mediaURL() {
    return content_mediaURL;
  }
  public void setContent_mediaURL(String content_mediaURL) {
    this.content_mediaURL = content_mediaURL;
  }
  public Date getCreatedDate() {
    return createdDate;
  }
  public void setCreatedDate(Date createdDate) {
    this.createdDate = createdDate;
  }
  @Override
  public String toString() {
    return "Post [post_no=" + post_no + ", category_no=" + category_no + ", title=" + title + ", content_text="
        + content_text + ", content_mediaURL=" + content_mediaURL + ", createdDate=" + createdDate + "]";
  }
  
  
  
}
