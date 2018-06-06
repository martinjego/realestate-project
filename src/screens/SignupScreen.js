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

export default class SignupScreen extends Component {
  constructor() {
    super();

    this.state = {
      email: '',
      password: '',
      text: '',
    }
  }
  render() {
    const { navigate, goBack } = this.props.navigation
    return (
        <MainBackground style={styles.container}>
          <View style={styles.logoContainer}>
            <View style={styles.headerContainer}>
              <TouchableOpacity onPress={() => goBack(null)} style={{padding: 10}}>
                <Image source={require('../img/back-icon.png')} />
              </TouchableOpacity>
            </View>
            <Image source={require('../img/logo.png')} style={styles.logoStyle}/>
          </View>
          <View style={styles.formContainer}>
            <View style={styles.inputContainer}>
              <Icon name="user-o" style={{flex: 1}} size={20}/>
              <TextInput
                value={this.state.name}
                onChangeText={name => this.setState({ name })}
                style={{ flex: 8 }}
                placeholder="Email"
              />
            </View>
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
            <View style={styles.inputContainer}>
              <Icon name="phone" style={{flex: 1}} size={20}/>
              <TextInput
                value={this.state.phone}
                onChangeText={phone => this.setState({ phone })}
                style={{ flex: 8 }}
                placeholder="Phone"
                secureTextEntry={true}
              />
            </View>
            <TouchableOpacity onPress={() => navigate('Home')}>
              <View style={styles.buttonContainer}>
                <Text style={styles.buttonText}>SIGN UP</Text>
              </View>
            </TouchableOpacity>
          </View>
        </MainBackground>
    )
  }
}
