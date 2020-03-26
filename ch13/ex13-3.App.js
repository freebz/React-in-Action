// 예제 13.3  간단한 리액트 네이티브 예제(App.js)

import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      people: []
    };
  }
  async componentDidMount() {
    const res = await fetch('https://swapi.co/api/people');
    const { results } = await res.json();
    this.setState(() => {
      return {
	people: results
      };
    });
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={{ color: '#fcd433', fontSize: 40, padding: 10}}>
          A long time ago, in a Galaxy far, for away...
        </Text>
        <Text>Here are some cool people:</Text>
        {this.state.people.map(p => {
	  return (
	    <Text style={{ color: '#fcd433' }} key={p.name}>
	      {p.name}
	    </Text>
	  );
	})}
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
