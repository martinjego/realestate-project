import React, { Component } from 'react';
import { View, Text, ScrollView, ImageBackground, TouchableOpacity, Image } from 'react-native';
import MemberHeader from '../../components/Member/Header';
import styles from '../../styles/home';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class FavoritesScreen extends Component {
  static navigationOptions = {
    tabBarIcon: ({tintColor}) => (
      <Image source={require('../../img/star-icon.png')} style={{tintColor}} />
    )
  }
  render() {
    const { navigate } = this.props.navigation
    return (
      <View style={styles.container}>
        <MemberHeader title="Favorites"/>
        <ScrollView>
          <Text>Favorites</Text>
        </ScrollView>
      </View>
    )
  }
}
