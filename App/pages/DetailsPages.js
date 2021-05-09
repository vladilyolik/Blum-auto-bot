import * as React from "react";
import { View, StyleSheet, Image, ScrollView, Text } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import AppText from "../components/AppText";
import colors from "../config/colors";
import StoreHeader from "../components/StoreHeader";
import PriceBar from "../components/PriceBar";
import LineBetween from "../components/LineBetween";
import AboutStore from "../components/AboutStore";

function DetailsPages({ route }) {
  const { data } = route.params;
  return (
    <ScrollView>
      <StoreHeader
        logo={require("../assets/NoLogo.jpg")}
        title={data.title}
        description={data.subtitle}
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
