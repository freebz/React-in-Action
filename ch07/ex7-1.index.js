// 예제 7.1  라우터의 사용 예(src/index.js)

//...
  <Router location="/">
    <Route path="/" component={App}>
      <Route path="posts/:post" component={SinglePost} />
      <Route path="login" component={Login} />
    </Route>
  </Router>
//...
