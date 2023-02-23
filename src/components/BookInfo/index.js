import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import colors from "../../../assets/colors/colors";

const BookInfo = ({ image, title, author }) => {
  return (
    <View style={styles.bookInfoContainer}>
      <View style={styles.imageContainer}>
        <Image source={image} style={styles.bookCover} />
      </View>
      <Text style={styles.authorText}>{author}</Text>
      <Text style={styles.titleText}>{title}</Text>

      <TouchableOpacity style={styles.buttonContainer}>
        <Text style={styles.buttonText}>Buy now</Text>
      </TouchableOpacity>
    </View>
  );
};

export default BookInfo;

const styles = StyleSheet.create({
  bookInfoContainer: {
    marginTop: 24,
    marginBottom: 24,
  },
  imageContainer: {
    alignSelf: "center",
    elevation: 4,
    shadowColor: "rgba(44, 36, 32, 0.87)",
    shadowOffset: { width: -15, height: 11 },
    shadowOpacity: 1,
    shadowRadius: 0,
    marginBottom: 24,
  },
  bookCover: {
    width: 220,
    height: 360,
  },
  authorText: {
    fontSize: 16,
    fontFamily: "EuclidRG",
    letterSpacing: "0.01em",
    textAlign: "center",
    color: colors.graytext,
    marginBottom: 8,
  },
  titleText: {
    fontSize: 16,
    textAlign: "center",
    fontFamily: "EuclidRG",
    letterSpacing: "0.01em",
    marginBottom: 16,
  },
  buttonContainer: {
    backgroundColor: "#F1AC1D",
    paddingVertical: 8,
    width: 228,

    borderRadius: 3,
    alignSelf: "center",
  },
  buttonText: {
    justifyContent: "center",
    textAlign: "center",
    color: "white",
    alignContent: "center",

    fontFamily: "EuclidMD",
    fontSize: 13,
    letterSpacing: "0.01em",
  },
});
