import React from "react";
import { View, StyleSheet } from "react-native";

import colors from "../config/colors";
import AppText from "./AppText";

function AboutDetails({ content }) {
  const l = content.length + 5;
  return (
    <View style={styles.container}>
      <AppText style={styles.content}> {content} </AppText>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 2,
    borderColor: colors.gray,
    borderRadius: 20,
    alignSelf: "flex-start",
    marginTop: 11,
  },
  content: {
    color: colors.gray,
    textAlign: "center",
    margin: 3,
  },
});

export default AboutDetails;
