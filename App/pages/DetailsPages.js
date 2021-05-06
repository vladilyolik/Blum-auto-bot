import React from "react";
import { View, StyleSheet, Image } from "react-native";

import AppText from "../components/AppText";
import colors from "../config/colors";

function DetailsPages({ title, description, image }) {
  return (
    <View style={styles.detailsContainer}>
      <Image source={image} style={styles.image} />
      <View style={styles.textContainer}>
        <AppText style={styles.title}>{title}</AppText>
        <AppText style={styles.description}>{description}</AppText>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  detailsContainer: {
    flex: 1,
  },
  image: {
    width: "100%",
    height: 300,
  },
  textContainer: {
    margin: 20,
  },
  title: {
    color: colors.primary,
    fontWeight: "bold",
    fontSize: 30,
  },
  description: {
    color: colors.secondary,
    fontSize: 17,
  },
});

export default DetailsPages;
