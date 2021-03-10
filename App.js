import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Route from "./navigations/stack";
import Drawer from "./navigations/drawer";

export default function App() {
  return (
    <>
      {/* <Route /> */}
      <Drawer />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
