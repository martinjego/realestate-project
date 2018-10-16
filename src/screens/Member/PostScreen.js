import React, { Component } from 'react';
import { View, Text, ScrollView, ImageBackground, TouchableOpacity } from 'react-native';
import MemberHeader from '../../components/Member/Header';
import styles from '../../styles/home';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class PostScreen extends Component {
  static navigationOptions = {
    tabBarIcon: ({tintColor}) => (
      <Icon
        name="camera"
        color={tintColor}
        size={30}
      />
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
