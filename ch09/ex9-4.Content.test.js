// 예제 9.4  얕은 렌더링(src/components/post/Content.test.js)

import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

import Content from './Content';

describe('<Content/>', () => {
  test('should render correctly', () => {
    const mockPost = {
      content: 'I am learning to test React components'
    };
    const wrapper = shallow(<Content post={mockPost} />);
  });
});
