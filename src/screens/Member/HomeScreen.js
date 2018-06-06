import React, { Component } from 'react';
import { View, Text, ScrollView, ImageBackground, TouchableOpacity } from 'react-native';
import MemberHeader from '../../components/Member/Header';
import styles from '../../styles/home';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class HomeScreen extends Component {
  static navigationOptions = {
    tabBarIcon: () => (
      <Icon
        name="home"
        color="#000"
        size={30}
      />
    )
  }
  constructor() {
    super();
    this.state = {
      residences: ["1","2","3","4","5"]
    }

    this.getResidence = this.getResidence.bind(this)
  }
  getResidence() {
    return this.state.residences.map(residence => {
      return (
        <TouchableOpacity key={residence} >
          <ImageBackground source={require('../../img/res-bg-1.png')} resizeMode='cover' style={styles.listContainer}>
            <View style={styles.overlay}/>
            <Text style={styles.listTitle}>THE RESIDENCE {residence}</Text>
          </ImageBackground>
        </TouchableOpacity>
      )
    })
  }
  render() {
    const { navigate } = this.props.navigation
    return (
      <View style={styles.container}>
        <MemberHeader title="Home"/>
        <ScrollView>
          {this.getResidence()}
        </ScrollView>
      </View>
    )
  }
}

