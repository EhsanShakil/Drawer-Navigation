import React, { useState } from "react";
import { View, Text, SafeAreaView } from "react-native";
import Carousel from "react-native-snap-carousel";

const Brands = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const carouselItems = [
    {
      title: "Brand 1",
      text: "Description",
    },
    {
      title: "Brand 2",
      text: "Description",
    },
    {
      title: "Brand 3",
      text: "Description",
    },
    {
      title: "Brand 4",
      text: "Description",
    },
    {
      title: "Brand 5",
      text: "Description",
    },
  ];
  const renderItem = ({ item, index }) => {
    return (
      <View
        style={{
          backgroundColor: "black",
          borderTopLeftRadius: 50,
          borderBottomRightRadius: 50,
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
        BRANDS
      </Text>
      <SafeAreaView>
        <View style={{ flexDirection: "row", justifyContent: "center" }}>
          <Carousel
            layout={"default"}
            layoutCardOffset={`9`}
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

export default Brands;
