import { TabNavigator, DrawerNavigator } from 'react-navigation';
import HomeScreen from "../screens/Member/HomeScreen";

const TabMemberRoutes = TabNavigator({
  Home: { screen: HomeScreen, navigationOptions: { header: null, headerMode: 'screen' } }
})

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
