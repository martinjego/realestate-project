import React, { Component } from 'react';
import { 
  View, 
  Image, 
  TextInput,
  TouchableOpacity
} from 'react-native';
import { Button, Headline, Text } from 'react-native-paper';
import MainBackground from '../components/Member/MainBackground';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from '../styles/login';

export default class LoginScreen extends Component {
  constructor() {
    super();

    this.state = {
      email: '',
      password: '',
      text: '',
    }
  }
  render() {
    const { navigate } = this.props.navigation
    return (
        <MainBackground style={styles.container}>
          <View style={styles.logoContainer}>
            <Image source={require('../img/logo.png')} style={styles.logoStyle}/>
          </View>
          <View style={styles.formContainer}>
            <View style={styles.inputContainer}>
              <Icon name="envelope-o" style={{flex: 1}} size={20}/>
              <TextInput
                value={this.state.email}
                onChangeText={email => this.setState({ email })}
                style={{ flex: 8 }}
                placeholder="Email"
              />
            </View>
            <View style={styles.inputContainer}>
              <Icon name="lock" style={{flex: 1}} size={20}/>
              <TextInput
                value={this.state.password}
                onChangeText={password => this.setState({ password })}
                style={{ flex: 8 }}
                placeholder="Password"
                secureTextEntry={true}
              />
            </View>
            <TouchableOpacity onPress={() => navigate('Home')}>
              <View style={styles.buttonContainer}>
                <Text style={styles.buttonText}>LOGIN</Text>
              </View>
            </TouchableOpacity>
            <Text style={styles.orStyle}>Or</Text>
            <TouchableOpacity onPress={() => console.log('Login with facebook')}>
              <View style={[styles.buttonContainer, {backgroundColor: "#3B5998", flexDirection: 'row'}]}>
                <Image source={require('../img/facebook-icon.png')} style={{flex: 1, resizeMode: 'contain'}}/>
                <Text style={[styles.buttonText, {color: '#FFF', flex: 5, textAlign: 'left'}]}>Log in with Facebook</Text>
              </View>
            </TouchableOpacity>
            <View style={styles.otherLinks}>
              <Text onPress={console.log('forgot')} style={{flex: 1, color: '#FFF' }}>Forgot Password</Text>
              <Text onPress={console.log('create')} style={{flex: 1, color: '#FFF', textAlign: 'right'}}>Create an Account</Text>
            </View>
          </View>
        </MainBackground>
    )
  }
}
