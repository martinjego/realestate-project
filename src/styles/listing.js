import { StyleSheet, Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');
import vars from './variables';

module.exports = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: vars.colorWhite
  },
  swipeoutStyle: {
    backgroundColor: '#fff', 
    borderBottomWidth: 1, 
    borderColor: vars.colorGray 
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
    fontSize: 15,
    fontFamily: 'Avenir',
    color: vars.colorBlack
  },
  listDescription: {
    fontSize: 12,
    fontFamily: 'Avenir',
    color: vars.colorGray
  },
  listOwner: {
    fontSize: 12,
    color: vars.colorPrimary,
    fontFamily: 'Avenir',
  }
})
