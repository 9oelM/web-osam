# [Mili&Work: 효율적인 전투!](https://ecstatic-pare-7b8792.netlify.com)

* [Mili&Work: 효율적인 전투!](#miliwork-효율적인-전투)
   * [기본 설명](#기본-설명)
      * [데모](#데모)
         * [바로 보고 싶을 때](#바로-보고-싶을-때)
         * [직접 설치해서 할 때](#직접-설치해서-할-때)
      * [개요](#개요)
         * [군대 안에서 불편한 점](#군대-안에서-불편한-점)
         * [개선안](#개선안)
      * [주요 기능](#주요-기능)
         * [로그인](#로그인)
         * [대시보드](#대시보드)
         * [일정](#일정)
         * [메신저](#메신저)
         * [노트](#노트)
         * [반응형](#반응형)

## 기본 설명
* 소속: 해군 1함대 지휘통신대대 정보통신중대 
* 계급: 상병
* 성명: 문혁주
* 프로젝트명: Mili&Work
* 발사믹 주소: 따로 없고, 노트에 펜으로 적어서 프로토타입을 만들었습니다. 강사님께서 사진 찍어 가셨습니다!
* 프로젝트 설명: 밑에 [개요](#개요) 부분부터 읽어주세요.
* 주요 완료 기능: 주요 기능은 로그인, 대시보드, 일정, 메신저, 노트입니다. 더 자세히는 밑에 [주요 기능](#주요-기능)을 읽어주세요. GIF 이미지와 함께 설명되어 있습니다. 만약 설명이 부족하다고 느껴지신다면 [publish된 웹사이트에 직접 접속하시어 확인해 주세요.](https://ecstatic-pare-7b8792.netlify.com)
* 미완료 기능: 없습니다. 
* 향후 계획: [now.sh](now.sh)에 올라가 있는 백엔드 서버에 MongoDB를 추가하고 데이터 저장소도 클라우드를 사용하여 데이터가 저장될 수 있도록 할 계획입니다. 프론트는 완성도가 높아 대시보드 부분에 "오늘 날씨" 나 "금일 함대 전력사용량"이나 "금일 함대 공지사항" 같은 추가 가능한 유용한 카드를 만들려고 합니다. 감사합니다!

## 데모
### 바로 보고 싶을 때
* **프론트**: netlify를 사용하여 public URL에 올려놓았습니다. 이 링크에 들어가주세요: [https://ecstatic-pare-7b8792.netlify.com](https://ecstatic-pare-7b8792.netlify.com)
* **백엔드**: 간단한 노드 서버입니다. now.sh를 사용하여 이 또한 public URL에 올려놓았습니다. 메신저 기능을 사용하면서 서버가 메시지를 어떻게 읽고 있는지 확인하고 싶으시다면 이 링크에 접속해 주세요: [https://zeit.co/joelmun/web/zunfmijhin](https://zeit.co/joelmun/web/zunfmijhin)

### 직접 설치해서 할 때
메신저용 서버가 있어야 해서 정적인 웹페이지로는 완벽한 데모를 보여드릴 수가 없습니다. 다운받은 후 `localhost`에서 실행하시기 바랍니다. 

1. `git clone`으로 respository를 복사해 주세요.
```
$ git clone 
```

2. `npm install`로 `dependencies`를 설치해 주세요.
```
$ npm install
```

3. `node`가 설치되어 있지 않으면 노트 버전을 `8.9`로 설치해 주세요. 혹시라도 이미 설치되어 있는데 버전이 `8.12`보다 낮다면 `nvm`을 사용해 노드를 새로 설치하고 노드 버전을 바꿔 주세요:
```
$ nvm install 8.12
...
$ nvm use 8.12
$ node --version // 8.12.0
```

4. 거의 다 왔습니다. 프로젝트 루트 디렉토리에 들어가신 후 `npm run serve`를 실행시켜 주세요. 프론트엔드 서버는 `localhost:8080`에서 실행됩니다. 서버는 `localhost:8081`에서 실행됩니다.:
```
$ npm run serve
```

## 개요

### 군대 안에서 불편한 점
**국군 인트라넷의 단점**은 이와 같습니다:
* 나와 관련된 컨텐츠(내가 결재해야 하는 온나라 공문, 내가 아직 읽지 않은 메일, 나의 바로가기 등등..)를 한 번에 요약해서 보여주는 기능이 아예 없습니다.
* 인터넷과 연결이 불가하여 여러가지 좋은 기능을 지닌 앱을 다운로드하여 사용할 수 없습니다. 결국 우리는 구글 캘린더 대신 아날로그식 다이어리에 일일이 할 일을 펜으로 받아적어야 하고, 단순한 군 관련 내용 전파도 카카오톡 대신 메일을 발송해야 하고, 에버노트 대신 다이어리나 포스트잇에 메모를 해야 합니다.  

결과적으로 우리나라 국군은 효율적으로 일할 수 없는 상황입니다. 좋은 앱 하나만 사용하면 간단하게 해결 될 수 있는 일울 어려운 방식으로 해결하는 것에 우리나라 국군이 소중한 시간을 낭비하고 있다는 생각에 너무 아쉬운 마음이 들어 이 앱을 만들게 되었습니다. 

### 개선안
그래서 위에 말씀드린 기능을 한 곳에 모두 가지고 있는 웹 앱을 만들고 싶었습니다. 그게 바로 **Mili&Work**입니다!

## 주요 기능

### 로그인 
로그인 하실 때 사용 가능한 군번과 패스워드는 다음과 같습니다:
* 상사 홍길동:
    * 군번: 14-123123
    * 비밀번호: 123123
* 대위 김영희:
    * 군번: 10-123123
    * 비밀번호: 123123
* 중사 김철수: 
    * 군번: `length`가 0 이상인 스트링(`String`) 
    * 비밀번호: `length`가 0 이상인 스트링(`String`) (거의 아무거나 넣고 로그인하시면 됩니다.)

![Login](https://raw.githubusercontent.com/9oelM/o/master/docs/login.gif)

위에 나와있는대로 로그인하지 않으면 로그인 에러 메시지가 보이게 됩니다. 

### 대시보드
로그인하고 나서 사용자는 `/dashboard`로 redirect되게 됩니다. 

![Dashboard](https://raw.githubusercontent.com/9oelM/o/master/docs/dashboard.gif)

대시보드는 간단하게 사용자와 관련된 정보를 보여줍니다. 

네 가지 카드가 있습니다:
* 온나라 시스템 공문
* 최근 메일
* 오늘 일정
* 바로가기

나와있는 공문이나 메일을 클릭할 시 인트라넷의 온나라 시스템이나 메일 내용으로 바로 이동하게 됩니다. 

오늘 일정과 바로가기는 내가 오늘 가지고 있는 일정과 내가 즐겨찾기로 추가해 놓은 링크들을 보여줍니다. 

아쉽게도 인트라넷과 연결이 되지 않는 개발환경이기 때문에 클릭할 시 그 내용의 링크로 이동하는 것은 구현하지 않았습니다. 

### 일정
일정이 미리 설정되있지 않아 일정이 컴포넌트 렌더 시에 특정 조건에 따라 랜덤으로 설정되게 됩니다.(`src/assets/sampleSchedules.js`). 

![cal1](https://raw.githubusercontent.com/9oelM/o/master/docs/cal1.gif)

일정을 만들고, 

![cal2](https://raw.githubusercontent.com/9oelM/o/master/docs/cal2.gif)

일정을 고칠 수 있습니다. 

![cal3](https://raw.githubusercontent.com/9oelM/o/master/docs/cal3.gif)
일정을 월간, 주간, 일간 단위로 살펴 볼 수 있습니다.  

![cal4](https://raw.githubusercontent.com/9oelM/o/master/docs/cal4.gif)
### 메신저
메신저는 `socket.io`를 사용해 구현해 보았습니다. 

상사 홍길동으로 로그인하게 될 시 채팅방이 6개, 나머지 계정으로 로그인 할 시 채팅방이 1개가 렌더됩니다. 

서버가 제대로 구동되고 있다면, `localhost:8080`에 2개의 다른 탭으로 접속하여 다른 계정으로 로그인 할 시 `지휘통신대대 채팅방`(맨 위 채팅방)에서 채팅을 시험해 볼 수 있습니다. 

![msg1](https://raw.githubusercontent.com/9oelM/o/master/docs/msg1.gif)

![msg2](https://raw.githubusercontent.com/9oelM/o/master/docs/msg2.gif)

### 노트 
노트를 적을 수 있습니다. 테이블, 이미지 삽입이 가능하고, 군대에서 많이 사용하는 엑셀(한셀)로부터 데이터를 복사해올 수 있습니다. 

![note1](https://raw.githubusercontent.com/9oelM/o/master/docs/note1.gif)

![note2](https://raw.githubusercontent.com/9oelM/o/master/docs/note2.gif)

또, 마크다운 형식을 지원합니다.

![note3](https://raw.githubusercontent.com/9oelM/o/master/docs/note3.gif)

### 반응형
스크린 사이즈를 줄여도 사용에 어려움이 없도록 제작했습니다. 

![responsive](https://raw.githubusercontent.com/9oelM/o/master/docs/resp.gif)
