import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { House, Books, BookOpen, MagnifyingGlass } from "phosphor-react-native";
import HomeScreen from "../../screens/HomeScreen";
import SearchScreen from "../../screens/SearchScreen";
import StoreScreen from "../../screens/StoreScreen";
import ReadingScreen from "../../screens/ReadingScreen";
import { Text, StyleSheet, View, Image } from "react-native";
import colors from "../../../assets/colors/colors";

const Tab = createBottomTabNavigator();
const MainTabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarStyle: { backgroundColor: "#F1EDE1" },
        headerStyle: { backgroundColor: "#F1EDE1" },
        tabBarActiveTintColor: "#679161",
        tabBarInactiveTintColor: "#B6B6B6",
      }}
    >
      <Tab.Screen
        name="SubHome"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color, size }) => <House size={size} color={color} />,
        }}
      />
      <Tab.Screen
        name="Search"
        component={SearchScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MagnifyingGlass size={size} color={color} />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Store"
        component={StoreScreen}
        options={{
          tabBarIcon: ({ color, size }) => <Books size={size} color={color} />,
          headerTitle: "",
          headerLeft: () => (
            <Text
              style={{ fontFamily: "EuclidMD", fontSize: 25, marginLeft: 20 }}
            >
              Store
            </Text>
          ),
          headerRight: () => (
            <View>
              <Image
                style={styles.container}
                source={require("../../../assets/./images/profilepic.png")}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Reading"
        component={ReadingScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <BookOpen size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default MainTabNavigator;
const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.gray,
    width: 35,
    height: 35,
    borderRadius: 20,
    marginRight: 20,
    marginBottom: 8,
  },
});
