// 예제 7.5  normalizeRoute 함수의코드(src/components/router/Router.js)

//...
normalizeRoute(path, parent) {
  if (path[0] === '/') {
    return path;
  }
  if (parent == null) {
    return path;
  }

  return `${parent.route}/${path}`;
}
//...
