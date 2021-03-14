import React, { useState } from "react";
import { View, Text, SafeAreaView } from "react-native";
import Carousel from "react-native-snap-carousel";

const Shops = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const carouselItems = [
    {
      title: "Shop 1",
      text: "Description",
    },
    {
      title: "Shop 2",
      text: "Description",
    },
    {
      title: "Shop 3",
      text: "Description",
    },
    {
      title: "Shop 4",
      text: "Description",
    },
    {
      title: "Shop 5",
      text: "Description",
    },
  ];
  const renderItem = ({ item, index }) => {
    return (
      <View
        style={{
          backgroundColor: "black",
          borderTopRightRadius: 50,
          borderBottomLeftRadius: 50,
          height: 250,
          padding: 50,
          marginLeft: 25,
          marginRight: 25,
        }}
      >
        <Text style={{ fontSize: 25, color: "white" }}>{item.title}</Text>
        <Text style={{ color: "white" }}>{item.text}</Text>
      </View>
    );
  };
  return (
    <View style={{ flex: 1 }}>
      <Text style={{ fontSize: 22, textAlign: "center", marginVertical: 10 }}>
        SHOPS
      </Text>
      <SafeAreaView>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            marginVertical: 10,
          }}
        >
          <Carousel
            layout={"default"}
            ref={(ref) => (carousel = ref)}
            data={carouselItems}
            sliderWidth={350}
            itemWidth={250}
            renderItem={renderItem}
            onSnapToItem={(index) => setActiveIndex(index)}
          />
        </View>
      </SafeAreaView>
    </View>
  );
};

export default Shops;
