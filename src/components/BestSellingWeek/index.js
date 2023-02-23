import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import colors from "../../../assets/colors/colors";
const BestSellingWeek = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.titleText}>Best-selling this week</Text>
        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={() => navigation.navigate("BestSelling")}
        >
          <Text style={styles.buttonText}>see all</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default BestSellingWeek;

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 24,
    alignContent: "flex-end",
  },
  titleText: {
    fontFamily: "EuclidMD",
    fontSize: 20,
    color: colors.black,
    marginBottom: 6,
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
