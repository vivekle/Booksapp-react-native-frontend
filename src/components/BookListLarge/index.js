import React from "react";
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import colors from "../../../assets/colors/colors";
import { useNavigation } from "@react-navigation/native";
const books = [
  {
    id: "1",
    title: "Lessons in Chemistry",
    author: "Bonnie Garmus",
    price: "12.99",
    imageUrl: require("../../../assets/images/covers/Frame74.png"),
  },
  {
    id: "2",
    title: "It Ends With Us",
    author: "Colleen Hoover",
    price: "15.99",
    imageUrl: require("../../../assets/images/covers/Frame75.png"),
  },
  {
    id: "3",
    title: "It Starts With Us",
    author: "Colleen Hoover",
    price: "12.99",
    imageUrl: require("../../../assets/images/covers/Frame76.png"),
  },
  {
    id: "4",
    title: "Fairy Tale",
    author: "Stephen King",
    price: "12.99",
    imageUrl: require("../../../assets/images/covers/Frame77.png"),
  },
];

const BookListItem = ({ book, index, vertical }) => {
  const isFirstItem = index === 0;
  const containerStyle = vertical
    ? styles.bookItemVertical
    : styles.bookItemHorizontal;
  const imageStyle = vertical
    ? styles.bookCoverVertical
    : styles.bookCoverHorizontal;
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate("BookDetails", { book });
  };
  return (
    <TouchableOpacity onPress={handlePress}>
      <View style={containerStyle}>
        <Image style={imageStyle} source={book.imageUrl} />
        <Text style={styles.bookAuthor}>{book.author}</Text>
        <Text style={styles.bookTitle}>{book.title}</Text>
        <TouchableOpacity style={styles.priceButton}>
          <Text style={styles.price}>{`$${book.price}`}</Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

const BookListLarge = ({ numColumns = 1, vertical = false, horizontal }) => (
  <FlatList
    data={books}
    keyExtractor={(item) => item.id}
    renderItem={({ item }) => <BookListItem book={item} vertical={vertical} />}
    style={styles.container}
    contentContainerStyle={styles.listContainer}
    numColumns={numColumns}
    horizontal={horizontal}
  />
);

const styles = StyleSheet.create({
  listContainer: {
    paddingHorizontal: 20,
    paddingTop: 10,
    paddingBottom: 20,
  },

  bookItem: {
    marginRight: 20,
    alignItems: "flex-start",
  },
  bookItemHorizontal: {
    marginRight: 20,
    alignItems: "flex-start",
  },
  bookItemVertical: {
    marginBottom: 20,
    alignItems: "flex-start",
    marginRight: 16,
  },
  bookCover: {
    width: 134,
    height: 216,
  },
  bookCoverHorizontal: {
    width: 134,
    height: 216,
  },
  bookCoverVertical: {
    width: 160.5,
    height: 259.76,
  },
  bookAuthor: {
    marginTop: 14,
    fontSize: 16,
    fontFamily: "EuclidRG",
    letterSpacing: "0.01em",
    textAlign: "center",
    color: colors.graytext,
  },
  bookTitle: {
    marginTop: 8,
    fontSize: 14,
    textAlign: "center",
    fontFamily: "EuclidRG",
    letterSpacing: "0.01em",
  },
  priceButton: {
    marginTop: 8,
    backgroundColor: "#FF7892",
    borderRadius: 2,
    padding: 5,
  },
  price: {
    color: "white",

    fontFamily: "EuclidSB",
    fontSize: 13,
    letterSpacing: "0.01em",
  },
  horizontalList: {},
});

export default BookListLarge;
