import React from "react";
import { View } from "react-native";

import Card from "../components/Card";

function HomePage(props) {
  return (
    <View style={{ backgroundColor: "#f8f4f4", padding: 20, marginTop: 100 }}>
      <Card
        title="Hello world"
        subtitle="here id the description"
        image={require("../assets/landing1.jpg")}
      />
    </View>
  );
}

export default HomePage;
