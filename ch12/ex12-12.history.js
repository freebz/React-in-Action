// 예제 12.12  방문 기록 모듈을 교체하는 코드(src/history/history.js)

import { browserHistory } from 'react-router';
const history = typeof window !== 'undefined'
  ? browserHistory
  : { push: () => {} };
const navigate = to => history.push(to);
export { history, navigate }
