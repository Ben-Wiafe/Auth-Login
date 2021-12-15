import React from "react";
import { View, Text, Image, TouchableHighlight } from "react-native";
import { useWindowDimensions } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import Firsthome from "./firsthome";

export default function Landing({ navigation }) {
  const { height, width } = useWindowDimensions();
  return (
    <View>
      <TouchableHighlight
        onPress={() => navigation.navigate("Firsthome")}
      >
        <Image
          source={require("../../assets/splash.png")}
          style={{ height: height, width: width / 1, marginTop: height / 19 }}
        />
      </TouchableHighlight>
    </View>
  );
}
