import { StyleSheet, Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');

module.exports = StyleSheet.create({
  headerContainer: {
    position: 'absolute',
    left: 15,
    top: 20,
    flex: 2,
    flexDirection: 'row',
    justifyContent: 'flex-start'
  },
  formContainer: {
    top: 200,
    flex: 2,
    marginHorizontal: 30,
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
    borderRadius: 20,
    padding: 15,
    marginVertical: 10,
    bottom: 0
  },
  buttonText: {
    textAlign: 'center',
    fontFamily: vars.fontFamily,
    fontSize: 16,
  },
  titleStyle: {
    color: vars.colorText,
    fontFamily: 'Avenir',
    fontSize: 20,
    padding: 10
  }
})
