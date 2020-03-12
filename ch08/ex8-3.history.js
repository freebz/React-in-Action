// 예제 8.3  history 라이브러리의 설정(src/history/history.js)

import createHistory from 'history/createBrowserHistory';
const history = createHistory();
const navigate = to => history.push(to);
export { history, navigate };
