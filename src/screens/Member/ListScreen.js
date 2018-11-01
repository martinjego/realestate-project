import React, { Component } from 'react';
import { View, Text, ScrollView, ImageBackground, TouchableOpacity, Image, ActivityIndicator } from 'react-native';
import MemberHeader from '../../components/Member/Header';
import Loading from '../../components/Loading';
import styles from '../../styles/list';
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
  formatNumber (num) {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")
  }
  render() {
    const { auth: { user: { api_token } }, listings, navigation: { navigate, goBack } } = this.props
    if (listings.isFetching) {
      return <Loading />
    }
    const { listings: { activeList }, listing_actions } = this.props;
    return (
      <View style={styles.container}>
        <MemberHeader back={goBack} like={() => listing_actions.like(activeList.listing_id, api_token)} release={() => navigate('DrawerOpen')}/>
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
          <View style={styles.headerDescription}>
            <Text style={{fontSize: 18, width: '75%' }}>18 months downpayment for affordable lot units</Text>
          </View>
          <View style={styles.propertyDetailsContainer}>
            <Text style={styles.properyDetailsLabel}>Property Details</Text>
            <View style={styles.propertyDetailsRow}>
              <Text style={styles.propertyInfoLabel}>Address</Text>
              <Text style={styles.propertyInfoValue}>{activeList.location.substr(0, 22)}</Text>
            </View>
            <View style={styles.propertyDetailsRow}>
              <Text style={styles.propertyInfoLabel}>Floor Area</Text>
              <Text style={styles.propertyInfoValue}>{activeList.floor_area} sqm</Text>
            </View>
            <View style={styles.propertyDetailsRow}>
              <Text style={styles.propertyInfoLabel}>Unit Type</Text>
              <Text style={styles.propertyInfoValue}>{activeList.unit_type}</Text>
            </View>
            <View style={styles.propertyDetailsRow}>
              <Text style={styles.propertyInfoLabel}>Lease Price</Text>
              <Text style={styles.propertyInfoValue}>{this.formatNumber(activeList.lease_price)}/month</Text>
            </View>
            <View style={styles.propertyDetailsRow}>
              <Text style={styles.propertyInfoLabel}>Sale Price</Text>
              <Text style={styles.propertyInfoValue}>{(activeList.sell_price == null) ? 'N/A' : activeList.sell_price}</Text>
            </View>
          </View>
          <Text style={styles.propertyDescrition}>{activeList.description}</Text>
        </ScrollView>
        <TouchableOpacity style={styles.buttonContainer}>
          <Text style={styles.buttonText}>INQUIRE</Text>

        </TouchableOpacity>
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

