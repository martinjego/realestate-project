import { StackNavigator, TabNavigator, DrawerNavigator } from 'react-navigation';
import HomeScreen from "../screens/Member/HomeScreen";
import ProfileScreen from "../screens/Member/ProfileScreen";
import ListingScreen from "../screens/Member/ListingScreen";

const Home = StackNavigator({
  Building: { screen: HomeScreen, navigationOptions: { header: null, headerMode: 'screen' } },
  Listing: { screen: ListingScreen, navigationOptions: { header: null, headerMode: 'screen' } }
})

const TabMemberRoutes = TabNavigator({
  Home: { screen: Home },
  Profile: { screen: ProfileScreen, navigationOptions: { header: null, headerMode: 'screen' } },
},{
    swipeEnabled: true,
    lazy: false,
    tabBarOptions: {
      activeTintColor: '#4696E2',
      inactiveTintColor: 'gray',
    },
  }
)

const MemberNavigator = DrawerNavigator({
  Member: TabMemberRoutes 
}, {
    drawerPosition: 'right',
    drawerWidth: 250,
  }
)

MemberNavigator.navigationOptions = {
  header: null
}

export default MemberNavigator;
