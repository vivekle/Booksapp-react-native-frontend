import React from "react";
import { View, Text, Image, StyleSheet, Dimensions } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

const windowWidth = Dimensions.get("window").width;

const DATA = [
  { id: "1", image: require("../../../assets/images/covers/Frame66.png") },
  { id: "2", image: require("../../../assets/images/covers/Frame67.png") },
  { id: "3", image: require("../../../assets/images/covers/Frame68.png") },
  { id: "4", image: require("../../../assets/images/covers/Frame69.png") },
  { id: "5", image: require("../../../assets/images/covers/Frame70.png") },
  { id: "6", image: require("../../../assets/images/covers/Frame71.png") },
  { id: "7", image: require("../../../assets/images/covers/Frame72.png") },
  { id: "8", image: require("../../../assets/images/covers/Frame73.png") },
];

const BookList = () => {
  return (
    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
      <View style={styles.container}>
        <View style={styles.row}>
          {DATA.slice(0, 4).map((book) => (
            <View style={styles.item} key={book.id}>
              <Image source={book.image} style={styles.image} />
            </View>
          ))}
        </View>
        <View style={styles.row}>
          {DATA.slice(4, 8).map((book) => (
            <View style={styles.item} key={book.id}>
              <Image source={book.image} style={styles.image} />
            </View>
          ))}
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 16,
    paddingBottom: 24,
  },
  row: {
    flexDirection: "row",
  },
  item: {
    marginBottom: 8,
    marginRight: 8,
  },
  image: {
    width: 92.49,
    height: 148,
  },
});

export default BookList;
