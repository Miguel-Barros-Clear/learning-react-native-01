import React, { Component } from 'react';
import { View, Text } from 'react-native';

class App extends Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'center',
        }}>
        <View style={{ width: 50, height: 50, backgroundColor: 'green' }} />

        <View style={{ width: 50, height: 50, backgroundColor: 'red' }} />

        <View style={{ width: 50, height: 50, backgroundColor: 'yellow' }} />
      </View>
    );
  }
}

export default App;