# wanted-pre-onboarding-frontend-challenge-19

## 개발 환경

  <img src="https://img.shields.io/badge/react-61DAFB?style=flat-square&logo=react&logoColor=black" /> 
  <img src="https://img.shields.io/badge/Typescript-3178C6?style=flat-square&logo=Typescript&logoColor=white"/>
  <img src="https://img.shields.io/badge/Tailwind CSS-06B6D4?style=flat-square&logo=Tailwind CSS&logoColor=white"/>
  <img src="https://img.shields.io/badge/Vite-646CFF?style=flat-square&logo=Vite&logoColor=white"/>
  <img src="https://img.shields.io/badge/Redux-764ABC?style=flat-square&logo=Redux&logoColor=white"/>

## 실행
```sh
$ yarn install
$ yarn build
$ yarn start
```
  

## 요구 사항
- [x] create-react-app 혹은 vite으로 프로젝트를 생성합니다.
- [x] 아래 과제 공통 세팅의 폴더 구조를 확인합니다.
- [x] 과제를 제출하는 방법은 본인이 작업한 github repository 주소를 [issues](https://github.com/summerdidi/wanted-pre-onboarding-frontend-challenge-19/issues)에 올리면 됩니다.
- [x] 과제물은 main 브랜치에 올립니다.
- [x] 프로젝트는 node version 20에서 실행할 수 있어야합니다.
- [x] Settings -> Codespaces -> Configuration Select branch를 main 으로 하고 제출합니다.(codespace 확인용도)
- [x] 함수형 컴포넌트를 사용해 코드를 짜주세요.

## 폴더 구조
![스크린샷 2024-02-16 오후 6 44 07](https://github.com/Songchanheum/wanted-pre-onboarding-frontend-challenge-19/assets/39077239/c1adcfd8-7e54-4e13-96c6-550d1b90214c)


## 과제 2

질문을 읽고 답해주세요. 본인이 알고 있는 만큼 답변해주시면 됩니다.

- DOM과 Virtual DOM을 설명해주세요.
  ---
  + DOM(Document Object Model)이란 말 그대로 풀이하자면 문서 객체 모델이다. 여기서 문서(Document)란 HTML 문서를 얘기하며 HTML 문서를 javascript에서 사용할 수 있도록 만든 객체형 모델이다. 이 모델은 HTML을 이루는 각 태그(요소)들을 노드라는 트리구조로 만들고, 노드들이 또다른 트리구조를 이루어져 하나의 객체모델이 된다.
  + Virtual DOM이란 DOM을 복사해 새로운 javascript model로 만들어 메모리에 저장한 '가상의 돔'이다. 실제 DOM과 모든 요소,속성을 공유하지만 브라우저의 문서에 직접 접근할 수 없기에 가상(Virtual)의 돔이라고 한다. 리액트에서는 Virtual DOM을 이용하여 화면에 그려질 사항을 먼저 도입한 후 실제 DOM과 비교(Diffing)하여 변화된 요소들을 파악해 변경되는 사항만 DOM에 적용하는 역할을 한다. HTML문서 전체가 아닌 변화가 필요한 부분만 랜더링을 진행할 수 있고 재조정 과정의 Batch Update로 인해 일부시간에 다수의 변화가 생기더라도 한번만 랜더링과정을 거치며 최종적인 내용만 랜더링하게 된다.
 
  + ### Virtual DOM을 사용하는 이유
    * DOM에서 화면에 직접적인 변화(스타일, 인터랙션 등)이 발생하면 랜더링 과정을 진행하는데 브라우저에서 랜더링 과정을 진행하게 되면 다수의 변경사항이 생길경우 작업이 무거워져 속도에 영향을 줄 수 있다. 또한 DOM의 랜더링은 HTML 문서의 전체를 랜더링 하기 때문에 사소한 변화일 수록 불필요한 랜더링과정을 거치게 되며 비용 측면에서 손해를 발생시킬 수 있다.
    * Virtual DOM은 메모리에 저장되어 있기떄문에 변경사항에 대한 매우 가볍고 빠른 작업이 가능하다. 그렇기 때문에 브라우저 화면이 동적일 수록, 변화가 많을 수록 시간과 비용측면에서 많은 이득을 볼 수 있기 때문에 사용한다.
  
- 리액트의 특징을 설명해주세요.
  ---
  + 컴포넌트 기반의 UI 라이브러리로 중복된 코드들을 산탄총 수술하지 않고 컴포넌트화 하여 재사용할 수 있다.
  + 선언형 프로그래밍 방식으로 목적만 직설적으로 사용할 수 있다.
  + Virtual DOM을 사용하여 랜더링 과정을 최적화하여 프로그래밍 할 수 있다.
 
- flux 패턴에 대하여 설명해주세요.
  ---
  + MVC 패턴의 복잡성을 해소하기 위해 사용하는 패턴으로 목적이 분명한 단방향 패턴이다.
  + redux가 flux패턴을 따르고 있다.
 
- 상태관리에 대하여 설명해주세요.
  ---
  + 상태관리란 쉽게말하면 데이터를 관리하는 방법을 의미하며 해당 데이터를 UI/UX에 맞게 설계하고 구현하는 역할을 한다.
  + 리액트로 프로그래밍 하다 보면 상태가 많아져 부모 자식간의 상태가 굉장히 복잡하게 얽혀있게 되고, 상호간의 의존성이 많아지게 되면서 UI 변화의 흐름을 파악하기 어려워 진다.
  + 이러한 상태들을 효율적으로 관리하여 보다 직관적이고 알아보기 쉬운 코드를 작성하여 설계 및 구현해야한다.
  
- 궁금한 것에 대하여 알려주세요.
  ---
  - 이직을 준비중인 현직 개발자인데 이전 기수의 현직 개발자분들이 어떻게 효율적으로 이 챌린지를 완수하였는지 궁금합니다.
  - 종합적으로 개발은 8년차, 프론트엔드만으로 전향한지는 이제 4년차입니다. 이 챌린지를 통해 제가 얻을 수 있는 이익은 무엇이라 생각하시나요? 달성하기 위해 어떤 준비가 필요할까요?

