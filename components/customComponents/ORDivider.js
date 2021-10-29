import React from "react";
import { Text, View, StyleSheet } from "react-native";

export default function ORDivider() {
  return (
    <View style={styles.container}>
      <View style={styles.line}></View>
      <Text style={styles.text}>OR</Text>
      <View style={styles.line}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  line: {
    height: 1,
    backgroundColor: "#fff",
    width: "45%",
  },
  container: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    marginVertical: 10,
  },
  text: {
    color: "#fff",
    fontSize: 14,
    fontFamily:'karlaLight'
  },
});
