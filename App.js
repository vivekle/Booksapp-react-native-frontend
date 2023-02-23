import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Navigator from "./src/navigation";
import { useFonts } from "expo-font";

export default function App() {
  const [fontsLoaded] = useFonts({
    EuclidLT: require("./assets/fonts/Euclid_Circular_A_Light.ttf"),
    EuclidRG: require("./assets/fonts/Euclid_Circular_A_Regular.ttf"),
    EuclidMD: require("./assets/fonts/Euclid_Circular_A_Medium.ttf"),
    EuclidSB: require("./assets/fonts/Euclid_Circular_A_SemiBold.ttf"),
    EuclidB: require("./assets/fonts/Euclid_Circular_A_Bold.ttf"),
  });
  if (!fontsLoaded) {
    return null;
  }
  return (
    <View style={styles.container}>
      <Navigator />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",

    justifyContent: "center",
  },
});
