import { StyleSheet, Text, View, FlatList, Image } from "react-native";
import React from "react";

const data = [
  { id: "1", image: require("../../../assets/images/covers/Frame78.png") },
  { id: "2", image: require("../../../assets/images/covers/Frame79.png") },
  { id: "3", image: require("../../../assets/images/covers/Frame80.png") },
];
const RecentSearches = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Recent Searches</Text>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.contentContainer}
        renderItem={({ item }) => (
          <View style={styles.bookContainer}>
            <Image style={styles.bookImage} source={item.image} />
          </View>
        )}
      />
    </View>
  );
};

export default RecentSearches;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 24,
    marginTop: 32,
  },

  text: {
    fontFamily: "EuclidRG",
    color: "#848472",
    letterSpacing: "0.03em",
    fontSize: 16,
  },
  contentContainer: {
    paddingTop: 16,
  },
  bookContainer: {
    width: 59,
    height: 96,
    marginRight: 16,
  },
  bookImage: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
});
