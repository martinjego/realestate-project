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
      <MainBackground>
        <View style={styles.headerContainer}>
          <TouchableOpacity onPress={() => goBack(null)} style={{padding: 10}}>
            <Image source={require('../../img/back-icon.png')} />
          </TouchableOpacity>
          <Text style={styles.titleStyle}>
            Update Contact Details
          </Text>
        </View> 
        <View style={styles.formContainer}>
          <View style={styles.inputContainer}>
            <Icon name="phone" style={{flex: 1}} size={20}/>
            <TextInput
              value={this.state.phone}
              onChangeText={phone => this.setState({ phone })}
              style={{ flex: 8 }}
              placeholder="Edit mobile number"
            />
          </View>
          <View style={styles.inputContainer}>
            <Icon name="envelope-o" style={{flex: 1}} size={20}/>
            <TextInput
              value={this.state.email}
              onChangeText={email => this.setState({ email })}
              style={{ flex: 8 }}
              placeholder="Edit email address"
            />
          </View>
          <TouchableOpacity onPress={() => navigate('Profile')}>
            <View style={styles.buttonContainer}>
              <Text style={styles.buttonText}>UPDATE</Text>
            </View>
          </TouchableOpacity>
        </View>
      </MainBackground>
    )
  }
}
