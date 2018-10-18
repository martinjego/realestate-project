import React, { Component } from 'react';
import { View, Text, ScrollView, ImageBackground, TouchableOpacity, TextInput, Image } from 'react-native';
import MemberHeader from '../../components/Member/Header';
import styles from '../../styles/update-profile';
import Icon from 'react-native-vector-icons/FontAwesome';
import MainBackground from '../../components/Member/MainBackground';

export default class UpdateContactScreen extends Component {
  constructor(){
    super();

    this.state = {
      email: '',
      phone: '',
    }
  }
  render(){
    const { navigate, goBack } = this.props.navigation
    return (
      <View style={styles.container}>
        <MemberHeader title="Update Contact Details" close={goBack}/>
        <View style={styles.formContainer}>
          <View style={styles.inputContainer}>
            <Image source={require('../../img/mobile-icon.png')} style={styles.inputIcon} />
            <TextInput
              value={this.state.password}
              onChangeText={password => this.setState({ phone })}
              style={{ flex: 4 }}
              placeholder="Edit mobile address"
            />
          </View>
          <View style={styles.inputContainer}>
            <Image source={require('../../img/mail-icon.png')} style={styles.inputIcon} />
            <TextInput
              value={this.state.new_password}
              onChangeText={email => this.setState({ email })}
              style={{ flex: 4 }}
              placeholder="Edit email address"
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
