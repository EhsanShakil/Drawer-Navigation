import React, { useState } from "react";
import {
  View,
  Text,
  Button,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import Header from "../../components/Header";
import { StatusBar } from "expo-status-bar";
import Search from "../../components/Search";
import { DrawerActions } from "react-navigation-drawer";
import Carousel from "react-native-snap-carousel";
import Brands from "../../components/Brands";

const Welcome = ({ navigation }) => {
  return (
    <>
      {/* <StatusBar /> */}
      <Search />
      <Brands />
      <Text>Welcome to Home Screen</Text>
      <Button
        title="Open Drawer"
        onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
      />
    </>
  );
};

export default Welcome;
