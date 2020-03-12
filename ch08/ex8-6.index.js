// 예제 8.6  라우터에 개별 포스트 페이지에 대한 연결을 추가하는 코드(src/index.js)

import React from 'react';
import { render } from 'react-dom';

import * as API from './shared/http';
import { history } from './history';
import Route from './components/router/Route';
import Router from './components/router/Router';
import App from './pages/App';
import Home from './pages/Home';
import SinglePost from './pages/post';

//...

export const renderApp = (state, callback = () => {}) => {
  render(
    <Router {...state}>
      <Route path="" component={App}>
        <Route path="/" component={Home} />
        <Route path="/posts/:postId" component={SinglePost} />
      </Route>
    </Router>,
    document.getElementById('app'),
    callback
  );
};

//...
