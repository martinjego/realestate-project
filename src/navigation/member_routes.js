import { TabNavigator, DrawerNavigator } from 'react-navigation';
import HomeScreen from "../screens/Member/HomeScreen";
import ProfileScreen from "../screens/Member/ProfileScreen";

const TabMemberRoutes = TabNavigator({
  Home: { screen: HomeScreen, navigationOptions: { header: null, headerMode: 'screen' } },
  Profile: { screen: ProfileScreen, navigationOptions: { header: null, headerMode: 'screen' } },
},{
    swipeEnabled: true,
    lazy: false,
    tabBarOptions: {
      activeTintColor: 'black',
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
