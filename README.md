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
/api/insert/comment[?:id&:content] | post | comment를 등록한다.
/api/modify/comment[?:id&:content] | post | comment를 수정한다.
/api/get/contents | get | 현재 존재하는 content의 list를 json으로 가져온다.
/api/get/content[?:id] | get | id에 해당하는 content를 json으로 가져온다.
/api/delete/content[?:id] | post | content를 삭제한다.
/api/insert/content[?:id&:title&:text&:media] | post | content를 등록한다.
/api/modify/content[?:id&:title&:text&:media] | post | content를 수정한다.
