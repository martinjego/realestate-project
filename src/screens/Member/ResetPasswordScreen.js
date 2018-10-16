import React, { Component } from 'react';
import { View, Text, ScrollView, ImageBackground, TouchableOpacity, TextInput, Image } from 'react-native';
import MemberHeader from '../../components/Member/Header';
import styles from '../../styles/update-profile';
import Icon from 'react-native-vector-icons/FontAwesome';
import MainBackground from '../../components/Member/MainBackground';

export default class ResetPasswordScreen extends Component{
  constructor(){
    super();

    this.state = {
      password: ''
    }
  }

  render(){
    const { navigate, goBack } = this.props.navigation
    return(
      <MainBackground>
        <View style={styles.headerContainer}>
          <TouchableOpacity onPress={() => goBack(null)} style={{padding: 10}}>
            <Image source={require('../../img/back-icon.png')} />
          </TouchableOpacity>
          <Text style={styles.titleStyle}>
            Reset Password
          </Text>
        </View>
        <View style={styles.formContainer}>
          <View style={styles.inputContainer}>
            <Icon name="lock" style={{flex: 1}} size={20}/>
            <TextInput
              value={this.state.password}
              onChangeText={password => this.setState({ password })}
              style={{ flex: 8 }}
              placeholder="Edit password"
            />
          </View>
          <TouchableOpacity onPress={() => navigate('Profile')}>
            <View style={styles.buttonContainer}>
              <Text style={styles.buttonText}>Submit</Text>
            </View>
          </TouchableOpacity>
        </View>
      </MainBackground>
    )
  }
}