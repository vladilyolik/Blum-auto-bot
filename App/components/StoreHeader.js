import React from "react";
import { View, StyleSheet, Image } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import AppText from "../components/AppText";
import colors from "../config/colors";
function StoreHeader({ title, description, image, logo }) {
  return (
    <View style={styles.detailsContainer}>
      <Image source={image} style={styles.image} />
      <View style={styles.store}>
        <Image style={styles.logo} source={logo} />
        <View style={styles.textContainer}>
          <AppText style={styles.title}>{title}</AppText>
          <AppText style={styles.description}>{description}</AppText>
        </View>
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
    height: 250,
  },
  store: {
    flexDirection: "row",
    padding: 20,
  },
  logo: {
    height: 70,
    width: 70,
    borderRadius: 20,
    borderWidth: 1.5,
    borderColor: colors.gray,
  },
  textContainer: {
    marginLeft: 20,
  },
  title: {
    color: colors.black,

    fontSize: 30,
  },
  description: {
    color: colors.gray,
    fontSize: 17,
  },
});

export default StoreHeader;
