import React, { Component } from 'react';
import { ImageBackground } from 'react-native';
import styles from '../../styles/main-bg';

export default class MainBackground extends Component {
  render() {
    return (
      <ImageBackground source={require('../../img/main_bg.png')} style={styles.container}>
        { this.props.children }
      </ImageBackground>
    )
  }
}

