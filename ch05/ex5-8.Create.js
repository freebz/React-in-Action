// 예제 5.8  기본적인 콘텐츠 검증(src/components/post/Create.js)

import PropTypes from 'prop-types';
import React from 'react';

import Filter from 'bad-words';
const filter = new Filter();
class CreatePost extends Component {
  //...
  handlePostChange(event) {
    const content = filter.clean(event.target.value);
    this.setState(() => {
      return {
	content,
	valid: content.length <= 280
      };
    });
  }
//...
}
export default CreatePost;
