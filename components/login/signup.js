import React from "react";
import { Text, View, Image, TouchableOpacity } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { useWindowDimensions } from "react-native";

const SignUp = ({ navigation }) => {
  const { height, width } = useWindowDimensions();

  return (
    <View>
      <View
        style={{
          marginTop: 130,
          flex: 1,
          alignItems: "center",
          backgroundColor: "white",
        }}
      >
        <Image source={require("../../assets/uLeanerlogo.png")} />
      </View>
      <View style={{ marginTop: 40 }}>
        <Text
          style={{
            fontWeight: "bold",
            fontSize: 35,
            padding: 40,
            color: "black",
          }}
        >
          Sign up
        </Text>
      </View>
    </View>
  );
};

export default SignUp;
