// 예제 5.2  컴포넌트의 기본 구조(src/components/post/Create.js)

import React, { Component } from 'react';
import PropTypes from 'prop-types';
class CreatePost extends Component {
  static propTypes = {
  }
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="create-post">
        Create a post - coming (very) soon
      </div>
    );
  }
}
export default CreatePost;
