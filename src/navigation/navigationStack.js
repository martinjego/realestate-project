import { StackNavigator } from "react-navigation";
import SplashScreen from "../screens/SplashScreen";
import Screen2 from "../screens/screen2";
import CardStackStyleInterpolator from 'react-navigation/src/views/CardStack/CardStackStyleInterpolator';

const fade = (props) => {
    const {position, scene} = props

    const index = scene.index

    const translateX = 0
    const translateY = 0

    const opacity = position.interpolate({
        inputRange: [index - 0.7, index, index + 0.7],
        outputRange: [0.3, 1, 0.3]
    })

    return {
        opacity,
        transform: [{translateX}, {translateY}]
    }
}

const navigator = StackNavigator({
  Splash: {
    screen: SplashScreen, navigationOptions: { header: null }
  },
  Screen2: {
    screen: Screen2, navigationOptions: { header: null }
  }
}, {
  transitionConfig: () => ({
        screenInterpolator: (props) => {
          const {scene} = props
             if (scene.route.routeName === 'Screen2') {return fade(props)}
             return CardStackStyleInterpolator.forHorizontal(props)
          }        
        })
});

export default navigator;
