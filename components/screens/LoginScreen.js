import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  ImageBackground,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Dimensions,
  Linking, // ! To open the Urls for terms of service/content-policy-privacy -policy
} from "react-native";
import ORDivider from "../customComponents/ORDivider";
import SocialIcon from "../customComponents/SocialIcon";
import { SafeAreaView } from "react-native-safe-area-context";
import firebase from "../FirebaseConfig";
import { Audio } from "expo-av";

const image = {
  uri: "https://images.unsplash.com/photo-1627042633145-b780d842ba45?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
};

export default function App({ navigation }) {
  const [number, setNumber] = useState("");
  const [type, setType] = useState("mail");
  const [mail, setMail] = useState("");
  const [sound, setSound] = useState(null);
  // ! This code is kind of optional, just for not letting the user get Back to the Home Screen
  useEffect(
    () =>
      navigation.addListener("beforeRemove", (e) => {
        // Prevent default behavior of leaving the screen
        e.preventDefault();
      }),
    []
  );
  function handleButtonPress() {
    console.log(number);
    console.log(mail);
    navigation.navigate("HomeStack");
  }
  function handleMailLogin() {
    type == "number" ? setType("mail") : setType("number");
  }
  async function playSound() {
    console.log("Loading Sound");
    const { sound } = await Audio.Sound.createAsync(
      require("../../assets/point.wav")
    );
    setSound(sound);

    console.log("Playing Sound");
    await sound.playAsync();
  }
  return (
    <ImageBackground
      source={image}
      resizeMode="cover"
      style={StyleSheet.absoluteFill}
    >
      <View style={[styles.gradient, StyleSheet.absoluteFill]}>
        <View style={styles.logincontainer}>
          <TextInput
            value={type == "number" ? number : mail}
            onChangeText={(val) =>
              type == "number" ? setNumber(val) : setMail(val)
            }
            placeholder={
              type == "number" ? "Enter Phone Number" : "Enter Email Address"
            }
            keyboardType={type == "number" ? "number-pad" : "default"}
            style={{
              backgroundColor: "#fff",
              padding: 10,
              borderRadius: 5,
              fontFamily: "karlaLight",
              fontSize: 16,
              marginBottom: 10,
            }}
          />
          <TouchableOpacity
            onPress={handleButtonPress}
            style={{
              borderRadius: 5,
              backgroundColor: "crimson",
              padding: 10,
              textAlign: "center",
              marginVertical: 5,
            }}
          >
            <Text
              style={{
                textAlign: "center",
                color: "white",
                fontSize: 20,
                fontFamily: "karlaLight",
              }}
            >
              Send OTP
            </Text>
          </TouchableOpacity>
          <ORDivider />
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-around",
              marginVertical: 10,
            }}
          >
            <SocialIcon
              onPress={() => {
                playSound();
                handleMailLogin();
              }}
              icon={
                type == "number"
                  ? require("../../assets/mail.png")
                  : require("../../assets/phone-call.png")
              }
            />
            <SocialIcon
              onPress={() => {
                playSound();
                console.log("Google Login");
              }}
              icon={require("../../assets/google.png")}
            />
            <SocialIcon
              onPress={() => {
                playSound();
                console.log("Facebook Login");
              }}
              icon={require("../../assets/facebook.png")}
            />
          </View>
          <View
            style={{
              width: Dimensions.get("screen").width,
              position: "absolute",
              bottom: 10,
            }}
          >
            <Text style={[styles.policy, { textAlign: "center" }]}>
              By continuing you agree to our
            </Text>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-around",
              }}
            >
              <Text
                onPress={() => Linking.openURL("https://www.google.com")}
                style={[styles.policy, styles.link]}
              >
                Terms of Service
              </Text>

              <Text
                onPress={() => Linking.openURL("https://www.google.com")}
                style={[styles.policy, styles.link]}
              >
                Privacy Policy
              </Text>
              <Text
                onPress={() => Linking.openURL("https://www.google.com")}
                style={[styles.policy, styles.link]}
              >
                Content Policy
              </Text>
            </View>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
  },
  gradient: {
    backgroundColor: "rgba(0,0,0,0)",
  },
  image: {
    flex: 1,
  },
  text: {
    color: "#fff",
    fontFamily: "montserrat",
    padding: 2,
  },
  logincontainer: {
    flex: 1,
    width: "100%",
    padding: 30,
    position: "relative",
  },
  link: {
    borderBottomWidth: 0.5,
    borderColor: "#fff",
  },
  policy: {
    color: "#fff",
    fontFamily: "karlaLight",
    fontSize: 14,
    padding: 3,
  },
});
