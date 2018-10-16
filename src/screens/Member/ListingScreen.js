import React, { Component } from 'react';
import { View, Text, ScrollView, ImageBackground, TouchableOpacity } from 'react-native';
import MemberHeader from '../../components/Member/Header';
import styles from '../../styles/home';
import Icon from 'react-native-vector-icons/FontAwesome';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as listingActions from '../../actions/listing_actions';

class ListingScreen extends Component {
  static navigationOptions = {
    tabBarIcon: ({tintColor}) => (
      <Icon
        name="home"
        color={tintColor}
        size={30}
      />
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
      return (
        <TouchableOpacity key={residence}>
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
        <MemberHeader title="Listing"/>
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

