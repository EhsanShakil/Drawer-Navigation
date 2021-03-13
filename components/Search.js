import React from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Dimensions,
} from "react-native";

const ScreenWidth = Dimensions.get("window").width;
const ScreenHeight = Dimensions.get("window").height;

const Search = () => {
  return (
    <TouchableOpacity
      style={{
        justifyContent: "center",
        alignItems: "center",
        marginVertical: 10,
      }}
    >
      <TextInput
        style={{
          borderWidth: 2,
          width: ScreenWidth * 0.8,
          height: ScreenHeight * 0.08,
          borderRadius: 20,
          textAlign: "center",
          fontSize: 18,
        }}
        placeholder="Seach for Categories-->"
        // editable={false}
      />
    </TouchableOpacity>
  );
};

export default Search;
