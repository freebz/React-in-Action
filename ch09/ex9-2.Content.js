// 예제 9.2  Content 컴포넌트(src/components/post/Content.js)

import { PropTypes } from 'prop-types';
import React from 'react';

const Content = (props) => {
  const { post } = props;
  return (
    <p className="content">
      {post.content}
    </p>
  );
};

Content.propTypes = {
  post: PropTypes.object
};
export default Content;
