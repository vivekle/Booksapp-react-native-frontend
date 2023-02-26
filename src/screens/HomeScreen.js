import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import colors from "../../assets/colors/colors";
import {
  MagnifyingGlass,
  SortAscending,
  PlusCircle,
} from "phosphor-react-native";
import { Feather } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { Colors } from "react-native/Libraries/NewAppScreen";
import CollectionGrid from "../components/CollectionGrid";
const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.titleText}>Your Collections</Text>
        <MagnifyingGlass />
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Collections</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Authors</Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          flexDirection: "row",
          marginHorizontal: 20,
          alignItems: "center",
          marginBottom: 20,
        }}
      >
        <MaterialIcons name="sort" size={24} color={colors.iconGray} />
        <View style={{ flex: 1 }} />
        <Feather name="plus-circle" size={20} color={colors.iconGray} />
      </View>
      <CollectionGrid />
      <CollectionGrid />
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.paperBg,
    flex: 1,
  },
  titleText: {
    fontFamily: "EuclidMD",
    fontSize: 20,
    color: colors.brownTxt,
    marginBottom: 16,
  },
  headerContainer: {
    flexDirection: "row",
    marginHorizontal: 20,
    justifyContent: "space-between",
    marginTop: 32,
  },
  buttonContainer: {
    flexDirection: "row",

    marginVertical: 10,
    marginHorizontal: 20,
    marginBottom: 24,
  },
  button: {
    backgroundColor: "#517266",
    borderRadius: 3,
    padding: 10,
    marginRight: 6,
  },
  buttonText: {
    fontSize: 14,
    fontWeight: "medium",
    color: "#FFFFFF",
    fontFamily: "EuclidMD",
  },
});
