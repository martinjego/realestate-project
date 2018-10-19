import { StyleSheet, Dimensions } from 'react-native';
import vars from './variables';
const { width, height } = Dimensions.get('window');

module.exports = StyleSheet.create({
  container: {
    top: 0,
    height: height*.10,
    justifyContent: 'center',
    backgroundColor: vars.colorPrimary,
    paddingHorizontal: 30,
    flexDirection: 'row'
  },
  titleStyle: {
    flex: 8,
    marginTop: height*.04,
    color: vars.colorText,
    fontFamily: 'Avenir',
    fontSize: 20
  },
  backButtonStyle: {
    marginTop: height*.04,
    flex: 1 
  },
  closeButtonStyle: {
    marginTop: height*.04,
    flex: 1 
  }
})
