import { StatusBar } from "expo-status-bar";
import React from "react";

import Screen from "./App/components/Screen";
import LandingPage from "./App/pages/LandingPage";

export default function App() {
  return (
    <Screen>
      <LandingPage />
    </Screen>
  );
}
