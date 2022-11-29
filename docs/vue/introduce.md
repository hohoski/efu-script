---
 title: 시작하며
---

# vue 시작하며 

vue개발에 관련된 부분을 공부하며 익히기<br>
vscode, vscode plugins, node, express, style 관련 등등등
무엇이든?<br>
Version 은 vue3!


## vue.js란 무엇인가
- 프론트엔드 개발을 쉽게하기 위한 오픈소스로 javascript 프레임워크(react, angular, svelte 등등)
- MVVM(Model-View-ViewModel)패턴으로, UI와 데이터 제어 로직을 분리
- SPA(Single Page Application)를 구축하는데 이용 가능

![MVVM](https://blog.kakaocdn.net/dn/cVeP4L/btrvZIubnnT/CZKbN7k7uHkvIssYIAgjWk/img.png)
- View(html DOM): 사용자에게 보이는 화면. 
- Model(JS): 데이터를 담는 용기, 보통 서버에서 가져온 데이터를 javascript 객체로 저장
- ViewModel: View와 Model의 중간 영역으로 DomListener와 DataBinding을 제공하는 영역
<br><br>
- DOM: HTML 문서에 들어가는 요소(tag, class, attribute 등)의 정보를 담고 있는 데이터 트리
- DOM Listener: DOM의 변경에 대한 즉각적으로 반응하여 특정 로직을 수행하는 장치
- Data Binding: View에 표시되는 내용과 모델의 데이터를 동기화
    - Vue에서는 기본적으로 단방향 데이터바인딩으로 컴포넌트간 통신은 상위 컴포넌트->하위컴포넌트로 전달

### Vue 장정
- 접근성 좋다. 허들이 낮고 시작하기 쉽다.
- 공식 라이브러리가 잘 되어 있다. `(Vue Router 및 Vuex)`
- 다른 프레임워크보다 유연하고 가볍다.
- React의 장점 Virtual DOM과 Angular의 데이터 바인딩의 장점을 가지고 있다.

> <b>Virtual DOM</b><br>
> 화면에 변화가 있을 때마다 실시간으로 DOM Tree 를 수정하지 않고 변경사항이 반영된 Virtual DOM을 이용해 메모리에서 처리하고 한 번만 DOM 수정을 한다. 결과적으로 브라우저는 한번만 렌더링을 하게 됨으로써 불필요한 렌더링 횟수를 줄여 렌더링 성능을 높인다



## 참고 URL
[vue 공식사이트](https://v3-docs.vuejs-korea.org/), [vue3 cheat sheet](https://learnvue.co/LearnVue-Vue-3-Cheatsheet.pdf), [vue3 router](https://v3.router.vuejs.org/kr/guide/#javascript), [vue webpack 관련](https://vuejs-templates.github.io/webpack/), [vue 예제](https://vuejsexamples.com/)

![라이프사이클](https://blog.kakaocdn.net/dn/pcpqp/btq8VGmoCdr/tLVBzrq9yDCBNSKAGZ3Bq1/img.png)