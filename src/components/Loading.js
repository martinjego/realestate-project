import React, { Component } from 'react';
import { View, ActivityIndicator } from 'react-native';

export default class Loading extends Component {
  render() {
    return(
      <View style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
        <ActivityIndicator />
      </View>
    )
  }
}
