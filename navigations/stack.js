import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createDrawerNavigator } from "react-navigation-drawer";
import Home from "../screens/home/Home";
import Welcome from "../screens/welcome/Welcome";
import Header from "../components/Header";
import { TouchableOpacity } from "react-native";

const DrawerNavigator = createDrawerNavigator(
  {
    Welcome: {
      screen: Welcome,
    },
    Home: {
      screen: Home,
    },
  },
  {
    // drawerWidth: "100%",
    drawerBackgroundColor: "white",
    overlayColor: "black",
  }
);
const StackNavigator = createStackNavigator(
  {
    DrawerNavigator: {
      screen: DrawerNavigator,
      navigationOptions: {
        headerShown: false,
      },
    },
    Welcome: {
      screen: Welcome,
      navigationOptions: {
        headerShown: false,
      },
    },
    Home: {
      screen: Home,
      navigationOptions: {
        headerShown: false,
      },
    },
  },
  {
    navigationOptions: {
      headerShown: false,
    },
  }
);

export default createAppContainer(StackNavigator);
