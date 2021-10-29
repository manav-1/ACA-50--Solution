import React, { useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import RootStack from "./components/navigation/RootStack.js";
import { StatusBar } from "react-native";
import * as Font from "expo-font";
import { useFonts } from "expo-font";
export default function App() {
  const [loaded] = useFonts({
    karla: require("./assets/fonts/karla/Karla-Regular.ttf"),
    karlaLight: require("./assets/fonts/karla/Karla-Light.ttf"),
    karlaMedium: require("./assets/fonts/karla/Karla-Medium.ttf"),
    karlaBold: require("./assets/fonts/karla/Karla-Bold.ttf"),
    montserrat: require("./assets/fonts/Montserrat/Montserrat-Regular.ttf"),
    "montserrat-semi-bold": require("./assets/fonts/Montserrat/Montserrat-SemiBold.ttf"),
  });
  if (!loaded) {
    return null;
  }
  return (
    <NavigationContainer>
      <StatusBar hidden={true} />
      <RootStack />
    </NavigationContainer>
  );
}
