import React from "react";
import { ScrollView, StyleSheet } from "react-native";

import Card from "../components/Card";

function HomePage({ navigation }) {
  const data = [
    {
      key: 1,
      title: "Tunisia Mall",
      subtitle: "Lac 2 - Tunis",
      image: require("../assets/landing1.jpg"),
    },
    {
      key: 2,
      title: "Mall Of Sousse",
      subtitle: "Sousse",
      image: require("../assets/landing1.jpg"),
    },
  ];
  return (
    <ScrollView style={styles.container}>
      {data.map((store) => (
        <Card
          pressed={() => navigation.navigate("DetailsPages", { data: store })}
          title={store.title}
          subtitle={store.subtitle}
          image={store.image}
        />
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f4f4",
    padding: 20,
  },
});

export default HomePage;
