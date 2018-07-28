import React, { Component } from 'react';
import { 
  View, 
  Image, 
  TextInput,
  TouchableOpacity
} from 'react-native';
import { Button, Headline, Text } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';

import MainBackground from '../components/Member/MainBackground';
import styles from '../styles/login';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as loginActions from '../actions/login_actions';
import { retrieveData } from '../utils/storage';

class LoginScreen extends Component {
  constructor() {
    super();

    this.state = {
      email: '',
      password: '',
    }
  }

  async componentWillMount() { // This is for auto login
    const { login_actions } = this.props;

    let email = await retrieveData('email');
    let password = await retrieveData('password');
    console.log(email, password)

    if (email && password) {
      login_actions.login({ email: email, password: password });
    }
  }
  render() {
    const { navigation: { navigate }, login_actions  } = this.props
    return (
        <MainBackground>
          <View style={styles.logoContainer}>
            <View style={styles.headerContainer}>
              <TouchableOpacity onPress={() => console.log('asdf')} style={{padding: 10}}>
                <Image source={require('../img/back-icon.png')} />
              </TouchableOpacity>
            </View>
            <Image source={require('../img/logo.png')} style={styles.logoStyle}/>
          </View>
          <View style={styles.formContainer}>
            <View style={styles.inputContainer}>
              <Icon name="envelope-o" style={{flex: 1}} size={20}/>
              <TextInput
                autoCapitalize="none"
                autoCorrect={false}
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
            <TouchableOpacity onPress={() => login_actions.login(this.state)}>
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
              <Text onPress={() => console.log('forgot')} style={{flex: 1, color: '#FFF' }}>Forgot Password</Text>
              <Text onPress={() => navigate('Signup')} style={{flex: 1, color: '#FFF', textAlign: 'right'}}>Create an Account</Text>
            </View>
          </View>
        </MainBackground>
    )
  }
}

function mapStateToProps(state) {
  return {
    auth: state.user
  }
}

function mapDispatchToProps(dispatch) {
  return {
    login_actions: bindActionCreators(loginActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);
