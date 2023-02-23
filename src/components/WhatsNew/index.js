import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import colors from "../../../assets/colors/colors";
import BookList from "../BookList";
const WhatsNew = () => {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <View style={styles.headerTextContainer}>
          <Text style={styles.titleText}>What's new</Text>

          <Text style={styles.subtitleText}>
            Discover the latest and greatest books that have just been added
          </Text>
        </View>
        <TouchableOpacity style={styles.buttonContainer}>
          <Text style={styles.buttonText}>see all</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default WhatsNew;

const styles = StyleSheet.create({
  container: {
    marginTop: 24,
    flexDirection: "column",
  },
  headerContainer: {
    flexDirection: "row",
    alignItems: "flex-end",
    marginHorizontal: 20,
    justifyContent: "space-between",
  },

  headerTextContainer: {
    flexDirection: "column",
    maxWidth: 276,
    marginRight: 20,
  },
  titleText: {
    fontFamily: "EuclidMD",
    fontSize: 20,
    color: colors.black,
    marginBottom: 6,
  },
  subtitleText: {
    fontFamily: "EuclidRG",
    fontSize: 16,
    color: colors.gray,
  },
  buttonContainer: {
    backgroundColor: colors.green,
    padding: 4,
    borderRadius: 2,
  },
  buttonText: {
    fontFamily: "EuclidMD",
    fontSize: 13,
    color: colors.white,
  },
});
