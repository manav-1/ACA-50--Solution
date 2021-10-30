import React from "react";
import { View, Text, StyleSheet, Image, ImageBackground } from "react-native";

const RecipeComponent = ({ name, imgUri }) => (
  <ImageBackground
    source={{ uri: imgUri }}
    resizeMode="cover"
    style={styles.container}
  >
    <View style={StyleSheet.absoluteFill}>
      <Text style={styles.recipeName}>{name}</Text>
    </View>
  </ImageBackground>
);

const styles = StyleSheet.create({
  container: {
    backgroundColor: "yellow",
    margin: 5,
    padding: 5,
    width: 350,
  },
  recipeName: {
    position: "absolute",
    left: 10,
    bottom: 10,
    fontSize: 30,
    fontFamily: "karlaBold",
    color: "#fff",
  },
});

export default RecipeComponent;
