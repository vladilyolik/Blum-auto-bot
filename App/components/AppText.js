import React from "react";
import { Text, Platform } from "react-native";

function AppText({ children }) {
  return <Text>{children}</Text>;
}
Platform.select({
  ios: {
    fontSize: 20,
    fontFamily: "Avenir",
  },
  android: {
    fontSize: 18,
    fontFamily: "Roboto",
  },
});
export default AppText;
