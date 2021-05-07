import React from "react";
import ImagePicker from "./App/components/ImagePicker";
import Screen from "./App/components/Screen";
import DetailsPages from "./App/pages/DetailsPages";
import HomePage from "./App/pages/HomePage";

export default function App() {
  return (
    <Screen>
      <ImagePicker />
    </Screen>
  );
}
