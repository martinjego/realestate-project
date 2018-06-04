import { StyleSheet, Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');

module.exports = StyleSheet.create({
  container: {
    flex: 1, 
    position: 'absolute', 
    top: 0, 
    left: 0, 
    bottom: 0, 
    right: 0, 
    width: 'auto', 
    height: 'auto' 
  }
})
