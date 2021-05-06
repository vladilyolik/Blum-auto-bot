import React from "react";
import Screen from "./App/components/Screen";
import DetailsPages from "./App/pages/DetailsPages";
import HomePage from "./App/pages/HomePage";

export default function App() {
  return (
    <Screen>
      <DetailsPages
        title="Club 71"
        description="Bar - Grand Tunis"
        image={require("./App/assets/landing1.jpg")}
      />
    </Screen>
  );
}
