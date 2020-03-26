// 예제 12.8  리액트 라우터를 사용하기 위한 라우트 설정(src/routes.js)

import React from 'react';

import App from './app';
import Home from './pages/home';
import SinglePost from './pages/post';
import Login from './pages/login';
import NotFound from './pages/404';

import { Route, IndexRoute } from 'react-router';

export const routes = (
  <Route path="/" component={App}>
    <IndexRoute component={Home} />
    <Route path="/posts/:postId" component={SinglePost} />
    <Route path="/login" component={Login} />
    <Route path="*" component={NotFound} />
  </Route>
);
