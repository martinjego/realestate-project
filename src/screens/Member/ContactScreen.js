import React, { Component } from 'react';
import { View, Text, ScrollView, Image } from 'react-native';
import MemberHeader from '../../components/Member/Header';
import styles from '../../styles/home';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class ContactScreen extends Component {
  static navigationOptions = {
    tabBarIcon: ({tintColor}) => (
      <Image source={require('../../img/mail-icon.png')} style={{tintColor}} />
    )
  }
  render() {
    const { navigate } = this.props.navigation
    return (
      <View style={styles.container}>
        <MemberHeader title="Contact Us"/>
        <ScrollView>
          <Text>Contact</Text>
        </ScrollView>
      </View>
    )
  }
}
