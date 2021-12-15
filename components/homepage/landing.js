import React from "react";
import { View, Text, Image } from "react-native";
import { useWindowDimensions } from "react-native";

export default function Landing() {

    const {height, width} = useWindowDimensions();
  return (
    <View>
       <Image source={require('../../assets/splash.png')} style={{height:height, width:width/1, marginTop:height/19}} />
    
    </View>
 
   );
}
