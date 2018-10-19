import React, { Component } from 'react';
import { View, Text, ScrollView, ImageBackground, TouchableOpacity, Image } from 'react-native';
import MemberHeader from '../../components/Member/Header';
import styles from '../../styles/listing';
import vars from '../../styles/variables';

import Icon from 'react-native-vector-icons/FontAwesome';
import Swiper from 'react-native-swiper';
import Swipeout from 'react-native-swipeout';
import LinearGradient from 'react-native-linear-gradient';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as listingActions from '../../actions/listing_actions';

class ListingScreen extends Component {
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

    this.getListing = this.getListing.bind(this)
  }
  componentDidMount() {
    //const { auth: {user: { api_token } }, building_actions } = this.props
    //this.props.building_actions.get_buildings(api_token); 
  }
  getListing() {
    return this.state.residences.map(residence => {
      var swipeoutBtns = [
        { 
          text: 'Edit', 
          component: (
          <LinearGradient colors={vars.gradientColor}
            style={{
              flex: 1,
              alignItems: 'center',
              justifyContent: 'center',
              flexDirection: 'column',
            }}
          >

            <Image source={require('../../img/pen.png')} style={{tintColor: '#fff', resizeMode: 'contain', width: 25, height: 25}} />
          </LinearGradient>
          )
        },
        { 
          text: 'Delete', 
          component: (
          <LinearGradient colors={vars.gradientColor}
            style={styles.swipeButtonStyle}
          >
            <Image source={require('../../img/trash-icon.png')} style={{tintColor: '#fff', resizeMode: 'contain', width: 25, height: 25}} />
          </LinearGradient>
          )
        }
      ]
      return (
        <Swipeout style={styles.swipeoutStyle} key={residence} right={swipeoutBtns}>
          <View style={styles.listContainer}>
            <View style={styles.listImageContainer}>
              <Image source={require('../../img/res-bg-1.png')} resizeMode='contain' style={styles.listImage} />
            </View>
            <View style={styles.listDescriptionContainer}>
              <Text style={styles.listTitle}>Listing {residence}</Text>
              <Text style={styles.listDescription}>Listing description {residence}</Text>
              <Text style={styles.listOwner}>Owner {residence}</Text>
            </View>
          </View>
        </Swipeout>
      )
    })
  }
  render() {
    const { navigate } = this.props.navigation
    return (
      <View style={styles.container}>
        <MemberHeader title="Listing"/>
        <View style={{minHeight: '30%'}}>
          <Swiper>
            <ImageBackground source={require('../../img/res-bg-1.png')} resizeMode='cover' style={{ height: '100%', width: '100%'}}>
              <Text style={styles.text}>Hello Swiper</Text>
            </ImageBackground>
            <ImageBackground source={require('../../img/res-bg-1.png')} resizeMode='cover' style={{ height: '100%', width: '100%'}}>
              <Text style={styles.text}>Hello Swiper</Text>
            </ImageBackground>
            <ImageBackground source={require('../../img/res-bg-1.png')} resizeMode='cover' style={{ height: '100%', width: '100%'}}>
              <Text style={styles.text}>Hello Swiper</Text>
            </ImageBackground>
          </Swiper>
        </View>
        <ScrollView>
          {this.getListing()}
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
    listing_actions: bindActionCreators(listingActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListingScreen);

