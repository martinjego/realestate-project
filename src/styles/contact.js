import { StyleSheet, Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');

module.exports = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: vars.colorPrimary
  },
  formContainer: {
    flex: 2,
    marginHorizontal: 30,
    justifyContent: 'center',
  },
  inputIcon: {
    resizeMode: 'contain',
    width: 25,
    height: 25,
    flex: 1,
  },
  inputContainer: {
    backgroundColor: '#fff',  
    borderColor: '#000', 
    borderRadius: 10, 
    padding: 15, 
    flexDirection: 'row',
    marginVertical: 5 
  },
  buttonContainer: {
    backgroundColor: vars.colorSecondary,
    padding: 15,
    margin: 5,
    alignItems: 'stretch',
    bottom: 0,
    justifyContent: 'flex-end'
  },
  buttonText: {
    textAlign: 'center',
    fontFamily: vars.fontFamily,
    fontSize: 16,
  }
})
