import React, { useState } from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import colors from "../../../assets/colors/colors";

const SearchBar = () => {
  const [searchText, setSearchText] = useState("");

  return (
    <View style={styles.container}>
      <Ionicons name="search" size={24} color="#AFB09C" style={styles.icon} />
      <TextInput
        style={styles.input}
        placeholder="Find your next great read"
        onChangeText={(text) => setSearchText(text)}
        value={searchText}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    height: 55,
    borderRadius: 2,
    paddingHorizontal: 10,
    margin: 10,
    backgroundColor: colors.searchBg,
    marginHorizontal: 24,
    elevation: 4,
    shadowColor: "rgba(103, 103, 80, 0.33)",
    shadowOffset: { width: 5, height: 4 },
    shadowOpacity: 1,
    shadowRadius: 0,
    marginTop: 103,
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    height: 40,
  },
});

export default SearchBar;
