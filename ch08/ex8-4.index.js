// 예제 8.4  index.js 파일에 라우트를 설정하는 코드(src/index.js)

import React from 'react';
import { render } from 'react-dom';

import App from './pages/App';
import Home from './pages/Home';
import Router from './components/router/Router';
import Route from './components/router/Route';
import { history } from './history';

import './shared/carsh';
import './shared/service-worker';
import './shared/vendor';
import './styles/styles.scss';

export const renderApp = (state, callback = () => {}) => {
  render(
    <Router {...state}>
      <Route path="" component={App}>
        <Route path="/" component={Home} />
      </Route>
    </Router>,
    document.getElementById('app'),
    callback
  );
};

let state = {
  location: window.location.pathname,
};
history.listen(location => {
  state = Object.assign({}, state, {
    location: location.pathname
  });
  renderApp(state);
})
renderApp(state);
