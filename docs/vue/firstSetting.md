---
title: 1. Setting
---

# 셋팅하기

## node.js 설치
- [node.js download](https://nodejs.org/en/) 에서 LTS 버전으로 다운로드
- 터미널(윈도우 명령 프롬프트)에서 `node -v` 를 실행해서 버전이 나오면 OK
- 새로운 버전을 받기 위해서는 [nvm](https://github.com/coreybutler/nvm-windows) 을 통해서 node 버전을 새로 설치파고 바꿀수 있다.

## VS Code 에디터 설치
- [https://code.visualstudio.com/](https://code.visualstudio.com/) 최신버전 설치

#### Vs Code Extensions(확장프로그램) 설치
- vetur or volar
- HTML CSS Support
- vue 3 snippets

OR vue 3extension pack 에서 고르기

## vue cli 설치
- vs code 터미널이나 window cmd 에서 `npm install -g @vue/cli` 입력

## vue create
- 설치한 폴더 생성 및 VS Code 에서 해당 폴더 열기
- VS Code 터미널에서 `vue create 생성할프로젝트명` 실행

#### 옵션 선택
```
Vue CLI v5.0.8
? Please pick a preset: (Use arrow keys)
> Default ([Vue 3] babel, eslint)
  Default ([Vue 2] babel, eslint)
  Manually select features
```
```
Vue CLI v5.0.8
? Please pick a preset: Default ([Vue 3] babel, eslint)
? Pick the package manager to use when installing dependencies: (Use arrow keys)
> Use Yarn
  Use NPM
```
[npm 과 yarn 차이](https://joshua1988.github.io/vue-camp/package-manager/npm-vs-yarn.html#npm)

## 설치완료
- 생성된프로젝트 명으로 VS Code 새로 열기
- 터미널에서 npm run serve 실행

#### 폴더구조
-  src/App.vue : 메인 페이지. 이 안에 html, css, js역할이 들어있다
    - 웹 브라우저는 App.vue 해석이 안돼서 html로 컴파일 해서 동작이 되는데, src/main.js에서 public/index.html 안에 App.vue의 코드를 불러오도록 해서 웹에서 실행되는것이라고 한다.
- node_modules 폴더 : 프로젝트에 쓰이는 라이브러리들
- src 폴더 : 소스코드들 들어가는 곳
- public 폴더 : html, 기타파일등이 들어가는 곳
- package.json : 라이브러리 버전, 프로젝트 설정 기록




#### 개발환경 셋팅과 Vue 3버전 설치(자주겪는 에러)
[coding apple- https://codingapple.com/unit/vue-3-installation-with-vue-cli/?id=139](https://codingapple.com/unit/vue-3-installation-with-vue-cli/?id=139)