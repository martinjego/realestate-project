import { Platform } from 'react-native';
import { StackNavigator, TabNavigator, DrawerNavigator } from 'react-navigation';
import HomeScreen from "../screens/Admin/HomeScreen";
import ProfileScreen from "../screens/Admin/ProfileScreen";
import ListingScreen from "../screens/Admin/ListingScreen";
import AddListingScreen from "../screens/Admin/AddListingScreen";

import SortDrawerContainer from "../components/SortDrawerContainer";

import vars from "../styles/variables"


const Home = StackNavigator({
  Building: { screen: HomeScreen, navigationOptions: { header: null, headerMode: 'screen' } },
  Listing: { screen: ListingScreen, navigationOptions: { header: null, headerMode: 'screen' } },
})

const TabAdminRoutes = TabNavigator({
  Home: { screen: Home },
  Profile: { screen: ProfileScreen, navigationOptions: { header: null, headerMode: 'screen' } },
},{
    swipeEnabled: false,
    tabBarPosition: 'bottom',
    animationEnabled: false,
    tabBarOptions: {
      activeTintColor: vars.colorPrimary,
      inactiveTintColor: 'gray',
      showIcon: true,
      style: {
        backgroundColor: '#fff',
      },
      renderIndicator: () => null,
      labelStyle: {
        fontSize: Platform.OS === "ios" ? 10 : 7 ,
        color: '#000',
        fontFamily: vars.fontFamilyLight,
        margin: 0,
        padding: 0,
      },
    },
  }
)

const AdminNavigator = DrawerNavigator({
  Member: TabAdminRoutes 
}, {
    drawerPosition: 'right',
    drawerWidth: 250,
    contentComponent: SortDrawerContainer 
  }
)

AdminNavigator.navigationOptions = {
  header: null
}

export default AdminNavigator;
