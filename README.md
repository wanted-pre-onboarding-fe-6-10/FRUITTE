# Wanted Pre-Onboarding 6차 10팀 과제2

## 🌏 배포링크

- 링크

<br>

## 👋 팀원소개

<table>
    <tr>
        <td height="140px" align="center"> <a href="https://github.com/HE-SW">
            <img src="https://avatars.githubusercontent.com/HE-SW" width="140px" /> <br>김한얼</a> <br></td>
        <td height="140px" align="center"> <a href="https://github.com/eazae">
            <img src="https://avatars.githubusercontent.com/eazae" width="140px" /> <br>신이재</a> <br></td>
        <td height="140px" align="center"> <a href="https://github.com/blackgar">
            <img src="https://avatars.githubusercontent.com/blackgar" width="140px" /> <br>윤관 </a> <br></td>
        <td height="140px" align="center"> <a href="https://github.com/jihyun-jeon">
          <img src="https://avatars.githubusercontent.com/jihyun-jeon" width="140px" /> <br> 전지현</a> <br></td>
        <td height="140px" align="center"> <a href="https://github.com/Dev-jwJeong">
            <img src="https://avatars.githubusercontent.com/Dev-jwJeong" width="140px" /> <br>정재욱</a> <br></td>
        <td height="140px" align="center"> <a href="https://github.com/qkrwlstjd">
            <img src="https://avatars.githubusercontent.com/qkrwlstjd" width="140px" /> <br> 박진성 </a> <br></td>
        <td height="140px" align="center"> <a href="https://github.com/seungyeonchoo">
            <img src="https://avatars.githubusercontent.com/seungyeonchoo" width="140px" /> <br> 추승연 </a> <br></td>
    </tr>
    <tr>
        <td align="center"></td>
        <td align="center">상품 상세 페이지 구현</td>
        <td align="center"></td>
        <td align="center"></td>
        <td align="center"></td>
        <td align="center"></td>
        <td align="center"></td>
    </tr>
</table>
<br>

> ## 목차

- [프로젝트 개요](#프로젝트-개요)
- [폴더 구조](#폴더-구조)
- [컴포넌트 설명](#컴포넌트-설명)
- [미구현 내용](#미구현-내용)
- [회고](#회고)

<br>

> ## 프로젝트 개요

### [프루테](https://www.fruitte.co.kr/fruitte)

프라이빗 팜크닉 플랫폼 서비스 프루테의 자체 독립 플랫폼 구성을 위한 프로젝트

- ### 사용자 기능

  - 페이지네이션을 통한 상품 목록 조회
  - 스토어 상품 상세 조회
  - 스토어 상품 주문 (결제 기능은 제외)
  - 스토어 상품 주문 내역 확인

- ### 관리자 기능

  - 스토어 상품 등록 페이지
  - 스토어 상품 목록 페이지

  <br>

> ## 폴더 구조

<br>

> ## 컴포넌트 설명

## 상품 목록 조회

- 전체 상품 목록 리스트 조회 후 다시 10개씩 2차원 배열로 구성
- 현재 페이지를 useState로 관리, 페이지네이션의 버튼이 눌릴 때 마다 state값 변경으로 재 구성한 배열의 인덱스 접근
- 상품 목록 리스트의 개별 상품 클릭 시 상품의 id값을 조회하여 상품 상세 조회 페이지로 이동

## 상품 상세 페이지

### 개요

- 상품 상세 페이지 상단에 홈, 상품목록 홈으로 돌아갈 수 있는 링크
- 상품 이미지 랜더링, 하단에는 thumbnail로 디스플레이 (가로 스크롤)
  - 이미지 클릭시 상단 메인이미지로 크게 뜨도록 동작처리
- 상품 정보: 제목, 요약설명, 원산지, 배송방법, 배송비, 옵션, 판매불가여부, 총 금액, 구매버튼 등을 구현
- 옵션값 조정에 따라 상품 총 금액이 각 옵션탭 별, 총 상품금액에 반영이 되도록 처리

### 상품 상태에 따른 분기처리

- 상품 설명:
  - 상품 status(할인중상품, 베스트상품, 품절상품, 추천상품, 판매대기상품)에 따라 뱃지
    ![image](https://user-images.githubusercontent.com/96093461/188343854-4de12775-5c93-43c7-a506-2f46d3fe7419.png)
- 옵션이 하나인 상품: 옵션 선택 드랍다운 없이 바로 1개의 수량 선택, 옵션 삭제 버튼 생략
- 판매대기인 상품: 네이버페이 부분 제거 및 버튼 비활성화
- 품절 옵션이 포함된 상품: 해당 옵션은 선택이 안되도록 처리
  - 품절 항목의 텍스트는 strike 처리
    <br><img width="200" alt="Screen Shot 2022-09-05 at 10 40 42 AM" src="https://user-images.githubusercontent.com/96093461/188343920-ad0ab35b-d11c-4b78-a2ee-a710e896cc4f.png">
- 재고에 따른 주문가능 수량 제한: 상품 옵션 선택 시 수량이 기본으로 1로 들어가고, **≥1개 이상** **≤재고수량 이하**의 값을 조정할 수 있는 버튼 구현
- 중복된 상품 옵션 선택 시: '이미 선택한 옵션입니다'라는 메세지 출력
- 옵션 선택 삭제 버튼: 경고 안내창을 띄워준 뒤 제거 처리, 총 주문수량 및 총 가격에도 반영

### 상품 정보 탭

- hash link로 해당 탭 클릭 시 대응되는 부분으로 스크롤 되도록 처리
- sticky position으로 탭을 상단에 고정

### 구매하기 버튼 클릭 시

- sessionStorage에 `PROD_SELECTED_OPTION_<상품id>` key값으로 구매정보(상품id, 선택옵션, 배송비) 저장

```
{
  delivery_fee: 0
  options: [
    {opIdx: 1, option: "4kg", quantity: 3, priceSum: 92000},
    {opIdx: 0, option: "2kg", quantity: 1, priceSum: 52000}
  ]
  prodIdx: "5"
}
```

- '구매하기' 페이지로 라우팅

### UI 관련

- 반응형 UI 적용
- 공통 컴포넌트 활용

<br>

> ## 미구현 내용

<br>

> ## Git

- ### [Git branch 전략](https://github.com/wanted-pre-onboarding-fe-6-10/FRUITTE/wiki/%EA%B9%83-%EB%B8%8C%EB%9E%9C%EC%B9%98-%EC%A0%84%EB%9E%B5)

- ### [커밋 컨벤션](https://github.com/wanted-pre-onboarding-fe-6-10/FRUITTE/wiki/%EC%BB%A4%EB%B0%8B-%EC%BB%A8%EB%B2%A4%EC%85%98)

<br>

> ## Prettier, Eslint

- ### [코딩 컨벤션](https://github.com/wanted-pre-onboarding-fe-6-10/FRUITTE/wiki/%EC%BD%94%EB%94%A9-%EC%BB%A8%EB%B2%A4%EC%85%98)

- ### Prettier

```javascript
{
  "printWidth": 100,
  "tabWidth": 2,
  "arrowParens": "avoid",
  "singleQuote": true,
  "endOfLine": "auto"
}
```

- ### Eslint

```javascript
{
  "extends": ["react-app", "plugin:prettier/recommended"],
  "rules": {
    "prettier/prettier": ["error", { "endOfLine": "auto" }],
    "no-var": "warn", // var 금지
    "no-multiple-empty-lines": "warn", // 여러 줄 공백 금지
    "no-console": ["warn", { "allow": ["warn", "error"] }], // console.log() 금지
    "eqeqeq": "warn", // 일치 연산자 사용 필수
    "dot-notation": "warn", // 가능하다면 dot notation 사용
    "no-unused-vars": "warn", // 사용하지 않는 변수 금지
    "react/destructuring-assignment": "warn", // state, prop 등에 구조분해 할당 적용
    "react/jsx-pascal-case": "warn", // 컴포넌트 이름은 PascalCase로
    "react/no-direct-mutation-state": "warn", // state 직접 수정 금지
    "react/jsx-no-useless-fragment": "warn", // 불필요한 fragment 금지
    "react/no-unused-state": "warn", // 사용되지 않는 state
    "react/jsx-key": "warn", // 반복문으로 생성하는 요소에 key 강제
    "react/self-closing-comp": "warn", // 셀프 클로징 태그 가능하면 적용
    "react/jsx-curly-brace-presence": "warn" // jsx 내 불필요한 중괄호 금지
  }
}

```

<br>

> ## 회고

<br>
