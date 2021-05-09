import React from "react";
import { ImageBackground, StyleSheet, Text, View } from "react-native";
import Screen from "../components/Screen";
import { Button, Layout } from "@ui-kitten/components";
import * as eva from "@eva-design/eva";
function LandigScreen(props) {
  return (
    <ImageBackground
      style={styles.background}
      source={require("../assets/21378450.jpg")}
    >
      <Text style={styles.title}>Tunisia Pet</Text>
      <Button style={styles.button} appearance="outline" status="primary">
        Login
      </Button>
      <Button style={styles.button} appearance="outline" status="primary">
        Register
      </Button>
    </ImageBackground>
  );
}
const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  title: {
    fontWeight: "bold",
    fontSize: 40,
    position: "absolute",
    top: 80,
  },
  button: {
    width: "92%",
    margin: 10,
    bottom: 40,
    borderRadius: 25,
  },
});
export default LandigScreen;
