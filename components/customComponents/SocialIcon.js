import React from "react";
import { Image, View, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native";

export default function SocialIcon({ icon, onPress }) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Image style={styles.icon} source={icon} />
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  container: {
    padding: 5,
    height: 50,
    width: 50,
    borderRadius: 35,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  icon: {
    width: 35,
    height: 35,
  },
});
