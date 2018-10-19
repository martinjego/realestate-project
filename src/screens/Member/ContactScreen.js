import React, { Component } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native';
import PlainHeader from '../../components/Member/PlainHeader';
import styles from '../../styles/contact';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class ContactScreen extends Component {
  static navigationOptions = {
    tabBarIcon: ({tintColor}) => (
      <Image source={require('../../img/mail-icon.png')} style={{tintColor}} />
    )
  }
  constructor(){
    super();

    this.state = {
      password: '',
      new_password: ''
    }
  }

  render() {
    const { navigate, goBack } = this.props.navigation
    return(
      <View style={styles.container}>
        <PlainHeader title="Contact Us" close={goBack}/>
        <View style={styles.formContainer}>
          <View style={styles.inputContainer}>
            <TextInput
              value={this.state.password}
              onChangeText={password => this.setState({ password })}
              style={{ flex: 4, textAlign: 'center' }}
              placeholder="Call 0998 966 02155"
            />
          </View>
          <View style={styles.inputContainer}>
            <TextInput
              value={this.state.new_password}
              onChangeText={password => this.setState({ new_password })}
              style={{ flex: 4, textAlign: 'center' }}
              placeholder="Email spinvest@gmail.com"
            />
          </View>
        </View>
        <TouchableOpacity onPress={() => navigate('Profile')} style={styles.buttonContainer}>
          <Text style={styles.buttonText}>OK</Text>
        </TouchableOpacity>
      </View>
    )
  }
}
