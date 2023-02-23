import { StyleSheet, Text, View } from "react-native";
import React from "react";
import BannerList from "../components/BannerList";
import WhatsNew from "../components/WhatsNew";
import colors from "../../assets/colors/colors";
import BookList from "../components/BookList";
import { ScrollView } from "react-native-gesture-handler";
import BestSellingWeek from "../components/BestSellingWeek";
import BookListLarge from "../components/BookListLarge";

const StoreScreen = () => {
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.bannerContainer}>
          <BannerList />
        </View>
        <WhatsNew />
        <BookList />
        <BestSellingWeek />
        <BookListLarge horizontal />
      </ScrollView>
    </View>
  );
};

export default StoreScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.paperBg,
    flex: 1,
  },
  bannerContainer: {
    height: 265,
    backgroundColor: "#F8C762",
  },
});
