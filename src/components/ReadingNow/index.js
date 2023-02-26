import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import colors from "../../../assets/colors/colors";

const ReadingNow = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>Reading now</Text>
      <View style={styles.bookContainer}>
        <Image
          style={styles.bookCover}
          source={require("../../../assets/images/covers/Frame72.png")}
        />
        <View style={styles.bookText}>
          <Image
            style={styles.bookCover}
            source={require("../../../assets/images/bookText.png")}
          />
        </View>
      </View>
    </View>
  );
};

export default ReadingNow;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 16,
    marginTop: 35,
    marginBottom: 48,
  },
  titleText: {
    fontFamily: "EuclidMD",
    fontSize: 20,
    color: colors.brownTxt,
    marginBottom: 16,
  },
  bookContainer: {
    flexDirection: "row",
    alignSelf: "center",
  },
  bookCover: {
    width: 175,
    height: 280,
  },
  bookText: {
    width: 175,
    height: 280,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: { width: 0, height: 4 },

    shadowRadius: 4,
  },
});
