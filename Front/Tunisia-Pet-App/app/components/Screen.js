import React from "react";
import { View, StyleSheet } from "react-native";
import * as eva from "@eva-design/eva";
function Screen({ children }) {
  return <View style={styles.container}>{children}</View>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30,
  },
});
export default Screen;
