import { createAppContainer } from "react-navigation";
import { createDrawerNavigator } from "react-navigation-drawer";
import Home from "../screens/home/Home";
import Welcome from "../screens/welcome/Welcome";
// import StackNavigator from "./stack";
import Header from "../components/Header";
import { StackNavigator } from "./stack";

const DrawerNavigator = createDrawerNavigator(
  {
    Welcome: {
      screen: StackNavigator,
    },
    // Home: {
    //   screen: Home,
    // },
    Home: {
      screen: Home,
    },
  },
  {
    // initialRouteName: "Welcome",
    // drawerPosition: "left",
    // drawerOpenRoute: "DrawerOpen",
    // drawerCloseRoute: "DrawerClose",
    // drawerToggleRoute: "DrawerToggle",
  }
);

export default createAppContainer(DrawerNavigator);
