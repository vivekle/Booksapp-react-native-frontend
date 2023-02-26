import { StyleSheet, Text, View, FlatList, Image } from "react-native";
import React from "react";

const SimilarBooks = ({ data, title }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{title}</Text>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.contentContainer}
        renderItem={({ item, index }) => (
          <View>
            <View style={styles.bookContainer}>
              <Image style={styles.bookImage} source={item.image} />
            </View>
          </View>
        )}
      />
    </View>
  );
};

export default SimilarBooks;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    marginTop: 32,
  },

  text: {
    fontFamily: "EuclidMD",
    color: "#000",
    letterSpacing: "0.03em",
    fontSize: 16,
  },
  contentContainer: {
    paddingTop: 16,
    paddingBottom: 16,
  },
  bookContainer: {
    width: 92.39,
    height: 148,
    marginRight: 16,
  },
  bookImage: {
    width: 92.39,
    height: 148,
  },
});
