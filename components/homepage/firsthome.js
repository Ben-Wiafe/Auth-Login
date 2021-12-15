import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { useWindowDimensions } from "react-native";
// import { Icon } from 'react-native-elements';
import SecondHome from './secHome'
import Login from "../login/login";

const Firsthome = ({ navigation }) => {
  const { height, width } = useWindowDimensions();

  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "white",
      }}
    >
      <View style={{ marginTop: -100 }}>
        <Image
          source={require("../../assets/higher.png")}
          style={{ width: 340 }}
        />
      </View>
      <View style={{ marginTop: 40 }}>
        <Text
          style={{
            fontWeight: "bold",
            fontFamily: "Roboto",
            fontSize: 30,
            textAlign: "center",
            color: "#2F327D",
          }}
        >
          Welcome to uLEARNER
        </Text>
        
        <View style={{ paddingHorizontal: 35, marginTop: 20, marginBottom:-20 }}>
          <Text style={{ fontSize: 17, color: "#696984" }}>
            The #1 educational platform with Scholastic Assessment Test (SAT)
            materials for students preparing to take the test
          </Text>
          <Text style={{ fontSize: 16, color: "#696984" }}></Text>
        </View>
<View>
        <View style={{ flexDirection: "row", justifyContent: "space-between", position:'relative',top:140 }}>
        <TouchableOpacity onPress={() => navigation.replace('Login')}>

          <Text style={{ color: "gray", fontSize: 19 }}>
            Skip
          </Text>
          </TouchableOpacity>

         <TouchableOpacity onPress={() => navigation.replace('SecondHome')}>
         <Text
            style={{ color: "#F48C06", fontSize: 19 }}>
            Next
          </Text>
         </TouchableOpacity>
         
        </View>
        </View>
      </View>
    </View>
  );
};

export default Firsthome;
