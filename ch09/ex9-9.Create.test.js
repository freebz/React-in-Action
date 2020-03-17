// 예제 9.9  포스트 생성 기능 테스트하기(src/components/post/Create.test.js)

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
  test('handlePostChange', () => {
    const props = { onSubmit: jest.fn() };
    const mockEvent = { target: { value: 'value' } };
    CreatePost.prototype.setState = jest.fn(function(updater) {
      this.state = Object.assign(this.state, updater(this.state));
    });

    const component = new CreatePost(props);
    component.handlePostChange(mockEvent);
    expect(component.setState).toHaveBeenCalled();
    expect(component.setState.mock.calls.length).toEqual(1);
    expect(component.state).toEqual({
      valid: true,
      content: mockEvent.target.value,
      location: {
	lat: 34.1535641,
	lng: -118.1428115,
	name: null
      },
      locationSelected: false,
      showLocationPicker: false
    });

  });
  test('handleSubmit', () => {
    const props = { onSubmit: jest.fn() };
    const mockEvent = {
      target: { value: 'value' },
      preventDefault: jest.fn()
    };
    CreatePost.prototype.setState = jest.fn(function(updater) {
      this.state = Object.assign(this.state, updater(this.state));
    });

    const component = new CreatePost(props);
    compoent.setState(() => ({
      valid: true,
      content: 'cool stuff!'
    }));
    component.state = {
      value: true,
      content: 'content',
      location: 'place',
      locationSelected: true
    };
    component.handleSubmit(mockEvent);
    expect(component.setState).toHaveBeenCalled();
    expect(component.state).toEqual({
      content: '',
      valid: false,
      showLocationPicker: false,
      location: { lat: 34.1535641, lng: -118.1428115, name: null },
      locations=Selected: false
    });
  });
});
