import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import BestSellingWeekScreen from "../screens/BestSellingWeekScreen";
import HomeScreen from "../screens/HomeScreen";
import StoreScreen from "../screens/StoreScreen";
import { Text, StyleSheet } from "react-native";

import MainTabNavigator from "./MainTabNavigator/MainTabNavigator";
import colors from "../../assets/colors/colors";
import BookDetailsScreen from "../screens/BookDetailsScreen.js";

const Stack = createNativeStackNavigator();

const Navigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ headerStyle: { backgroundColor: colors.paperBg } }}
      >
        <Stack.Screen
          name="Home"
          component={MainTabNavigator}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="BestSelling"
          component={BestSellingWeekScreen}
          options={{
            headerShown: true,
            headerTitle: () => (
              <Text
                style={{
                  fontFamily: "EuclidMD",
                  fontSize: 17,

                  color: colors.black,
                }}
              >
                Best-selling this week
              </Text>
            ),
          }}
        />
        <Stack.Screen name="BookDetails" component={BookDetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;
