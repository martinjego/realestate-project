import { StyleSheet, Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');

module.exports = StyleSheet.create({
  container: {
    flex: 1,
  },
  logoContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  formContainer: {
    flex: 1,
    marginHorizontal: 30
  },
  otherLinks: {
    flexDirection: 'row'
  }
})
