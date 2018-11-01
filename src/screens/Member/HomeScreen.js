import React, { Component } from 'react';
import { View, Text, ScrollView, ImageBackground, TouchableOpacity, Image, ActivityIndicator } from 'react-native';
import MemberHeader from '../../components/Member/Header';
import Loading from '../../components/Loading';
import styles from '../../styles/home';
import vars from '../../styles/variables'
import Icon from 'react-native-vector-icons/FontAwesome';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as buildingActions from '../../actions/building_actions';
import * as listingActions from '../../actions/listing_actions';

class HomeScreen extends Component {
  static navigationOptions = {
    tabBarIcon: ({tintColor}) => (
      <Image source={require('../../img/home-icon.png')} style={{tintColor}} />
    )
  }
  constructor() {
    super();
    this.state = {
      list: [
        {
          "id": 1,
          "user_id": "1",
          "name": "Hello world",
          "description": "",
          "status": "1",
          "images": [
              {
                  "id": 9,
                  "image_url": "http://spectrum.magnetmanila.com/public/image/68b8dfd48f9bed46.jpg"
              },
              {
                  "id": 10,
                  "image_url": "http://spectrum.magnetmanila.com/public/image/f40fce8d31796e65.jpg"
              }
          ]
        }
      ]
    }

    this.getResidence = this.getResidence.bind(this)
  }
  componentDidMount() {
    //const { auth: {user: { api_token } }, building_actions } = this.props
    //building_actions.get_buildings(api_token); 
  }
  clickedBldg(bldg_id) {
    const { auth: {user: { api_token } }, listing_actions } = this.props
    listing_actions.get_bldg_listings(bldg_id, api_token); 
    this.props.navigation.navigate('Listing')
  }
  getResidence() {
    return this.state.list.map(bldg => {
      return (
        <TouchableOpacity onPress={() => this.clickedBldg(bldg.id)} key={bldg.id}>
          <ImageBackground source={require('../../img/res-bg-1.png')} resizeMode='cover' style={styles.listContainer}>
            <View style={styles.overlay}/>
            <Text style={styles.listTitle}>{bldg.name}</Text>
            <Text style={styles.listDescription}>{bldg.location}</Text>
          </ImageBackground>
        </TouchableOpacity>
      )
    })
  }
  render() {
    const { bldgs } = this.props
    return (
      <View style={styles.container}>
        <MemberHeader title="Home"/>
        <ScrollView>
          {(bldgs.isFetching) ? <Loading /> : this.getResidence()}
        </ScrollView>
      </View>
    )
  }
}

function mapStateToProps(state) {
  return {
    auth: state.auth,
    bldgs: state.bldgs
  }
}

function mapDispatchToProps(dispatch) {
  return {
    building_actions: bindActionCreators(buildingActions, dispatch),
    listing_actions: bindActionCreators(listingActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);

