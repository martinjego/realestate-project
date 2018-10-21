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
  listContainer: {
    flexDirection: 'row',
    backgroundColor: vars.colorWhite,
    justifyContent: 'center',
    height: height*.1,
    alignItems: 'center',
    padding: 10,
    margin: 10,
  },
  listImageContainer: {
    flex: 2, 
    alignItems: 'center'
  },
  listImage: {
    backgroundColor: 'red',
    width: 140, 
    height: 70,
    resizeMode: 'cover',
    alignSelf: 'center'
  },
  listDescriptionContainer: {
    flex: 2,
    flexDirection: 'column',
    alignItems: 'stretch'
  },
  listTitle: {
    fontSize: 13,
    fontFamily: 'Avenir',
    color: vars.colorBlack
  },
  listDescription: {
    fontSize: 10,
    fontFamily: 'Avenir',
    color: vars.colorGray
  },
  listOwner: {
    fontSize: 10,
    fontFamily: 'Avenir',
    color: vars.colorPrimary
  },
  LinearGradientlistOwner: {
    fontSize: 12,
    color: vars.colorPrimary,
    fontFamily: 'Avenir',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    backgroundColor: 'black',
    opacity: 0.5
  }
})
