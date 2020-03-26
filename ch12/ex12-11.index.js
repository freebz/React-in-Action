// 예제 12.11  가볍게 정리된 인덱스 파일(src/index.js)

import React from 'react';
import { hydrate } from 'react-dom';
import { Provider } from 'react-redux';

import { Router, browserHistory } from 'react-router';
import configureStore from './store/configureStore';
import initialReduxState from './constants/initialState';
import { routes } from './routes';

import './shared/crash';
import './shared/service-worker';
import './shared/vendor';
// 주의: 이 방법은 ES* 호환 방식은 아니지만, 빌드 도구로 웹팩을 사용하고 있기 때문에 정상적으로 동작한다.
import './styles/styles.scss';

// Redux 스토어를 생성한다.
const store = configureStore(initialReduxState);

hydrate(
  <Provider store={store}>
    <Router history={borwserHistory} routes={routes} />
  </Provider>,
  document.getElementById('app')
);
