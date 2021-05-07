import React from "react";
import { View, StyleSheet } from "react-native";

import AboutDetails from "./AboutDetails";
import AppText from "./AppText";
import colors from "../config/colors";

function AboutStore({ content }) {
  return (
    <View style={styles.container}>
      <AppText style={styles.title}>Tout sur cette endroit</AppText>
      <AboutDetails content={content} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    padding: 20,
  },
  title: {
    fontSize: 30,
    color: colors.gray,
  },
});

export default AboutStore;
