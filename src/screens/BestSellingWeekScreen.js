import { StyleSheet, Text, View } from "react-native";
import React from "react";
import BestSellingWeek from "../components/BestSellingWeek";
import BookListLarge from "../components/BookListLarge";
import colors from "../../assets/colors/colors";

const BestSellingWeekScreen = () => {
  return (
    <View style={styles.container}>
      <BookListLarge numColumns={2} vertical />
    </View>
  );
};

export default BestSellingWeekScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.paperBg,
  },
});
