import * as React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import firebase from "../FirebaseConfig";
import * as ImagePicker from "expo-image-picker";
import { Ionicons } from "@expo/vector-icons";

const Profile = () => {
  const [image, setImage] = React.useState("https://picsum.photos/200");
  const [isUploading, setIsUploading] = React.useState(false);
  const [percentUploaded, setPercentUploaded] = React.useState("");

  React.useEffect(() => {
    //asking for permission to access phone's gallery
    (async () => {
      if (Platform.OS !== "web") {
        const { status } =
          await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== "granted") {
          alert("Sorry, we need camera roll permissions to make this work!");
        }
      }
    })();
  }, []);
  async function handlePickImgBtnClick() {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      quality: 1,
    });

    if (!result.cancelled) {
      setImage(result.uri);
    }
  }
  function handleUploadImageBtnClick() {
    console.log("Upload Image btn pressed", image);

    if (image) {
      setImage("");
      setIsUploading(true);

      //saving image to firebase
      uploadImage(image)
        .then(() => {
          setIsUploading(false);
          console.log("Successful!");
        })
        .catch((error) => {
          console.log("Fail to upload Image", error);
          setIsUploading(false);
        });
    }
  }
  async function uploadImage(uri) {
    const timeStamp = Math.floor(Date.now() / 1000);
    const imageName = timeStamp + ".jpg";

    const response = await fetch(uri);
    const blob = await response.blob();

    //putting image in firebase
    const storageRef = firebase
      .storage()
      .ref()
      .child("image/" + imageName);
    const resp = storageRef.put(blob);
    resp.on(
      firebase.storage.TaskEvent.STATE_CHANGED,
      (snapshot) => {
        const percent = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log("percent", percent);
        setPercentUploaded(Math.floor(percent) + " %");
      },
      (error) => {
        console.log("image upload error: ", error.message);
        setPercentUploaded("");
      },
      () => {
        storageRef.getDownloadURL().then((downloadUrl) => {
          setImage(downloadUrl);
          console.log("File available at:", downloadUrl);
        });
      }
    );
    return resp;
  }
  return (
    <View>
      <View style={styles.container}>
        <Image style={styles.profile} source={{ uri: image }} />
        <TouchableOpacity onPress={handlePickImgBtnClick} style={styles.button}>
          <Ionicons name="image" size={25} color="#000" />
        </TouchableOpacity>
      </View>
      <Text>{percentUploaded}</Text>
      <TouchableOpacity onPress={handleUploadImageBtnClick}>
        <Text style={styles.buttonText}>Upload Image</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    position: "absolute",
    right: 0,
    top: 0,
  },
  profile: {
    width: 150,
    height: 150,
    borderRadius: 100,
  },
  button: {
    backgroundColor: "transparent",
    position: "absolute",
    right: 10,
    bottom: 0,
  },
  buttonText: {
    fontSize: 20,
  },
});
export default Profile;
