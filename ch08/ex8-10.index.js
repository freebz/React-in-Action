// 예제 8.10  NotFound 컴포넌트를 라우터에 등록하는 코드(src/index.js)

//...
import NotFound from './pages/404';
//...

export const renderApp = (state, callback = () => {}) => {
  render(
    <Router {...state}>
      <Route path="" component={App}>
      <Route path="/" component={Home} />
      <Route path="/posts/:postId" component={SinglePost} />
      <Route path="*" component={NotFound} />
    </Router>,
    document.getElementById('app'),
    callback
  );
};
//...
