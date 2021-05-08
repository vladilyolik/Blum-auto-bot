import React, { useState } from "react";
import { StyleSheet, View, FlatList, Image } from "react-native";
import ImagePicker from "./ImagePicker";

function ImageList({ imageUris = [], onRemoveImage, onAddImage }) {
  const [images, setImages] = useState([]);
  return (
    <View>
      <ImagePicker />
      {imageUris.map((uri) => (
        <Image source={uri} key={uri} onChange={() => onRemoveImage(uri)} />
      ))}
      <Image onChange={(uri) => onAddImage(uri)} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
  },
});

export default ImageList;
