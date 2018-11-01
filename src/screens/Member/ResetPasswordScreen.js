import React, { Component } from 'react';
import { View, Text, ScrollView, ImageBackground, TouchableOpacity, TextInput, Image } from 'react-native';
import PlainHeader from '../../components/Member/PlainHeader';
import styles from '../../styles/update-profile';
import Icon from 'react-native-vector-icons/FontAwesome';
import MainBackground from '../../components/Member/MainBackground';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as userActions from '../../actions/login_actions';

class ResetPasswordScreen extends Component{
  constructor(){
    super();

    this.state = {
      password: '',
      new_password: ''
    }
  }

  render(){
    const { 
      navigation: { navigate, goBack }, 
      user_actions, auth: { user } 
    } = this.props;
    return(
      <View style={styles.container}>
        <PlainHeader title="Reset Password" close={goBack}/>
        <View style={styles.formContainer}>
          <View style={styles.inputContainer}>
            <Image source={require('../../img/old-lock.png')} style={styles.inputIcon} />
            <TextInput
              value={this.state.password}
              onChangeText={password => this.setState({ password })}
              style={{ flex: 4 }}
              placeholder="Old password"
            />
          </View>
          <View style={styles.inputContainer}>
            <Image source={require('../../img/new-lock.png')} style={styles.inputIcon} />
            <TextInput
              value={this.state.new_password}
              onChangeText={new_password => this.setState({ new_password })}
              style={{ flex: 4 }}
              placeholder="New Password"
            />
          </View>
        </View>
        <TouchableOpacity onPress={() => user_actions.update_password(this.state, user)} style={styles.buttonContainer}>
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

export default connect(mapStateToProps, mapDispatchToProps)(ResetPasswordScreen);

