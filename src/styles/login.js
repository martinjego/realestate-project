import { StyleSheet, Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');

module.exports = StyleSheet.create({
  logoContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  logoStyle: {
    resizeMode: 'contain',
  },
  formContainer: {
    flex: 2,
    marginHorizontal: 30,
  },
  inputContainer: {
    backgroundColor: '#fff',  
    borderColor: '#000', 
    borderRadius: 10, 
    padding: 20, 
    flexDirection: 'row',
    marginVertical: 5 

  },
  buttonContainer: {
    backgroundColor: vars.colorSecondary,
    borderRadius: 20,
    padding: 10,
    marginVertical: 10
  },
  orStyle: {
    marginVertical: 10,
    textAlign: 'center',
    color: vars.colorText,
    fontSize: 16
  },
  buttonText: {
    textAlign: 'center',
    fontFamily: vars.fontFamily,
    fontSize: 16 
  },
  otherLinks: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10
  }
})
