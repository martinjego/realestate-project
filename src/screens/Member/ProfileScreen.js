import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as loginActions from '../../actions/login_actions';
import { retrieveData } from '../../utils/storage';

import MemberHeader from '../../components/Member/Header';
import styles from '../../styles/profile';

class ProfileScreen extends Component {
  static navigationOptions = {
    tabBarIcon: () => (
      <Icon
        name="user"
        color="#000"
        size={30}
      />
    )
  }
  render() {
    const { 
      navigation: { navigate }, 
      auth: { user } 
    } = this.props
    return (
      <View style={styles.container}>
        <MemberHeader title="Profile"/>
        <View style={styles.accountContainer}>
          <View style={styles.imageContainer}>
            <View style={styles.imageStyle}/>
          </View>
          <View style={styles.detailsContainer}>
            <Text style={styles.nameStyle}>{user.firstname} {user.lastname}</Text>
            <Text style={styles.otherNameStyle}>{user.email}</Text>
            <Text style={styles.otherNameStyle}>{user.mobile}</Text>
          </View>
        </View>
        <View style={styles.settingsContainer}>
          <View style={styles.settingStyle}>
            <View style={styles.iconContainer}>
              <Image source={require('../../img/pen.png')} style={styles.iconStyle}/>
            </View>
            <View style={styles.settingTextContainer}>
              <Text>Update Contact Details</Text>
            </View>
          </View>
          <View style={styles.settingStyle}>
            <View style={styles.iconContainer}>
              <Image source={require('../../img/power.png')} style={styles.iconStyle}/>
            </View>
            <View style={styles.settingTextContainer}>
              <Text>Reset Password</Text>
            </View>
          </View>
          <View style={styles.settingStyle}>
            <View style={styles.iconContainer}>
              <Image source={require('../../img/inquiries.png')} style={styles.iconStyle}/>
            </View>
            <View style={styles.settingTextContainer}>
              <Text>View My Inquiries</Text>
            </View>
          </View>
          <View style={styles.settingStyle}>
            <View style={styles.iconContainer}>
              <Image source={require('../../img/cart.png')} style={styles.iconStyle}/>
            </View>
            <View style={styles.settingTextContainer}>
              <Text>View My Listings</Text>
            </View>
          </View>
          <View style={styles.settingStyle}>
            <View style={styles.iconContainer}>
              <Image source={require('../../img/logout.png')} style={styles.iconStyle}/>
            </View>
            <View style={styles.settingTextContainer}>
              <Text>Logout</Text>
            </View>
          </View>
        </View>
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
    login_actions: bindActionCreators(loginActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileScreen);