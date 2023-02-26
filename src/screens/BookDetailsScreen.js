import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import colors from "../../assets/colors/colors";
import BookInfo from "../components/BookInfo";
import Overview from "../components/Overview";
import ReviewList from "../components/Reviews";
import SimilarBooks from "../components/SimilarBooks";

const BookDetailsScreen = ({ route, navigation }) => {
  const { book } = route.params;
  const similarBooks = [
    { id: "1", image: require("../../assets/images/covers/Frame81.png") },
    { id: "2", image: require("../../assets/images/covers/Frame82.png") },
    { id: "3", image: require("../../assets/images/covers/Frame83.png") },
    { id: "4", image: require("../../assets/images/covers/Frame84.png") },
  ];
  const moreBooks = [
    { id: "1", image: require("../../assets/images/covers/Frame85.png") },
    { id: "2", image: require("../../assets/images/covers/Frame86.png") },
  ];

  // Set the header title to the book name
  navigation.setOptions({ title: book.title });

  return (
    <View style={styles.container}>
      <ScrollView>
        <BookInfo
          image={book.imageUrl}
          author={book.author}
          title={book.title}
        />
        <Overview />
        <ReviewList />
        <SimilarBooks data={similarBooks} title={"Some similar books"} />
        <SimilarBooks data={moreBooks} title={"More books by Bonnie Garmus"} />
      </ScrollView>
    </View>
  );
};

export default BookDetailsScreen;
const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.paperBg,
    flex: 1,
  },
});
