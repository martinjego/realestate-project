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

class FavoritesScreen extends Component {
  static navigationOptions = {
    tabBarIcon: ({tintColor}) => (
      <Image source={require('../../img/star-icon.png')} style={{tintColor}} />
    )
  }
  constructor() {
    super();

    this.getListing = this.getListing.bind(this)
  }
  componentDidMount() {
    const { auth: {user: { api_token, user_id } }, listing_actions } = this.props
    listing_actions.get_likes_list(user_id, api_token); 
  }
  onClickEdit(list_id) {
    const { auth: { user: { api_token } } } = this.props; 
    this.props.listing_actions.update_active_list(list_id, api_token)
    this.props.navigation.navigate('List')
  }
  getListing() {
    return this.props.listings.likedList.map(list => {
      var swipeoutBtns = [
        { 
          text: 'Edit', 
          onPress: () => this.onClickEdit(list.listing_id),
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
        <Swipeout style={styles.swipeoutStyle} key={list.listing_id} right={swipeoutBtns}>
          <View style={styles.listContainer}>
            <View style={styles.listImageContainer}>
              <Image source={require('../../img/res-bg-1.png')} resizeMode='contain' style={styles.listImage} />
            </View>
            <View style={styles.listDescriptionContainer}>
              <Text style={styles.listTitle}>{list.name.substring(0,15)}</Text>
              <Text style={styles.listDescription}>{list.description.substring(0,45)}...</Text>
              <Text style={styles.listOwner}>Owner {list.user_id}</Text>
            </View>
          </View>
        </Swipeout>
      )
    })
  }
  render() {
    const { listings, navigation: { navigate, goBack } } = this.props
    return (
      <View style={styles.container}>
        <MemberHeader title="Favorites" sort={() => navigate('DrawerOpen')}/>
        <ScrollView>
          { (listings.isFetching) ? <Loading /> : this.getListing() }
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

export default connect(mapStateToProps, mapDispatchToProps)(FavoritesScreen);

