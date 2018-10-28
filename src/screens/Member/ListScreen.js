import React, { Component } from 'react';
import { View, Text, ScrollView, ImageBackground, TouchableOpacity, Image, ActivityIndicator } from 'react-native';
import MemberHeader from '../../components/Member/Header';
import Loading from '../../components/Loading';
import styles from '../../styles/listing';
import vars from '../../styles/variables';

import Icon from 'react-native-vector-icons/FontAwesome';
import Swiper from 'react-native-swiper';
import Swipeout from 'react-native-swipeout';
import LinearGradient from 'react-native-linear-gradient';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as listingActions from '../../actions/listing_actions';

class ListScreen extends Component {
  static navigationOptions = {
    tabBarIcon: ({tintColor}) => (
      <Image source={require('../../img/home-icon.png')} style={{tintColor}} />
    )
  }
  constructor() {
    super();

  }
  render() {
    const { listings, navigation: { navigate, goBack } } = this.props
    if (listings.isFetching) {
      return <Loading />
    }
    return (
      <View style={styles.container}>
        <MemberHeader title="Listing" back={goBack} sort={() => navigate('DrawerOpen')}/>
        <View style={{minHeight: '30%'}}>
          <Swiper>
            <ImageBackground source={require('../../img/res-bg-1.png')} resizeMode='cover' style={styles.swiperBackground}>
              <View style={styles.overlay}/>
              <Text style={styles.swiperTitle}>Hello Swiper</Text>
              <Text style={styles.swiperDescription}>Hello Swiper</Text>
            </ImageBackground>
            <ImageBackground source={require('../../img/res-bg-1.png')} resizeMode='cover' style={styles.swiperBackground}>
              <View style={styles.overlay}/>
              <Text style={styles.swiperTitle}>Hello Swiper</Text>
              <Text style={styles.swiperDescription}>Hello Swiper</Text>
            </ImageBackground>
            <ImageBackground source={require('../../img/res-bg-1.png')} resizeMode='cover' style={styles.swiperBackground}>
              <View style={styles.overlay}/>
              <Text style={styles.swiperTitle}>Hello Swiper</Text>
              <Text style={styles.swiperDescription}>Hello Swiper</Text>
            </ImageBackground>
          </Swiper>
        </View>
        <ScrollView>
          <Text>List Screen</Text>
        </ScrollView>
      </View>
    )
  }
}

function mapStateToProps(state) {
  return {
    auth: state.auth,
    listings: state.listings
  }
}

function mapDispatchToProps(dispatch) {
  return {
    listing_actions: bindActionCreators(listingActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListScreen);

