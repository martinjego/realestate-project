import { StyleSheet, Dimensions } from 'react-native';
import variables from './variables';
const { width, height } = Dimensions.get('window');

module.exports = StyleSheet.create({
  container: {
    top: 0,
    height: height*.10,
    backgroundColor: vars.colorPrimary,
    justifyContent: 'center',
    paddingHorizontal: 30
  },
  titleStyle: {
    marginTop: height*.03,
    color: vars.colorText,
    fontFamily: 'Avenir',
    fontSize: 20

  }
})
