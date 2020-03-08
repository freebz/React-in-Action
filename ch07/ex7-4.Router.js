// 예제 7.4  라우터에 추가할 cleanPath 함수(src/components/router/Router.js)

//...
cleanPath(path) {
  return path.replace(/\/\//g, '/');
}
//...
