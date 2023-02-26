import { StyleSheet, Text, View, Image, FlatList } from "react-native";
import React from "react";
import colors from "../../../assets/colors/colors";

const bookList = [
  {
    id: 1,

    cover: require("../../../assets/images/covers/Frame66.png"),
  },
  {
    id: 2,

    cover: require("../../../assets/images/covers/Frame73.png"),
  },
  {
    id: 3,

    cover: require("../../../assets/images/covers/Frame74.png"),
  },
  {
    id: 4,

    cover: require("../../../assets/images/covers/Frame75.png"),
  },
  // Add more book objects here
];

const BookCover = ({ book }) => {
  return (
    <View style={styles.bookContainer}>
      <View style={{ marginBottom: 18 }}>
        <View style={styles.bookCoverContainer}>
          <Image source={book.cover} style={styles.bookCover} />
        </View>
      </View>
    </View>
  );
};

const FinishedReading = () => {
  return (
    <View>
      <Text style={styles.titleText}>Finished Reading</Text>
      <FlatList
        data={bookList}
        keyExtractor={(book) => book.id.toString()}
        renderItem={({ item }) => <BookCover book={item} />}
        contentContainerStyle={styles.bookListContainer}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default FinishedReading;

const styles = StyleSheet.create({
  bookListContainer: {
    paddingHorizontal: 16,
  },
  bookContainer: {
    width: 56,
    alignItems: "center",
    marginBottom: 10,
    marginRight: 16,
  },
  titleText: {
    fontFamily: "EuclidMD",
    fontSize: 16,
    marginLeft: 16,
    color: colors.brownTxt,
    marginBottom: 10,
  },
  bookCoverContainer: {
    width: 56,
    height: 89,

    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#4E442A",
    shadowOffset: {
      width: -3,
      height: 3,
    },
    shadowOpacity: 0.62,
    shadowRadius: 0,
    elevation: 5,
  },
  bookCover: {
    width: 50,
    height: 83,
    resizeMode: "contain",
  },
  bookTitle: {
    textAlign: "left",
    fontSize: 12,
    color: "#151515",
    marginTop: 10,
    height: 30,
  },
  progressContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
  },
  progressBar: {
    width: 69,
    height: 3,
    borderRadius: 8,
    backgroundColor: "#C2C2C2",
  },
  progressIndicator: {
    width: "40%",
    height: "100%",
    borderRadius: 8,
    backgroundColor: "#151515",
  },
  progressText: {
    fontSize: 10,
    color: "#151515",
    marginLeft: 5,
  },
});
