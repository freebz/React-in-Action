// 예제 13.1  리액트 네이티브 예제 컴포넌트

import React, { Component } from 'react';
import { Text, View } from 'react-native';

export default class WhyReactNativeIsSoGreat extends Component {
  render() {
    return (
      <View>
        <Text>
          웹용 리액트를 좋아한다면 리액트 네이티브도 마음에 들 것이다.
        </Text>
        <Text>
          'div'와 'span' 같은 웹 컴포넌트 대신 'View'와 'Text' 같은 네이티브 컴포넌트를 사용한다.
        </Text>
      </View>
    );
  }
}
