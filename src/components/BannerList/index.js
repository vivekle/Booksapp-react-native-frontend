import { StyleSheet, Text, Image, View } from "react-native";
import React from "react";
import { FlatList } from "react-native-gesture-handler";

const images = [
  { id: "1", image: require("..//..//../assets/images/banners/banner1.png") },
  { id: "2", image: require("..//..//../assets/images/banners/banner2.png") },
  { id: "3", image: require("..//..//../assets/images/banners/banner3.png") },
  { id: "4", image: require("..//..//../assets/images/banners/banner4.png") },
];

const BannerList = () => {
  return (
    <View>
      <FlatList
        data={images}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item, index }) => {
          const isFirstItem = index === 0;
          return (
            <View style={styles.imageContainer}>
              <Image
                source={item.image}
                style={[styles.image, { marginLeft: isFirstItem ? 31 : 0 }]}
              />
            </View>
          );
        }}
      />
    </View>
  );
};

export default BannerList;

const styles = StyleSheet.create({
  image: {
    width: 338,
    maxHeight: 198,
    marginRight: 31,
    marginTop: 36,
  },
  imageContainer: {
    shadowColor: "rgba(0, 0, 0, 0.44)",
    shadowOffset: { width: -6, height: 8 },
    shadowOpacity: 0.8,
    shadowRadius: 0,
    elevation: 5,
    flex: 1,
  },
});
