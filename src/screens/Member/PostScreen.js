import React, { Component } from 'react';
import { View, Text, ScrollView, ImageBackground, TouchableOpacity, Image } from 'react-native';
import MemberHeader from '../../components/Member/Header';
import styles from '../../styles/home';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class PostScreen extends Component {
  static navigationOptions = {
    tabBarIcon: ({tintColor}) => (
      <Image source={require('../../img/post-icon.png')} style={{tintColor}} />
    )
  }
  render(){
    const { navigate } = this.props.navigation
    return (
      <View style={styles.container}>
        <MemberHeader title="Post"/>
        <ScrollView>
          <Text>Post</Text>
        </ScrollView>
      </View>
    )
  }
}
