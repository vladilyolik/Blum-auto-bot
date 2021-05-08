import React, { useEffect, useState } from "react";
import * as ImagePickerLibrary from "expo-image-picker";
import { Image, StyleSheet, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import AppButton from "./AppButton";
import colors from "../config/colors";
import Screen from "./Screen";

export default function ImagePicker({ setUri }) {
  const [imageUri, setImageUri] = useState();

  const requestPermission = async () => {
    const {
      granted,
    } = await ImagePickerLibrary.requestMediaLibraryPermissionsAsync();
    if (!granted) alert("you need to enable permission to get the image");
  };

  const selectImage = async () => {
    try {
      const result = await ImagePickerLibrary.launchImageLibraryAsync();
      if (!result.cancelled) setUri(result.uri);
    } catch (error) {
      console.log("error selecting an image", error);
    }
  };

  useEffect(() => {
    requestPermission();
  }, []);

  return (
    <Screen>
      <TouchableOpacity
        style={styles.container}
        onPress={() => {
          selectImage();
        }}
      >
        <MaterialCommunityIcons
          style={styles.icon}
          name="camera"
          size={50}
          color="black"
        />
      </TouchableOpacity>
      <Image source={{ uri: imageUri }} style={{ width: 300, height: 300 }} />
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 15,
    width: 90,
    height: 90,
    alignItems: "center",
    backgroundColor: colors.gray,
    justifyContent: "center",
  },
});
