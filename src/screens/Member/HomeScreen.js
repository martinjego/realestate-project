import React, { Component } from 'react';
import { View, Text } from 'react-native';
import MemberHeader from '../../components/Member/Header';
import styles from '../../styles/home';

export default class HomeScreen extends Component {
  render() {
    const { navigate } = this.props.navigation
    return (
      <View style={styles.container}>
        <MemberHeader title="Home"/>
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <Text onPress={() => navigate('DrawerOpen')}>Home Screen</Text>
        </View>
      </View>
    )
  }
}

