import React, { Component } from 'react';
import { View, Text, ScrollView, ImageBackground, TouchableOpacity, Image } from 'react-native';
import MemberHeader from '../../components/Member/Header';
import styles from '../../styles/home';
import vars from '../../styles/variables'
import Icon from 'react-native-vector-icons/FontAwesome';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as buildingActions from '../../actions/building_actions';

class HomeScreen extends Component {
  static navigationOptions = {
    tabBarIcon: ({tintColor}) => (
      <Image source={require('../../img/home-icon.png')} style={{tintColor}} />
    )
  }
  constructor() {
    super();
    this.state = {
      residences: ["1","2","3","4","5"]
    }

    this.getResidence = this.getResidence.bind(this)
  }
  componentDidMount() {
    //const { auth: {user: { api_token } }, building_actions } = this.props
    //this.props.building_actions.get_buildings(api_token); 
  }
  getResidence() {
    return this.state.residences.map(residence => {
      return (
        <TouchableOpacity onPress={() => this.props.navigation.navigate('Listing')} key={residence}>
          <ImageBackground source={require('../../img/res-bg-1.png')} resizeMode='cover' style={styles.listContainer}>
            <View style={styles.overlay}/>
            <Text style={styles.listTitle}>THE RESIDENCE {residence}</Text>
            <Text style={styles.listDescription}>Manila City</Text>
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

function mapStateToProps(state) {
  return {
    auth: state.auth
  }
}

function mapDispatchToProps(dispatch) {
  return {
    building_actions: bindActionCreators(buildingActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);

