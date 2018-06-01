import React, { Component } from 'react';
import { View } from 'react-native';
import { Button, Headline, TextInput, Text } from 'react-native-paper';
import styles from '../styles/login';

export default class LoginScreen extends Component {
  constructor() {
    super();

    this.state = {
      username: '',
      password: '',
      text: '',
    }
  }
  render() {
    const { navigate } = this.props.navigation
    return (
      <View style={styles.container}>
        <View style={styles.logoContainer}>
          <Headline>Login Screen</Headline>
        </View>
        <View style={styles.formContainer}>
          <TextInput
            label='Username'
            value={this.state.username}
            onChangeText={text => this.setState({ text })}
          />
          <TextInput
            label='Password'
            value={this.state.password}
            onChangeText={password => this.setState({ password })}
          />
          <Button raised onPress={() => navigate('Home')}>
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
      </View>
    )
  }
}
