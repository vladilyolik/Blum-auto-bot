import React from "react";
import { Text, View } from "react-native";
import LandigScreen from "./app/Screens/LandigScreen";
import * as eva from "@eva-design/eva";
import { ApplicationProvider, Layout } from "@ui-kitten/components";
export default function App() {
  return (
    <ApplicationProvider {...eva} theme={eva.light}>
      <LandigScreen />
    </ApplicationProvider>
  );
}
