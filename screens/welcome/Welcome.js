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
import { DrawerActions } from "react-navigation-drawer";
import Carousel from "react-native-snap-carousel";
import Brands from "../../components/Brands";
import Shops from "../../components/Shops";

const Welcome = () => {
  return (
    <>
      {/* <StatusBar /> */}
      <Search />
      <ScrollView>
        <View>
          <Brands />
          <Shops />
        </View>
      </ScrollView>
    </>
  );
};

export default Welcome;
