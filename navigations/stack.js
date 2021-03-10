import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import Home from "../screens/home/Home";
import Welcome from "../screens/welcome/Welcome";
import Header from "../components/Header";
import Drawer from "./drawer";

export const StackNavigator = createStackNavigator({
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
// export default createAppContainer(StackNavigator);
