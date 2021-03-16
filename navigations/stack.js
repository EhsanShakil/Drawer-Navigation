import React from "react";
import { View, Text, TouchableOpacity, SafeAreaView } from "react-native";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createDrawerNavigator, DrawerItems } from "react-navigation-drawer";
import Home from "../screens/home/Home";
import Welcome from "../screens/welcome/Welcome";
import Header from "../components/Header";
import Shops from "../screens/shops/Shops";
import Brands from "../screens/brands/Brands";
import { Entypo, AntDesign, FontAwesome5 } from "@expo/vector-icons";

const CustomDrawerContentComponent = (props) => (
  <View>
    <SafeAreaView>
      <View style={{ justifyContent: "center", height: 100 }}>
        <Text style={{ textAlign: "center", fontSize: 20, fontWeight: "bold" }}>
          Drawer Navigation
        </Text>
      </View>
      <View>
        <DrawerItems {...props} />
      </View>
    </SafeAreaView>
  </View>
);

const DrawerNavigator = createDrawerNavigator(
  {
    Welcome: {
      screen: Welcome,
      navigationOptions: {
        drawerIcon: <Entypo name="home" size={24} color="black" />,
      },
    },
    Home: {
      screen: Home,
      navigationOptions: {
        drawerIcon: <AntDesign name="home" size={24} color="black" />,
      },
    },
    Shops: {
      screen: Shops,
      navigationOptions: {
        drawerIcon: <Entypo name="shopping-bag" size={24} color="black" />,
      },
    },
    Brands: {
      screen: Brands,
      navigationOptions: {
        drawerIcon: <FontAwesome5 name="store" size={20} color="black" />,
      },
    },
  },
  {
    // drawerWidth: "100%",
    drawerBackgroundColor: "white",
    overlayColor: "black",
    contentComponent: CustomDrawerContentComponent,
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
