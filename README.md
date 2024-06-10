# 회원기능

## 1. form 태그의 이해 및 활용

### 1.1. 컴포넌트 생성

- /src/pages/member/test.html

```html
<!doctype html>
<html lang="ko">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>회원가입</title>
  </head>
  <body>
    <h1>입력양식(Form)</h1>
    <h2>postime 회원가입</h2>
    <div class="join-wrap">
      <form action="/member/join.php" method="get">
        <label for="email">email</label>
        <input type="text" id="email" name="email" class="email" />
      </form>
    </div>
  </body>
</html>
```

## 2. 회원가입

- /src/pages/member/Join.js

```html
<!doctype html>
<html lang="ko">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>회원가입</title>
  </head>
  <body>
    <h1>입력양식(Form)</h1>
    <h2>postime 회원가입</h2>
    <div class="join-wrap">
      <form action="/member/join.php" method="get" enctype="multipart/form-data">
        <div class="form-group">
          <label for="name">이름</label>
          <input type="text" id="name" name="name" class="name" />
        </div>
        <div class="form-group">
          <label for="email">이메일</label>
          <input type="email" id="email" name="email" class="email" />
        </div>
        <div class="form-group">
          <label for="pw">비밀번호</label>
          <input type="password" id="pw" name="pw" class="pw" />
        </div>
        <div class="form-group">
          <label for="pwcheck">비밀번호 확인</label>
          <input type="password" id="pwcheck" name="pwcheck" class="pwcheck" />
        </div>
        <div class="form-group">
          <label for="phone">전화번호</label>
          <input type="tel" id="phone" name="phone" class="phone" />
        </div>
        <div class="form-group">
          <label for="address">주소</label>
          <input type="text" id="address" name="address" class="address" />
        </div>
        <div class="form-group">
          <label for="address2">상세주소</label>
          <input type="text" id="address2" name="address2" class="address2" />
        </div>
        </div>
        <div class="form-group">
          <label for="birthday">생년월일</label>
          <input type="date" id="birthday" name="birthday" class="birthday" />
        </div>
        <div class="form-group">
          <label for="gender">성별</label>
          <select id="gender" name="gender" class="gender">
            <option value="">선택하세요</option>
            <option value="mail">남성</option>
            <option value="female">여성</option>
            <option value="other">기타</option>
          </select>
        </div>
        <div class="form-group">
          <label>취미생활</label>
          <div class="form-list">
            <input type="checkbox" id="hobby1" name="hobby" value="reading"/>
            <label for="hobby1">독서</label>
          </div>
          <div>
            <input type="checkbox" id="hobby2" name="hobby" value="travling"/>
            <label for="hobby2">여행</label>
          </div>
          <div>
            <input type="checkbox" id="hobby3" name="hobby" value="cooking"/>
            <label for="hobby3">요리</label>
          </div>
          <div>
            <input type="checkbox" id="hobby4" name="hobby" value="sports"/>
            <label for="hobby4">운동</label>
          </div>
        </div>
        <div class="form-group">
          <label>학생여부</label>
          <div class="form-list">
            <input type="radio" id="student_yes" name="student" value="yes"/>
            <label for="student_yes">예</label>

            <input type="radio" id="student_no" name="student" value="no"/>
            <label for="student_no">아니오</label>
          </div>
        </div>
        <div class="form-group">
          <label for="profile-img">프로필 이미지</label>
          <input type="file" id="profile-img" name="profile" class="profile-img"/>
        </div>
        <div class="form-group">
          <label for="memo">메모</label>
          <textarea id="memo" name="memo" rows="4" cols="50"></textarea>
        </div>
        <div class="form-group">
          <input type="color">
          <input type="range">
        </div>
        <div class="form-group">
            <input type="submit" value="확인"/>
            <button type="submit">submit 확인</button>
            <button type="button">button 확인</button>
            <button>저스트버튼</button>
        </div>
      </form>
    </div>
  </body>
</html>
```

### 2.1. 컴포넌트에 html 마이그레이션

- React 문법에 맞게 class를 className으로 변경
- React 문법에 맞게 for를 htmlFor로 변경
- css 변경 불필요
- JS
  : html 태그를 찾으려고 useRef를 사용하는 것은 권장하지 않는다.
  ```js
  const joinName = document.querySelector(".join-name");
  // 아래로 변경
  const joinName = useRef(null);
  // ref로 참조
  <input type="text" name="join-name" className="join-name" ref={joinName} />;
  // 사용시에는 current 활용
  // joinName.current
  ```

### 2.2. JS 적용

- useState 변수 사용하자
- onClick 사용
- onChange 사용
- event.preventDefault() 로 웹브라우저 자동 갱신 막기

```js
import { useEffect, useState } from "react";
import "../../css/member.css";
const Join = () => {
  const [joinName, setJoinName] = useState("");
  const [joinEmail, setJoinEmail] = useState("");
  // 회원가입시 처리할 함수
  const joinMember = event => {
    // 데이터를 최종적으로 전달하는 submit 실행시에는
    // 웹브라우저가 자동으로 갱신되므로 무조건 기본 기능을 막는다.
    event.preventDefault();

    console.log(joinName, joinEmail);
  };
  // 회원내용 재 작성 함수
  const joinReset = () => {
    setJoinName("");
    setJoinEmail("");
  };

  useEffect(() => {
    // 화면에 보일때 할일 작성
    // 일반 js 내용을 복사해서 넣고, React 스럽게 수정

    return () => {
      // cleanup 함수
      // 화면에서 사라질때 할일 작성
    };
  }, []);

  return (
    <div className="join-wrap">
      <form className="join-form">
        <div className="form-group">
          <label htmlFor="name">이름</label>
          <input
            type="text"
            value={joinName}
            onChange={event => {
              console.log(event.target);
              setJoinName(event.target.value);
            }}
            className="join-name"
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">이메일</label>
          <input
            type="email"
            value={joinEmail}
            onChange={event => {
              console.log(event.target);
              setJoinEmail(event.target.value);
            }}
            className="join-email"
          />
        </div>
        <div className="form-group">
          <button
            type="submit"
            className="bt-submit"
            onClick={event => {
              joinMember(event);
            }}
          >
            회원가입
          </button>
          <button
            type="reset"
            className="bt-cancel"
            onClick={() => {
              joinReset();
            }}
          >
            재작성
          </button>
        </div>
      </form>
    </div>
  );
};

export default Join;
```

### 2.3. Postman 테스트

- 새 탭을 연다

#### 2.3.1. POST 예

: api 주소를 알아낸다. (http://192.168.0.148:8080/api/user)
: body 탭 > raw 선택
: 데이터를 넣는다.

```json
{
  "id": "qorckus183",
  "pwd": "Ckdgusdlqkqh@@3",
  "name": "백창현",
  "email": "asdqwe@naver.com"
}
```

: Send 버튼을 선택 후 결과 확인

```json
{
  "statusCode": 4,
  "resultMsg": "이미 사용중인 아이디입니다",
  "resultData": 0
}
```

#### 2.3.2. 파일 업로드 테스트(Swagger 에서는 테스트 안됨)

: api 주소를 알아낸다. (http://192.168.0.148:8080/api/board/file)
: body 탭 > form-data 선택
: 주어진 형식 파악

```json
{
  "file": "파일입니다.",
  "p": {
    "boardId": 1,
    "calendarId": 1
  }
}
```

: key 의 단어로 file 작성함 ==> 펼치목록에서 file 선택
: value 로 파일을 선택함.

: 추가 key 를 작성한다.
: 추가된 key 에 내용을 넣는다.
: Content-type 에 내용 작성 ==> application/json (중요)
```json
{
  "boardId": 1,
  "calendarId": 1
}
```

- 최종적으로 Headers 탭에 Content-type 이 multipart/form-data 인지확인

#### 2.4. Swagger 사용법(F12 선택 후 Network 탭)

- 항목을 선택한다.
- try 버튼 선택
- 필수항목 입력
- Execute 버튼 선택
- response 확인

#### 2.5. Postman 또는 Swagger 쓰는 이유

- react 로 axios 작업 전에 정상적으로 되는지 확인 용도
- Postman 의 결과는 웹즈라우저에서도 될지는 판단 곤란
- Swagger 는 웹브라우저이므로 신뢰함.

#### 2.6. axios 적용
- FE 컴퓨터와 BE 컴퓨터가 다르다면 (하드웨어가)
  : package.json에 proxy 설정해야 합니다.

## 3. axios 기본

### 3.1. /src/axios 폴더 생성 권장

- /src/axios/user 폴더 생성
- /src/axios/user/apiuser.js 폴더 생성

## 4. 회원로그인

## 5. 회원정보수정
