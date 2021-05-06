import React from "react";
import { View } from "react-native";

import Card from "./App/components/Card";
import Screen from "./App/components/Screen";
import LandingPage from "./App/pages/LandingPage";

export default function App() {
  return (
    <Screen>
      <View style={{ backgroundColor: "#f8f4f4", padding: 20, marginTop: 100 }}>
        <Card
          title="Hello world"
          subtitle="here id the description"
          image={require("./App/assets/landing1.jpg")}
        />
      </View>
    </Screen>
  );
}
