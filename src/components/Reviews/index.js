import { StyleSheet, Text, View, FlatList, ScrollView } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import colors from "../../../assets/colors/colors";

const reviews = [
  {
    id: "1",
    title: "A real page-turner!",
    review:
      "I absolutely loved this book! The characters were well-developed and the plot was gripping. I couldn't put it down and finished it in just a few days. Highly recommend.",
    date: "February 23, 2023",
    username: "bookworm92",
  },
  {
    id: "2",
    title: "Not my cup of tea",
    review:
      "Unfortunately, this book wasn't for me. I found the pacing slow and the characters uninteresting. That being said, I can see how others might enjoy it, so don't let my review dissuade you if you're interested.",
    date: "February 21, 2023",
    username: "literarycritic",
  },
  {
    id: "3",
    title: "Expected more",
    review:
      "After all the hype, I was expecting this book to be amazing. It was good, but not great. The writing was solid and the characters were likable, but the plot felt a bit contrived at times. Overall, I'd say it's worth reading, but don't go in with unrealistic expectations.",
    date: "February 19, 2023",
    username: "avidreader",
  },
  {
    id: "4",
    title: "A modern classic",
    review:
      "I can't believe it took me so long to read this book! It's a true masterpiece. The writing is beautiful, the characters are unforgettable, and the themes are timeless. I highly recommend this to anyone who loves literature.",
    date: "February 16, 2023",
    username: "classicslover",
  },
  {
    id: "5",
    title: "Disappointing ending",
    review:
      "I enjoyed this book for the most part, but the ending left me feeling unsatisfied. It felt rushed and didn't fully resolve all the plot threads. That being said, the writing was strong and the characters were well-drawn. If you don't mind an open-ended conclusion, you might enjoy this book.",
    date: "February 14, 2023",
    username: "bookclubber",
  },
];

const ReviewList = () => {
  return (
    <View style={{ marginBottom: 48 }}>
      <FlatList
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        data={reviews}
        keyExtractor={(item) => item.id}
        renderItem={({ item, index }) => (
          <View
            style={[styles.reviewCard, { marginLeft: index === 0 ? 24 : null }]}
          >
            <View style={styles.reviewHeader}>
              <Text style={styles.reviewTitle}>{item.title}</Text>
              <View style={styles.starsContainer}>
                <Ionicons name="star" size={16} color="#BC8410" />
                <Ionicons name="star" size={16} color="#BC8410" />
                <Ionicons name="star" size={16} color="#BC8410" />
                <Ionicons name="star" size={16} color="#BC8410" />
                <Ionicons name="star" size={16} color="#BDC3C7" />
              </View>
            </View>
            <ScrollView
              style={styles.reviewBody}
              showsVerticalScrollIndicator={false}
            >
              <Text style={styles.reviewText}>{item.review}</Text>
            </ScrollView>
            <View style={styles.reviewFooter}>
              <Text style={styles.reviewDate}>{item.date}</Text>
              <Text style={styles.reviewUser}>-{item.username}</Text>
            </View>
          </View>
        )}
      />
    </View>
  );
};

export default ReviewList;

const styles = StyleSheet.create({
  reviewCard: {
    height: 160,
    width: 320,
    padding: 16,
    backgroundColor: colors.reviewBg,
    borderRadius: 2,
    marginVertical: 8,
    elevation: 4,
    marginRight: 16,
    elevation: 4,
    shadowColor: "rgba(201, 166, 118, 1)",
    shadowOffset: { width: -6, height: 7 },
    shadowOpacity: 1,
    shadowRadius: 0,
  },
  reviewHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },
  starsContainer: {
    flexDirection: "row",
    marginRight: 8,
  },
  reviewTitle: {
    fontSize: 16,
    fontWeight: "bold",
    flex: 1,
    fontFamily: "EuclidMD",
    color: "#1C1103",
  },
  reviewBody: {
    maxHeight: 70,
  },
  reviewText: {
    fontSize: 14,
    lineHeight: 20,
    fontFamily: "EuclidLT",
    textAlign: "justify",
    color: "#1C1103",
  },
  reviewFooter: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 8,
  },
  reviewDate: {
    fontSize: 13,
    fontFamily: "EuclidRG",
    color: " rgba(72, 61, 47, 0.7)",
  },
  reviewUser: {
    fontSize: 13,
    fontFamily: "EuclidRG",
    color: " rgba(72, 61, 47, 0.7)",
  },
});
