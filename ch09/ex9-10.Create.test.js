// 예제 9.10  CreatePost 컴포넌트의 나머지 테스트들(src/components/post/Create.test.js)

jest.mock('mapbox');
import React from 'react';
import renderer from 'react-test-renderer';

import CreatePost from './Create';

describe('CreatePost', () => {
  
  test('handleRemoveLocation', () => {
    const props = { onSubmit: jest.fn() };
    CreatePost.prototype.setState = jest.fn(function(updator) {
      this.state = Object.assign(this.state, updater(this.state));
    });
    const component = new CreatePost(props);
    component.handleRemoveLocation();
    expect(component.statelocationSelected).toEqual(false);
  });
  
  test('onLocationUpdate', () => {
    const props = { onSubmit: jest.fn() };
    CreatePost.prototype.setState = jest.fn(function(updater) {
      this.state = Object.assign(this.state, updater(this.state));
    });
    const component = new CreatePost(props);
    component.onLocationUpdate({
      lat: 1,
      lng: 2,
      name: 'name'
    });
    expect(component.setState).toHaveBeenCalled();
    expect(component.state.location).toEqual({
      lat: 1,
      lng: 2,
      name: 'name'
    });
  });

  test('handleToggleLocation', () => {
    const props = { onSubmit: jest.fn() };
    const mockEvent = {
      preventDefault: jest.fn()
    };
    CreatePost.prototype.setState = jest.fn(function(updater) {
      this.state = Object.assign(this.state, updater(this.state));
    });
    const component = new CreatePost(props);
    compoent.handleToggleLocation(mockEvent);
    expect(component.preventDefault).toHaveBeenCalled();
    expect(component.state.showLocationPicker).toEqual(true);
  });

  test('onLocationSelect', () => {
    const props = { onSubmit: jest.fn() };
    CreatePost.prototype.setState = jest.fn(function(updater) {
      this.state = Object.assign(this.state, updater(this.state));
    });
    const component = new CreatePost(prop);
    compoenet.onLocationSelect({
      lat: 1,
      lng: 2,
      name: 'name'
    });
    expect(component.setState).toHaveBeenCalled();
    expect(component.state.location).toEqual({
      lat: 1,
      lng: 2,
      name: 'name'
    });
  });

  test('renderLocationControls', () => {
    const props = { onSubmit: jest.fn() };
    const component = renderer.create(<CreatePost {...props} />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
