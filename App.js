import React from "react";
import { MainFeed, Login, Camera, Profile } from "./src/modules/screens";
import { Icon } from "./src/components/Icons";
import {
  createSwitchNavigator,
  createBottomTabNavigator
} from "react-navigation";

const Tabs = createBottomTabNavigator(
  {
    main: {
      screen: MainFeed,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <Icon name="home" color={tintColor} size={24} />
        )
      }
    },
    camera: {
      screen: Camera,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <Icon name="search" color={tintColor} size={24} />
        )
      }
    },
    camera: {
      screen: Camera,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <Icon name="bookmark" color={tintColor} size={24} />
        )
      }
    },
    profile: {
      screen: Profile,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <Icon name="bookmark" color={tintColor} size={24} />
        )
      }
    }
  },
  {
    swipeEnabled: true,
    tabBarOptions: {
      showLabel: false,
      showIcon: true
    }
  }
);

const MainStack = createSwitchNavigator({
  login: Login,
  main: Tabs
});

class App extends React.Component {
  render() {
    return <MainStack />;
  }
}
export default App;
