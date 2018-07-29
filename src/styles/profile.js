import { StyleSheet, Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');
import variables from './variables';

module.exports = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: vars.colorWhite
  },
  accountContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 30,
  },
  imageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageStyle: {
    borderRadius: 50,
    height: 100,
    width: 100,
    backgroundColor: 'red'
  },
  detailsContainer: {
    flex: 2,
    justifyContent: 'center',
    paddingLeft: 20
  },
  nameStyle: {
    fontSize: 22,
    paddingVertical: 2,
    fontFamily: vars.fontFamily
  },
  otherNameStyle: {
    fontSize: 16,
    paddingVertical: 2,
    fontFamily: vars.fontFamily,
    color: vars.colorGray
  },
  settingsContainer: {
    flex: 3,
    paddingHorizontal: 40,
  },
  settingStyle: {
    flex: 1,
    flexDirection: 'row',
  },
  iconContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'

  },
  settingTextContainer: {
    flex: 2,
    justifyContent: 'center'
  }
})
