import React from "react";
import { Platform, View, StyleSheet } from "react-native";

function Screen({ children }) {
  return <View style={styles.container}>{children}</View>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Screen;
