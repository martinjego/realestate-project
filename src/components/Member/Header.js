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
  getOpenListingDrawer(openDrawer) {
    return (
      <TouchableOpacity onPress={() => openDrawer()} style={styles.closeButtonStyle}>
        <Image source={require('../../img/sort-icon.png')} />
      </TouchableOpacity>
    )    
  }
  getLikeButton(like) {
    return (
      <TouchableOpacity onPress={() => like()} style={styles.likeButtonStyle}>
        <Image source={require('../../img/star-icon.png')} style={{tintColor: '#FFF', resizeMode: 'contain', height: 30}} />
      </TouchableOpacity>
    )    
  }
  getExportButton(release) {
    return (
      <TouchableOpacity onPress={() => like()} style={styles.exportButtonStyle}>
        <Image source={require('../../img/export-icon.png')} style={{tintColor: '#FFF', resizeMode: 'contain', height: 30}} />
      </TouchableOpacity>
    )    
  }
  render() {
    const { title, back, close, sort, like, release }  = this.props;
    return(
      <LinearGradient colors={vars.gradientColor}>
        <View style={styles.container}>
          { (back) ? this.getBackButton(back) : <View />}
          <Text style={styles.titleStyle}>{title}</Text>
          { (close) ? this.getCloseButton(close) : <View />}
          { (sort) ? this.getOpenListingDrawer(sort) : <View />}
          { (like) ? this.getLikeButton(like) : <View />}
          { (release) ? this.getExportButton(release) : <View />}
        </View>
      </LinearGradient>
    )
  }
}
