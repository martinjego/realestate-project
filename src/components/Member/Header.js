import React, { Component } from 'react';
import { View, Text } from 'react-native';
import styles from '../../styles/header';

export default class Header extends Component {
  render() {
    const { title }  = this.props;
    return(
      <View style={styles.container}>
        <Text style={styles.titleStyle}>{title}</Text>
      </View>
    )
  }
}
