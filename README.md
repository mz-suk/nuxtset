# vue.js(nuxt) 프로젝트 작업환경

web frontend 작업 기준

- NginX or Apache server
- REST API
- SPA

## 초기 작업환경 설정

- 로컬 개발 작업

```bash
# 작업대상폴더에서
# install 은 설치시 1회 실행
$ npm install
$ npm run dev
```

- 서버 배포 빌드

```bash
$ npm run build
$ npm run export
```

## 주요 작업 폴더

**참조 사이트(<https://ko.nuxtjs.org/docs/2.x/directory-structure/nuxt>)**

- dist : 웹서버에 배포될 파일
- src : 실제 작업 폴더
  - assets : css, image, font 등의 ui 자료
  - component : 화면 구성요소
  - layouts : main, sub 등의 레이아웃
  - middleware : 페이지 이동, 렌더링시 발생시킬 기능
  - mixins : 지역 요소별 공통으로 사용될 js
  - pages : 기본 화면
  - plugins : 사이트 전체에 공통으로 적용되는 js
  - static : 로컬 웹서버의 root
  - store : 화면에서 사용되는 데이터의 상태를 관리

## 주요 설정 파일

- .editorconfig, .gitignore 등의 기본 설정 파일 설명은 제외
- nuxt.config.js : nuxt 작업 환경 대부분의 설정을 해당 파일에서 제어함
  - plugins/axios.js : API 통신마다 오류메시지, 인증 등의 설정 제어
  - store/index.js : 사이트 공통으로 사용되는 데이터의 상태관리

## 기본 설치 nuxt 패키지

```bash
? Programming language: TypeScript
? Package manager: Npm
? Nuxt.js modules: Axios - Promise based HTTP client, Progressive Web App (PWA)
? Linting tools: ESLint, Prettier
? Testing framework: Jest
? Rendering mode: Single Page App
? Deployment target: Static (Static/Jamstack hosting)
```

## 추가 설치 패키지

- @nuxtjs/dotenv : 배포 타겟별 설정값을 제어하기 위해 사용
- sass & sass-loader : css preprocesser 를 사용하기 위함

## 옵션 설치 패키지

- moment, vue-moment(https://momentjs.com/) : Date 형식을 자주 사용시
- vuex-persistedstate(https://www.npmjs.com/package/vuex-persistedstate) : 사이트 새로고침에도 store 데이터가 유지되어야 하는 경우
- vee-validate : form validation 이 필요한 경우
- babel-plugin-transform-remove-console : 특정 환경에서 console.log 등을 보여주지 않고 싶은 경우

## axios 기본 사용 방법

참조 : <https://axios-http.com/docs/intro>

```JavaScript
this.$axios.$get(`/api/member/v1/login/developers-api/token/${this.intgMbrNo}`).then((res: any) => {
  localStorage.setItem('token', res.accessToken)
  if (res.accessToken) this.$axios.defaults.headers.common['X-AUTH-TOKEN'] = res.accessToken
  this.$fetch()
})
```

```JavaScript
const param = {
  coopChnlClsCd: 'CH01',
  cupDownType: 'D',
  cupPrmoNo: code,
}
this.$axios.$post('/api/promotion/v1/coupon/my-coupon/download', param)
  .then((res) => {
    console.log(res)
  })
```

```JavaScript
this.$axios.$delete('/api/system/v1/filemnge/fileList', { params: { fileNoList: noList.join(',') } })
  .then((res) => res.data)
```

```JavaScript

this.$axios.$put(`/api/promotion/v1/event/${this.$route.params.id}/reply/${item.evntReplyNo}`, this.mData).then((res) => {
  console.log(res)
})
```
