import React from "react";
import { View, StyleSheet, Text, FlatList, Image } from "react-native";
import colors from "../../../assets/colors/colors";
const data = [
  {
    id: "1",
    name: "Dragons",
    books: [
      {
        id: "1",
        name: "Book 1",
        cover: require("../../../assets/images/dragons/Frame162.png"),
      },
      {
        id: "2",
        name: "Book 2",
        cover: require("../../../assets/images/dragons/Frame163.png"),
      },
      {
        id: "3",
        name: "Book 3",
        cover: require("../../../assets/images/dragons/Frame164.png"),
      },
      {
        id: "4",
        name: "Book 4",
        cover: require("../../../assets/images/dragons/Frame165.png"),
      },
      {
        id: "5",
        name: "Book 5",
        cover: require("../../../assets/images/dragons/Frame166.png"),
      },
      {
        id: "6",
        name: "Book 6",
        cover: require("../../../assets/images/dragons/Frame167.png"),
      },
    ],
  },
  {
    id: "2",
    name: "business",
    books: [
      {
        id: "7",
        name: "Book 7",
        cover: require("../../../assets/images/business/Frame258.png"),
      },
      {
        id: "8",
        name: "Book 8",
        cover: require("../../../assets/images/business/Frame259.png"),
      },
      {
        id: "9",
        name: "Book 9",
        cover: require("../../../assets/images/business/Frame260.png"),
      },
      {
        id: "10",
        name: "Book 10",
        cover: require("../../../assets/images/business/Frame265.png"),
      },
      {
        id: "11",
        name: "Book 11",
        cover: require("../../../assets/images/business/Frame262.png"),
      },
      {
        id: "13",
        name: "Book 12",
        cover: require("../../../assets/images/covers/Frame66.png"),
      },
    ],
  },
];

const SquareContainer = ({ name, books }) => {
  const renderItem = ({ item }) => (
    <View style={styles.bookContainer}>
      <Image source={item.cover} style={styles.bookCover} />
      {/* <Text style={styles.bookName}>{item.name}</Text> */}
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.squareContainer}>
        <FlatList
          data={books}
          numColumns={3}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      </View>
      <View style={styles.collectionContainer}>
        <Text style={styles.collectionName}>{name}</Text>
        <Text style={styles.bookCount}>{books.length} Books</Text>
      </View>
    </View>
  );
};

const CollectionGrid = () => {
  const renderSquareContainer = ({ item }) => (
    <SquareContainer name={item.name} books={item.books} />
  );

  return (
    <View style={styles.mainContainer}>
      <FlatList
        data={data}
        renderItem={renderSquareContainer}
        keyExtractor={(item) => item.id}
        horizontal={true}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 160.5,
    marginLeft: 20,
    marginBottom: 24,
  },
  squareContainer: {
    width: 160.5,
    height: 160.5,
    backgroundColor: colors.searchBg,
    marginRight: 10,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.75,
    shadowRadius: 0,

    elevation: 5,
    marginBottom: 18,
  },
  collectionContainer: {
    justifyContent: "space-between",
    flexDirection: "row",
  },
  collectionName: {
    fontFamily: "EuclidMD",
    fontSize: 14,
    color: colors.iconGray,
    letterSpacing: "0.01em",

    marginBottom: 5,
    position: "relative",
  },
  bookCount: {
    fontSize: 14,
    color: colors.iconGray,
    fontFamily: "EuclidMD",
  },
  bookContainer: {
    marginRight: 8,
    marginBottom: 8,
    left: 22,
    top: 26,
  },
  bookCover: {
    width: 32,
    height: 50,
  },
  bookName: {
    fontSize: 12,
    marginTop: 5,
    textAlign: "center",
  },
});

export default CollectionGrid;
