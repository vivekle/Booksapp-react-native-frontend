import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { TouchableOpacity } from "react-native-gesture-handler";

const Overview = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const buttonText = isExpanded ? "..see less" : "..see more";

  const handlePress = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <View style={styles.overviewContainer}>
      <Text style={styles.titleText}>Overview</Text>
      <Text style={styles.subtitleText}>
        (The New York Times Book Review). A BEST BOOK OF THE YEAR: The New York
        Times, Washington Post, NPR, Oprah Daily, Newsweek, GoodReads"A unique
        heroine ... you'll find yourself wishing she wasn’t fictional." —Seattle
        Times
      </Text>
      {isExpanded ? (
        <Text style={styles.descriptionText}>
          {" "}
          Chemist Elizabeth Zott is not your average woman. In fact, Elizabeth
          Zott would be the first to point out that there is no such thing as an
          average woman. But it’s the early 1960s and her all-male team at
          Hastings Research Institute takes a very unscientific view of
          equality. Except for one: Calvin Evans; the lonely, brilliant,
          Nobel–prize nominated grudge-holder who falls in love with—of all
          things—her mind. True chemistry results. But like science, life is
          unpredictable. Which is why a few years later Elizabeth Zott finds
          herself not only a single mother, but the reluctant star of America’s
          most beloved cooking show Supper at Six. Elizabeth’s unusual approach
          to cooking (“combine one tablespoon acetic acid with a pinch of sodium
          chloride”) proves revolutionary. But as her following grows, not
          everyone is happy. Because as it turns out, Elizabeth Zott isn’t just
          teaching women to cook. She’s daring them to change the status quo.
          Laugh-out-loud funny, shrewdly observant, and studded with a dazzling
          cast of supporting characters, Lessons in Chemistry is as original and
          vibrant as its protagonist
        </Text>
      ) : (
        <Text numberOfLines={6} style={styles.descriptionText}>
          {" "}
          Chemist Elizabeth Zott is not your average woman. In fact, Elizabeth
          Zott would be the first to point out that there is no such thing as an
          average woman. But it’s the early 1960s and her all-male team at
          Hastings Research Institute takes a very unscientific view of
          equality. Except for one: Calvin Evans; the lonely, brilliant,
          Nobel–prize nominated grudge-holder who falls in love with—of all
          things—her mind. True chemistry results. But like science, life is
          unpredictable. Which is why a few years later Elizabeth Zott finds
          herself not only a single mother, but the reluctant star of America’s
          most beloved cooking show Supper at Six. Elizabeth’s unusual approach
          to cooking (“combine one tablespoon acetic acid with a pinch of sodium
          chloride”) proves revolutionary. But as her following grows, not
          everyone is happy. Because as it turns out, Elizabeth Zott isn’t just
          teaching women to cook. She’s daring them to change the status quo.
          Laugh-out-loud funny, shrewdly observant, and studded with a dazzling
          cast of supporting characters, Lessons in Chemistry is as original and
          vibrant as its protagonist
        </Text>
      )}

      <TouchableOpacity onPress={handlePress} style={styles.buttonContainer}>
        <Text style={styles.buttonText}>{buttonText}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Overview;

const styles = StyleSheet.create({
  overviewContainer: {
    marginHorizontal: 20,
    marginBottom: 24,
  },
  titleText: {
    fontFamily: "EuclidMD",
    fontSize: 16,
    letterSpacing: "0.01em",
    marginBottom: 16,
  },
  subtitleText: {
    fontFamily: "EuclidMD",
    fontSize: 15,
    letterSpacing: "0.03em",
    textAlign: "justify",
    color: "#434242",
    marginBottom: 24,
  },
  descriptionText: {
    fontFamily: "EuclidRG",
    fontSize: 15,
    letterSpacing: "0.03em",
    textAlign: "justify",
    color: "#434242",
    lineHeight: 22.5, // 150% equivalent to 1.5
  },
  buttonContainer: {
    alignSelf: "flex-end",
  },
  buttonText: {
    fontFamily: "EuclidMD",
  },
});
