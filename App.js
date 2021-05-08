import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

import ImageList from "./App/components/ImageList";
import ImagePicker from "./App/components/ImagePicker";
import Screen from "./App/components/Screen";
import DetailsPages from "./App/pages/DetailsPages";
import HomePage from "./App/pages/HomePage";
import LandingPage from "./App/pages/LandingPage";

const Stack = createStackNavigator();
const StackNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name="LandingPage" component={LandingPage} />
    <Stack.Screen name="HomePage" component={HomePage} />
  </Stack.Navigator>
);
export default function App() {
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
}
