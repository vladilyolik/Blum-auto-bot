import React from "react";
import { ImageBackground, StyleSheet, View } from "react-native";

import Screen from "../components/Screen";
import AppButton from "../components/AppButton";
import colors from "../config/colors";

function LandingPage(props) {
  return (
    <Screen>
      <ImageBackground
        blurRadius={3}
        style={styles.background}
        source={require("../assets/landing.jpg")}
      >
        <View style={styles.buttonsContainer}>
          <AppButton title={"Login"} color="primary" />
          <AppButton title="Register" color="secondary" />
        </View>
      </ImageBackground>
    </Screen>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
  },
  buttonsContainer: {
    padding: 20,
  },
});

export default LandingPage;
