// 예제 3.5  상태가 없는 함수형 컴포넌트

import React from "react";
import { render } from "react-dom";
import PropTypes from "prop-types";

function Greeting(props) {
  return <div>Hello {props.for}!</div>;
}
Greeting.propTypes = {
  for: PropTypes.string.isRequired
};
Greeting.defaultProps = {
  for: 'friend'
};

render(<Greeting for="Mark" />, mountNode);

// 또는, 화살표 함수를 사용해도 된다.
// const Greeting = (props) -> <div>Hello {props.for}</div>;
// ... 속성과 기본 속성은 동일한 방법으로 지정한다.
// render(<Greeting for="Mark" />, document.getElementById("root"));
