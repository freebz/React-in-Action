// 예제 8.7  Link 컴포넌트의 소스 코드(src/components/router/Link.js)

import PropTypes from 'prop-types';
import { Children, cloneElement } from 'react';
import { navigate } from '../../history';

function Link({ to, children }) {
  return cloneElement(Children.only(children), {
    onClick: () => navigate(to)
  })
}

Link.propTypes = {
  to: PropTypes.string,
  children: PropTypes.node
}

export default Link;
