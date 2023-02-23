import { StyleSheet, Text, View } from "react-native";
import React from "react";
import colors from "../../assets/colors/colors";
import { SafeAreaView } from "react-native-safe-area-context";

import SearchBarCustom from "../components/SearchBar";
import SearchBar from "../components/SearchBar";
import RecentSearches from "../components/RecentSearches";

const SearchScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <SearchBar />
        <RecentSearches />
      </View>
    </SafeAreaView>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.paperBg,
  },
});
