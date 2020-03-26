// 예제 12.10  onEnter 가로채기 메서드의 활용(src/route.js)

import React from 'react';

import { Route, IndexRoute } from 'react-router';

import App from './app';
import Home from './pages/home';
import SinglePost from './pages/post';
import Login from './pages/login';
import NotFound from './pages/404';
import { firebase } from './backend';
import { isServer } from './utils/environment';
import { getFirebaseUser, getFirebaseToken } from './backend/auth';

async function requireUser(nextState, replace, callback) {
  if (!isServer()) {
    return callback();
  }
  try {
    const isOnLoginPage = nextState.location.pathname === '/login';
    const firebaseUser = await getFirebaseUser();
    const fireBaseToken = await getFirebaseToken();
    const noUser = !firebaseUser || !fireBaseToken;

    if (noUser && !isOnLoginPage && !isServer()) {
      replace({
	pathname: '/login'
      });
      return callback();
    }
    if (noUser && isOnLoginPage) {
      return callback();
    }
  } catch (err) {
    return callback(err);
  }
}

export const routes = (
  <Route path="/" component={App}>
    <IndexRoute component={Home} onEnter={requireUser} />
    <Route path="/posts/:postId" component={SinglePost} onEnter={requireUser} />
    <Route path="/login" component={Login} />
    <Route path="*" component={NotFound} />
  </Route>
);
