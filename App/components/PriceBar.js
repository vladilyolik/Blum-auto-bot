import React from "react";
import { View, StyleSheet, Image } from "react-native";

import colors from "../config/colors";
import AppText from "./AppText";

function PriceBar({ image }) {
  return (
    <View style={styles.container}>
      <AppText style={styles.title}>Tarif et Prix</AppText>
      <View style={styles.images}>
        <Image style={styles.image} source={image} />
        <Image style={styles.image} source={image} />
      </View>
      <View style={styles.confirm}>
        <AppText style={{ fontSize: 12 }}>Confirmé par 8 Vynders</AppText>
        <AppText style={{ fontSize: 10 }}>Mise a jour le 25 Mars 2021</AppText>
      </View>
      <View style={styles.confirm}>
        <AppText style={{ fontSize: 12 }}>Nombre de Places</AppText>
        <AppText style={{ fontSize: 15 }}>10 - 20 personnes</AppText>
      </View>
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
  images: {
    flexDirection: "row",
  },
  image: {
    width: 70,
    height: 90,
    margin: 5,
  },
  confirm: {
    flexDirection: "row",
    paddingTop: 10,
    justifyContent: "space-between",
  },
  between: {
    backgroundColor: colors.white,
  },
});

export default PriceBar;
