import React, { useEffect } from "react";
import { ImageBackground, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const image = {
  uri: "https://images.unsplash.com/photo-1526318896980-cf78c088247c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
};
export default function App({ navigation }) {
  useEffect(() => {
    // setTimeout(() => {
    //   navigation.push("LoginScreen");
    // }, 1000);
  }, []);
  return (
    <View style={styles.container}>
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        <View style={styles.gradient}>
          <Text style={styles.heading}>Zomato</Text>
          <Text style={styles.text}>Made for Delicacies</Text>
        </View>
      </ImageBackground>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  gradient: {
    backgroundColor: "rgba(0,0,0,0.4)",
    flex: 1,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    flex: 1,
  },
  heading: {
    color: "white",
    fontSize: 60,
    fontFamily: "karlaMedium",
  },
  text: {
    fontSize: 20,
    color: "#fff",
    fontFamily: "karlaLight",
  },
});
