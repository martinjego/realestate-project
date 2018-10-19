import React, { Component } from 'react';
import { View, Text, ScrollView, ImageBackground, TouchableOpacity, TextInput, Image } from 'react-native';
import PlainHeader from '../../components/Member/PlainHeader';
import styles from '../../styles/update-profile';
import Icon from 'react-native-vector-icons/FontAwesome';
import MainBackground from '../../components/Member/MainBackground';

export default class ResetPasswordScreen extends Component{
  constructor(){
    super();

    this.state = {
      password: '',
      new_password: ''
    }
  }

  render(){
    const { navigate, goBack } = this.props.navigation
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
              onChangeText={password => this.setState({ new_password })}
              style={{ flex: 4 }}
              placeholder="New Password"
            />
          </View>
        </View>
        <TouchableOpacity onPress={() => navigate('Profile')} style={styles.buttonContainer}>
          <Text style={styles.buttonText}>UPDATE</Text>
        </TouchableOpacity>
      </View>
    )
  }
}
