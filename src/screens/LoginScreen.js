import React, { Component } from 'react';
import { View, Image, TextInput } from 'react-native';
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
            <Button raised onPress={() => navigate('Home')} style={{backgroundColor: '#FFD55F', borderRadius: 20}}>
              Login
            </Button>
            <Button raised primary onPress={() => console.log('Pressed')}>
              Login with Facebook
            </Button>
            <View style={styles.otherLinks}>
              <Text style={{flex: 1 }}>Register</Text>
              <Text style={{flex: 1, textAlign: 'right'}}>Forgot Password?</Text>
            </View>
          </View>
        </MainBackground>
    )
  }
}
