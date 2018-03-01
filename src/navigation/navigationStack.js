import { StackNavigator } from "react-navigation";
import Screen1 from "../screens/screen1";
import Screen2 from "../screens/screen2";

const navigator = StackNavigator({
  screen1: {
    screen: Screen1, navigationOptions: { header: null }
  },
  screen2: {
    screen: Screen2, navigationOptions: { header: null }
  }
});

export default navigator;
