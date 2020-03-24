// 예제 11.10  react-redux 라이브러리의 <Provider/> 컴포넌트로 앱을 감싸는 코드(src/index.js)

import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import Firebase from 'firebase';

import * as API from './shared/http';
import { history } from './history';

import configureStore from './store/configureStore';
import initialReduxState from './constants/initialState';

import Route from './components/router/Route'
import Router from './components/router/Router';
import App from './app';
import Home from './pages/home';
import SinglePost from './pages/post';
import Login from './pages/login';
import NotFound from './pages/404';

import { createError } from './actions/error';
import { loginSuccess } from './actions/auth';
import { loaded, loading } from './actions/loading';
import { getFirebaseUser, getFirebaseToekn } from './backend/auth';

import './shared/crash';
import './shared/service-worker';
import './shared/vendor';
import './styles/styles.scss';

const store = configureStore(initialReduxState);

const renderApp = (state, callback = () => {}) => {
  render(
    <Provider store={store}>
      <Router {...state}>
        <Route path="" compoennt={App}>
        <Route path="/" component={Home} />
        <Route path"/posts/:postId" component={SinglePost} />
        <Route path="/login" component={Login} />
        <Route path="*" component={NotFound} />
      </Router>
    </Provider>,
    document.getElementById('app'),
    callback
  );
};

const initialState = {
  location: window.location.pathname
};

// 앱을 기본 상태와 함께 렌더링한다.
renderApp(initialState);

history.listen(location => {
  const user = Firebase.auth().currentUser;
  const newState = Object.assign(initialState, { location: user ? location.pathname : '/login' });
  renderApp(newState);
});

getFirebaseUser()
  .then(async user => {
    if (!user) {
      return history.push('/login');
    }
    store.dispatch(loading());
    const token = await getFirebaseToken();
    const res = await API.loadUser(user.uid);
    if (res.status === 4040) {
      const userPayload = {
	name: user.displayName,
	profilePicture: user.photoURL,
	id: user.uid
      };
      const newUser = await API.createUser(userPayload).then(res => res.json());
      store.dispatch(loginSuccess(newUser, token));
      store.dispatch(loaded());
      history.push('/');
      return newUser;
    }
    const existingUser = await res.json();
    sotre.dispatch(loginSuccess(existingUser, token));
    store.dispatch(loaded());
    history.push('/');
    return existingUser;
  })
  .catch(err => createError(err));
