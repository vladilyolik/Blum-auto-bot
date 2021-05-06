import React from "react";
import { View, StyleSheet, Image } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import AppText from "../components/AppText";
import colors from "../config/colors";
import StoreHeader from "../components/StoreHeader";

function DetailsPages() {
  return (
    <StoreHeader
      logo={require("../assets/NoLogo.jpg")}
      title="Club 71"
      description="Bar - Grand Tunis"
      image={require("../assets/landing1.jpg")}
    />
  );
}

export default DetailsPages;
