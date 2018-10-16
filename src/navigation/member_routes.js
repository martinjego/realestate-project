import { TabNavigator, DrawerNavigator } from 'react-navigation';
import HomeScreen from "../screens/Member/HomeScreen";
import FavoritesScreen from "../screens/Member/FavoritesScreen";
import PostScreen from "../screens/Member/PostScreen";
import ContactScreen from "../screens/Member/ContactScreen";
import ProfileScreen from "../screens/Member/ProfileScreen";
import vars from "../styles/variables"

const TabMemberRoutes = TabNavigator({
  Home: { screen: HomeScreen, navigationOptions: { header: null, headerMode: 'screen' } },
  Favorites: { screen: FavoritesScreen, navigationOptions: { header: null, headerMode: 'screen' } },
  Post: { screen: PostScreen, navigationOptions: { header: null, headerMode: 'screen'} },
  Contact: { screen: ContactScreen, navigationOptions: { header: null, headerMode: 'screen'} },
  Profile: { screen: ProfileScreen, navigationOptions: { header: null, headerMode: 'screen' } },
},{
    swipeEnabled: true,
    lazy: false,
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
