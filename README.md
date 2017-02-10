# 4H-Team
---
## client
#### 사용법 :
```bash
$ npm install -g babel webpack webpack-dev-server

# git clone을 하고 명령창에서 현재 경로 이동
$ cd 4hteam/client

# 패키지 설치
$ npm install

# react 시작
$ npm start

# 접속
http://localhost:7777
```

---
## server
#### 사용법
```bash
# git clone을 하고 명령창에서 현재 경로 이동
$ cd 4hteam/server

# 서버 실행후
$ mvn spring-boot:run

# 접속
http://localhost:8080
```

---
## 외부 API (REST API)
url | method | 설명
----- | ----- | -----
/api/get/categories | get | 현재 존재하는 category의 list를 json으로 가져온다.
/api/get/category[?:id] | get | id에 해당하는 category를 json으로 가져온다.
/api/delete/category[?:id] | post | category를 삭제한다.
/api/insert/category[?:id&:title] | post | category를 등록한다.
/api/modify/category[?:id&:title] | post | category를 수정한다.
/api/get/comments | get | 현재 존재하는 comment의 list를 json으로 가져온다.
/api/get/comment[?:id] | get | id에 해당하는 comment를 json으로 가져온다.
/api/delete/comment[?:id] | post | comment를 삭제한다.
/api/insert/comment[?:id&:post] | post | comment를 등록한다.
/api/modify/comment[?:id&:post] | post | comment를 수정한다.
/api/get/posts | get | 현재 존재하는 post의 list를 json으로 가져온다.
/api/get/post[?:id] | get | id에 해당하는 post를 json으로 가져온다.
/api/delete/post[?:id] | post | post를 삭제한다.
/api/insert/post[?:id&:title&:text&:media] | post | post를 등록한다.
/api/modify/post[?:id&:title&:text&:media] | post | post를 수정한다.
/api/get/Allposts | get | 현재 존재하는 모든 post를 json으로 가져온다.

---
## DB Settings
 | value
--- | ---
db | blogdb
user | root
password | 1111


## DB Tables

#### categories

column | type | 설명
----- | ----- | -----
category_no | INTEGER | 카테고리 키값
title | VARCHAR(255) | 카테고리 제목

#### posts

column | type | 설명
----- | ----- | -----
post_no | INTEGER | 게시물 키값
category_no | INTEGER | 참조할 카테고리 키값
title | VARCHAR(255) | 게시물 제목
content_text | TEXT | 내용 (글)
content_mediaURL | VARCHAR(255) | 내용에 포함된 미디어 URL
createDate | DATETIME | 게시물 생성일

#### comments

column | type | 설명
----- | ----- | -----
comment_no | INTEGER | 댓글 키값
post_no | INTEGER | 참조할 게시물 키값
content | TEXT | 내용
createDate | DATETIME | 댓글 생성일



