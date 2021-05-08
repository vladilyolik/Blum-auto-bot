import React from "react";
import { View, StyleSheet } from "react-native";

import Card from "../components/Card";

function HomePage(props) {
  return (
    <View style={styles.container}>
      <Card
        title="Hello world"
        subtitle="here id the description"
        image={require("../assets/landing1.jpg")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f4f4",
    padding: 20,
  },
});

export default HomePage;
