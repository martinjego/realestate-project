import { StackNavigator, TabNavigator, DrawerNavigator } from 'react-navigation';
import HomeScreen from "../screens/Member/HomeScreen";
import FavoritesScreen from "../screens/Member/FavoritesScreen";
import PostScreen from "../screens/Member/PostScreen";
import ContactScreen from "../screens/Member/ContactScreen";
import ProfileScreen from "../screens/Member/ProfileScreen";
import ListingScreen from "../screens/Member/ListingScreen";

import SortDrawerContainer from "../components/SortDrawerContainer";

import vars from "../styles/variables"

const Home = DrawerNavigator({
  Building: { screen: HomeScreen, navigationOptions: { header: null, headerMode: 'screen' } },
  Listing: { screen: ListingScreen, navigationOptions: { header: null, headerMode: 'screen' } }
}, {
  drawerPosition: 'right',
  drawerWidth: 200,
  contentComponent: SortDrawerContainer 
})

const TabMemberRoutes = TabNavigator({
  Home: { screen: Home },
  Favorites: { screen: FavoritesScreen, navigationOptions: { header: null, headerMode: 'screen' } },
  Post: { screen: PostScreen, navigationOptions: { header: null, headerMode: 'screen'} },
  Contact: { screen: ContactScreen, navigationOptions: { header: null, headerMode: 'screen'} },
  Profile: { screen: ProfileScreen, navigationOptions: { header: null, headerMode: 'screen' } },
},{
    animationEnabled: false,
    tabBarOptions: {
      activeTintColor: vars.colorPrimary,
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
