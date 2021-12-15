import React from "react";
import { Text, View, Image, TouchableOpacity } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { useWindowDimensions } from "react-native";
import SignIn from "./signin";
import SignUp from "./signup";

const Login = ({ navigation }) => {
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
      <View style={{ marginTop: 100 }}>
        <Image
          source={require("../../assets/e-learning.png")}
          style={{ width: 300 }}
        />
      </View>
      <View style={{ marginTop: 40 }}>
        <Text
          style={{
            fontWeight: "bold",
            fontFamily: "",
            fontSize: 34,
            textAlign: "center",
            color: "#2F327D",
          }}
        >
          Welcome to uLEARNER
        </Text>

        <View
          style={{  marginTop: 15 }}
        >
          <Text style={{ fontSize: 17, color: "#696984", textAlign:'center' }}>Please sign up or sign to start using uLEARNER
          </Text>
        </View>
       
          <View>
          <TouchableOpacity
              onPress={() => navigation.replace("SignUp")}
              style={{backgroundColor:'orange',borderRadius:10, padding:18,width:360,postion:'static', top:100,}}>
                  <Text style={{textAlign:'center', color:'white',fontSize:20}}>Sign up</Text>
              </TouchableOpacity>
          </View>
          <View style={{paddingTop:50, marginBottom:80}}>
          <TouchableOpacity
              onPress={() => navigation.navigate("SignIn")}
              style={{backgroundColor:'rgba(244, 140, 6, 0.25)',borderRadius:10, padding:18,width:360, postion:'relative', top:70}}>
                  <Text style={{textAlign:'center', color:'orange',fontSize:20}}>Sign in</Text>
              </TouchableOpacity>
          </View>
    
      </View>
    </View>
  );
};

export default Login;
