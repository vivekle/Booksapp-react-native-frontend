import React from "react";
import { View, FlatList, Text, StyleSheet, Image } from "react-native";
import colors from "../../../assets/colors/colors";

const bookList = [
  {
    id: 1,
    title: "The Push",
    progress: "40%",
    cover: require("../../../assets/images/covers/Frame69.png"),
  },
  {
    id: 2,
    title: "How the one-armed sister Swees her house",
    progress: "90%",
    cover: require("../../../assets/images/covers/Frame70.png"),
  },
  {
    id: 3,
    title: "Life among the Terranauts",
    progress: "60%",
    cover: require("../../../assets/images/covers/Frame71.png"),
  },
  {
    id: 4,
    title: "The Removed",
    progress: "32%",
    cover: require("../../../assets/images/covers/Frame72.png"),
  },
  // Add more book objects here
];

const BookCover = ({ book }) => {
  const progressValue = parseFloat(book.progress) / 100;

  // Create a dynamic style for the progress indicator width
  const progressStyle = StyleSheet.create({
    progressIndicator: {
      width: `${progressValue * 100}%`,
      height: "100%",
      borderRadius: 8,
      backgroundColor: "#151515",
    },
  });

  return (
    <View style={styles.bookContainer}>
      <View style={{ marginBottom: 8 }}>
        <View style={styles.bookCoverContainer}>
          <Image source={book.cover} style={styles.bookCover} />
        </View>

        <Text style={styles.bookTitle} numberOfLines={2}>
          {book.title}
        </Text>
      </View>
      <View style={styles.progressContainer}>
        <View style={styles.progressBar}>
          <View style={progressStyle.progressIndicator}></View>
        </View>
        <Text style={styles.progressText}>{book.progress}</Text>
      </View>
    </View>
  );
};

const RecentlyRead = () => {
  return (
    <View>
      <Text style={styles.titleText}>Recently Read</Text>
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

const styles = StyleSheet.create({
  bookListContainer: {
    paddingHorizontal: 16,
    marginBottom: 48,
  },
  bookContainer: {
    width: 92.39,
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
    width: 92.39,
    height: 148,

    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#333229",
    shadowOffset: {
      width: -6,
      height: 5,
    },
    shadowOpacity: 1,
    shadowRadius: 0,
    elevation: 5,
  },
  bookCover: {
    width: 82.39,
    height: 138,
    resizeMode: "contain",
  },
  bookTitle: {
    textAlign: "left",
    fontSize: 12,
    color: "#151515",
    marginTop: 10,
    height: 30,
    fontFamily: "EuclidRG",
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
    color: "#757575",
    marginLeft: 5,
    fontFamily: "EuclidRG",
  },
});

export default RecentlyRead;
