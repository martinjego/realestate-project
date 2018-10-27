import React, { Component } from 'react';
import { View, Text, ScrollView, TextInput, Image } from 'react-native';
import AdminHeader from '../../components/Admin/Header';
import Loading from '../../components/Loading';
import styles from '../../styles/add-listing';
import vars from '../../styles/variables'

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as buildingActions from '../../actions/building_actions';
import * as listingActions from '../../actions/listing_actions';

class AddListingScreen extends Component {
  static navigationOptions = {
    tabBarIcon: ({tintColor}) => (
      <Image source={require('../../img/home-icon.png')} style={{tintColor}} />
    )
  }
  constructor() {
    super();

  }
  componentDidMount() {
    //const { auth: {user: { api_token } }, building_actions } = this.props
    //building_actions.get_buildings(api_token); 
  }
  render() {
    const { bldgs, navigation: { navigate, goBack } } = this.props
    return (
      <View style={styles.container}>
        <AdminHeader title="Add Listing" close={() => goBack()}/>
        <ScrollView style={styles.formContainer}>
          <View style={styles.addListContainer}>
            <Text>Add listing</Text>

          </View>
          <View style={styles.grayContainer} />
          <View style={styles.inputContainer}>
            <TextInput 
              style={styles.inputFieldStyle}
              placeholder="Building Name"/>
          </View>
          <View style={styles.inputContainer}>
            <TextInput 
              style={styles.inputFieldStyle}
              placeholder="Listing Name"/>
          </View>
          <View style={styles.grayContainer}>
            <Text>Property Details</Text>
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>Floor Area</Text>
            <TextInput 
              style={styles.inputFieldStyle}
              placeholder="Set Floor Area"/>
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>Unit Type</Text>
            <TextInput 
              style={styles.inputFieldStyle}
              placeholder="Set Unit Type"/>
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>Lease Price</Text>
            <TextInput 
              style={styles.inputFieldStyle}
              placeholder="Set Lease Price"/>
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>Sale Price</Text>
            <TextInput 
              style={styles.inputFieldStyle}
              placeholder="Set Sale Price"/>
          </View>
          <View style={styles.inputDescriptionContainer}>
            <Text style={styles.inputDescriptionLabel}>Description</Text>
            <TextInput 
              style={styles.inputFieldStyle}
              multiline={true}
              placeholder="Input Description"/>
          </View>
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

export default connect(mapStateToProps, mapDispatchToProps)(AddListingScreen);

