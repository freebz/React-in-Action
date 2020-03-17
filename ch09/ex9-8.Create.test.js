// 예제 9.8  첫 번째 테스트 코드(src/components/post/Create.test.js)

jest.mock('mapbox');
import React from 'react';
import renderer from 'react-test-renderer';

import CreatePost from './Create';

describe('CreatePost', () => {
  test('snapshot', () => {
    const props = { onSubmit: jest.fn() };
    const component = renderer.create(<CreatePost {...props} />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
