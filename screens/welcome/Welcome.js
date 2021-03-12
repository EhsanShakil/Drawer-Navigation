import React from "react";
import { View, Text, Button } from "react-native";
import Header from "../../components/Header";
import { StatusBar } from "expo-status-bar";
import Search from "../../components/Search";
import { DrawerActions } from "react-navigation-drawer";

const Welcome = ({ navigation }) => {
  return (
    <>
      <Search />
      <Text>Slider</Text>
      <Text>Brands</Text>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        {/* <StatusBar /> */}
        <Text>Welcome to Home Screen</Text>
        <Button
          title="Open Drawer"
          onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
        />
      </View>
    </>
  );
};

export default Welcome;
