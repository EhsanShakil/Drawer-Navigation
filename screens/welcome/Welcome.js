import React, { useState } from "react";
import {
  View,
  Text,
  Button,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import Header from "../../components/Header";
import { StatusBar } from "expo-status-bar";
import Search from "../../components/Search";
import Carousel from "react-native-snap-carousel";
import Brands from "../../components/Brands";
import Shops from "../../components/Shops";
import { DrawerActions } from "react-navigation-drawer";

const Welcome = ({ navigation }) => {
  return (
    <>
      {/* <StatusBar /> */}
      <Header />
      <Search />
      <ScrollView>
        <View>
          <Brands />
          <Shops />
        </View>
        <Button
          title="Open Drawer"
          onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
        />
      </ScrollView>
    </>
  );
};

export default Welcome;
