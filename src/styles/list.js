import { StyleSheet, Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');
import vars from './variables';

module.exports = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: vars.colorWhite
  },
  swiperBackground: {
    height: '100%', 
    width: '100%',
    justifyContent: 'center',
    paddingLeft: '10%'
  },
  swiperTitle: {
    fontFamily: 'Avenir',
    fontSize: 20,
    color: '#fff'
  },
  swiperDescription: {
    fontFamily: 'Avenir',
    fontSize: 15,
    color: '#fff'
  },
  swipeoutStyle: {
    backgroundColor: '#fff', 
    borderBottomWidth: 1, 
    borderColor: vars.colorGray 
  },
  swipeButtonStyle: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    backgroundColor: 'black',
    opacity: 0.5
  },
  headerDescription: {
    borderBottomWidth: 1, 
    justifyContent: 'center', 
    padding: width * .05
  },
  propertyDetailsContainer: {
    borderBottomWidth: 1, 
    padding: 15
  },
  properyDetailsLabel: {
    fontSize: 13, 
    width: '75%', 
    padding: 15,
    color: vars.colorGray
  },
  propertyDetailsRow: {
    alignItems: 'center', 
    flexDirection: 'row',
    paddingVertical: 2
  },
  propertyInfoLabel: {
    fontSize: 13,
    flex: 2, 
    textAlign: 'right',
    color: vars.colorGray
  },
  propertyInfoValue: {
    fontSize: 13,
    flex: 3, 
    textAlign: 'left',
    marginLeft: 35
  },
  propertyDescrition: {
    padding: width * .05,
    color: vars.colorGray,
    marginBottom: width/6
  },
  buttonContainer: {
    position: 'absolute',
    width: width,
    backgroundColor: vars.colorSecondary,
    padding: 15,
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
