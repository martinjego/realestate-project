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
              <Icon name="user-o" style={styles.inputIconStyle} size={20}/>
              <TextInput
                underlineColorAndroid="transparent"
                value={this.state.name}
                onChangeText={name => this.setState({ name })}
                style={styles.inputStyle}
                placeholder="Email"
              />
            </View>
            <View style={styles.inputContainer}>
              <Icon name="envelope-o" style={styles.inputIconStyle} size={20}/>
              <TextInput
                underlineColorAndroid="transparent"
                value={this.state.email}
                onChangeText={email => this.setState({ email })}
                style={styles.inputStyle}
                placeholder="Email"
              />
            </View>
            <View style={styles.inputContainer}>
              <Icon name="lock" style={styles.inputIconStyle} size={20}/>
              <TextInput
                underlineColorAndroid="transparent"
                value={this.state.password}
                onChangeText={password => this.setState({ password })}
                style={styles.inputStyle}
                placeholder="Password"
                secureTextEntry={true}
              />
            </View>
            <View style={styles.inputContainer}>
              <Icon name="phone" style={styles.inputIconStyle} size={20}/>
              <TextInput
                underlineColorAndroid="transparent"
                value={this.state.phone}
                onChangeText={phone => this.setState({ phone })}
                style={styles.inputStyle}
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
