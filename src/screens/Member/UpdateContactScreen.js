import React, { Component } from 'react';
import { View, Text, ScrollView, ImageBackground, TouchableOpacity, TextInput, Image } from 'react-native';
import PlainHeader from '../../components/Member/PlainHeader';
import styles from '../../styles/update-profile';
import Icon from 'react-native-vector-icons/FontAwesome';
import MainBackground from '../../components/Member/MainBackground';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as userActions from '../../actions/login_actions';

class UpdateContactScreen extends Component {
  constructor(){
    super();

    this.state = {
      email: '',
      mobile: '',
    }
  }
  render(){
    const { 
      navigation: { navigate, goBack }, 
      user_actions, auth: { user } 
    } = this.props;
    return (
      <View style={styles.container}>
        <PlainHeader title="Update Contact Details" close={goBack}/>
        <View style={styles.formContainer}>
          <View style={styles.inputContainer}>
            <Image source={require('../../img/mobile-icon.png')} style={styles.inputIcon} />
            <TextInput
              keyboardType="phone-pad"
              value={this.state.mobile}
              onChangeText={mobile => this.setState({ mobile })}
              style={{ flex: 4 }}
              placeholder="Edit mobile address"
            />
          </View>
          <View style={styles.inputContainer}>
            <Image source={require('../../img/mail-icon.png')} style={styles.inputIcon} />
            <TextInput
              autoCapitalize='none'
              value={this.state.new_password}
              onChangeText={email => this.setState({ email })}
              style={{ flex: 4 }}
              placeholder="Edit email address"
            />
          </View>
        </View>
        <TouchableOpacity onPress={() => user_actions.update_contact(this.state, user)} style={styles.buttonContainer}>
          <Text style={styles.buttonText}>UPDATE</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

function mapStateToProps(state) {
  return {
    auth: state.auth,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    user_actions: bindActionCreators(userActions, dispatch),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UpdateContactScreen);

