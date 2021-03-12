import React from "react";
import { View, Text, Dimensions, TouchableOpacity } from "react-native";
import { AntDesign, Fontisto } from "@expo/vector-icons";
import { DrawerActions } from "react-navigation-drawer";

const ScreenWidth = Dimensions.get("window").width;
const ScreenHeight = Dimensions.get("window").height;

const Header = ({ navigation }) => {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginHorizontal: 5,
      }}
    >
      <TouchableOpacity
        onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
      >
        <AntDesign name="bars" size={ScreenWidth * 0.1} color="black" />
      </TouchableOpacity>
      <Text style={{ fontSize: ScreenWidth * 0.09 }}>Coupons</Text>
      <TouchableOpacity>
        <Fontisto name="world" size={ScreenWidth * 0.09} color="black" />
      </TouchableOpacity>
    </View>
  );
};

export default Header;
