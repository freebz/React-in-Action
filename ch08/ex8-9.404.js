// 예제 8.9  NotFound 컴포넌트의 소스 코드(src/pages/404.js)

import React from 'react';
import Link from '../components/router/Link';

export const NotFound = () => {
  return (
    <div className="not-found">
      <h2>Not found :(</h2>
      <Link to="/">
	<button>go back home</button>
      </Link>
    </div>
  );
};

export default NotFound;
