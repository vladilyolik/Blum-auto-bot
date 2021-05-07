import React from "react";
import { View, StyleSheet } from "react-native";

function LineBetween(props) {
  return <View style={styles.line} />;
}

const styles = StyleSheet.create({
  line: {
    borderWidth: 0.5,
    borderColor: "lightgray",
  },
});

export default LineBetween;
