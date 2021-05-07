import React from "react";
import { View, StyleSheet, Image, ScrollView } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import AppText from "../components/AppText";
import colors from "../config/colors";
import StoreHeader from "../components/StoreHeader";
import PriceBar from "../components/PriceBar";
import LineBetween from "../components/LineBetween";
import AboutStore from "../components/AboutStore";

function DetailsPages() {
  return (
    <ScrollView>
      <StoreHeader
        logo={require("../assets/NoLogo.jpg")}
        title="Club 71"
        description="Bar - Grand Tunis"
        image={require("../assets/landing1.jpg")}
      />
      <LineBetween />
      <PriceBar image={require("../assets/tarif.jpg")} />
      <LineBetween />
      <AboutStore content="sallon de coiffure" />
    </ScrollView>
  );
}

export default DetailsPages;
