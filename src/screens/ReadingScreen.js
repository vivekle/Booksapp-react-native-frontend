import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";
import colors from "../../assets/colors/colors";
import ReadingNow from "../components/ReadingNow";
import RecentlyRead from "../components/RecentlyRead";
import FinishedReading from "../components/FinishedReading";
import { ScrollView } from "react-native-gesture-handler";

const ReadingScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <ReadingNow />
        <RecentlyRead />
        <FinishedReading />
      </ScrollView>
    </SafeAreaView>
  );
};

export default ReadingScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.paperBg,
    flex: 1,
  },
});
