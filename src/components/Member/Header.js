import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import styles from '../../styles/header';
import vars from '../../styles/variables';

import LinearGradient from 'react-native-linear-gradient';

export default class Header extends Component {
  getBackButton(goBack) {
    return (
      <TouchableOpacity onPress={() => goBack(null)} style={styles.backButtonStyle}>
        <Image source={require('../../img/back-icon.png')} />
      </TouchableOpacity>
    )    
  }
  getCloseButton(goBack) {
    return (
      <TouchableOpacity onPress={() => goBack(null)} style={styles.closeButtonStyle}>
        <Image source={require('../../img/close-icon.png')} />
      </TouchableOpacity>
    )    
  }
  render() {
    const { title, back, close }  = this.props;
    return(
      <LinearGradient colors={vars.gradientColor}>
        <View style={styles.container}>
          { (back) ? this.getBackButton(back) : <View />}
          <Text style={styles.titleStyle}>{title}</Text>
          { (close) ? this.getCloseButton(close) : <View />}
        </View>
      </LinearGradient>
    )
  }
}
