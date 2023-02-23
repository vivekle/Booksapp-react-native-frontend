import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import colors from "../../assets/colors/colors";
import BookInfo from "../components/BookInfo";
import Overview from "../components/Overview";
import ReviewList from "../components/Reviews";

const BookDetailsScreen = ({ route, navigation }) => {
  const { book } = route.params;

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
