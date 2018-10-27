import { StyleSheet, Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');
import vars from './variables';

module.exports = StyleSheet.create({
  container: {
    flex: 1,
  },
  addListContainer: {
    height: height/6,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  formContainer: {
    backgroundColor: '#fff',
  },
  inputContainer: {
    borderBottomWidth: 1,
    borderColor: vars.colorGray,
    backgroundColor: '#fff',
    padding: 20,
    flexDirection: 'row'
  },
  inputLabel: {
    flex: 1,
  },
  inputFieldStyle: {
    fontSize: 15,
    flex: 2,
  },
  grayContainer: {
    backgroundColor: vars.colorDarkGray,
    height: 30,
    paddingLeft: '5%',
    justifyContent: 'center'
  },
  inputDescriptionContainer: {
    padding: 20,
  },
  inputDescriptionLabel: {
    paddingBottom: 30
  }
})
