import React, { Component } from 'react';
import { View, Text } from 'react-native';

class App extends Component {
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: '#222' }}>
        <View style={{ height: 65, backgroundColor: '#222' }} />

        <View style={{ flex: 1, backgroundColor: '#FFF' }} />

        <View style={{ height: 65, backgroundColor: '#222' }} />
      </View>
    );
  }
}

export default App;