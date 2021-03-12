import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createDrawerNavigator } from "react-navigation-drawer";
import Home from "../screens/home/Home";
import Welcome from "../screens/welcome/Welcome";
import Header from "../components/Header";

const DrawerNavigator = createDrawerNavigator({
  Welcome: {
    screen: Welcome,
  },
  Home: {
    screen: Home,
  },
});
const StackNavigator = createStackNavigator({
  DrawerNavigator: {
    screen: DrawerNavigator,
    navigationOptions: {
      header: Header,
    },
  },
  Welcome: {
    screen: Welcome,
    navigationOptions: {
      header: Header,
    },
  },
  Home: {
    screen: Home,
    navigationOptions: {
      header: Header,
    },
  },
});

export default createAppContainer(StackNavigator);
