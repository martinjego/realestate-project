import React, { Component } from 'react';
import { View, Text, ScrollView, ImageBackground, TouchableOpacity, Image, ActivityIndicator } from 'react-native';
import AdminHeader from '../../components/Admin/Header';
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
      residences: ["1","2","3","4","5"]
    }

    this.getResidence = this.getResidence.bind(this)
  }
  componentDidMount() {
    const { auth: {user: { api_token } }, building_actions } = this.props
    building_actions.get_buildings(api_token); 
  }
  clickedBldg(bldg_id) {
    const { auth: {user: { api_token } }, listing_actions } = this.props
    listing_actions.get_bldg_listings(bldg_id, api_token); 
    this.props.navigation.navigate('Listing')
  }
  getResidence() {
    return this.props.bldgs.list.map(bldg => {
      return (
        <TouchableOpacity onPress={() => this.clickedBldg(bldg.bldg_id)} key={bldg.bldg_id}>
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
    const { bldgs, navigation: { navigate } } = this.props
    return (
      <View style={styles.container}>
        <AdminHeader title="Manage Buildings" addBuilding={() => navigate('AddListing')}/>
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

