import { StyleSheet, Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');

module.exports = StyleSheet.create({
  container: {
    justifyContent: 'center', 
    flex: 1, 
    alignItems: 'center',
  },
  notSelectedButton: {
    backgroundColor: '#9B9B9B',
    borderRadius: 5, 
    borderWidth: 2, 
    borderColor: 'transparent', 
    width: '70%', 
    marginVertical: '5%'
  },
  selectedButton: {
    borderColor: vars.colorSelected, 
    borderRadius: 5, 
    borderWidth: 2, 
    width: '70%', 
    marginVertical: '5%'
  },
  buttonText: {
    padding: 10,
    textAlign: 'center'
  }
})
