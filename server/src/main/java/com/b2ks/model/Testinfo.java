package com.b2ks.model;

import java.sql.Date;

public class Testinfo {
  private int no;
  private String subject;
  private String content;
  private String writer;
  private Date createdDate;
  public int getNo() {
    return no;
  }
  public void setNo(int no) {
    this.no = no;
  }
  public String getSubject() {
    return subject;
  }
  public void setSubject(String subject) {
    this.subject = subject;
  }
  public String getContent() {
    return content;
  }
  public void setContent(String content) {
    this.content = content;
  }
  public String getWriter() {
    return writer;
  }
  public void setWriter(String writer) {
    this.writer = writer;
  }
  public Date getCreatedDate() {
    return createdDate;
  }
  public void setCreatedDate(Date createdDate) {
    this.createdDate = createdDate;
  }
  
  @Override
  public String toString() {
    return "Testinfo [no=" + no + ", subject=" + subject + ", content=" + content + ", writer=" + writer
        + ", createdDate=" + createdDate + "]";
  }
  
  
}
