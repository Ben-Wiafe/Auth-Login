import React from "react";
import { View, Text, Image,TouchableOpacity, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { NavigationContainer } from "@react-navigation/native";
import Firsthome from '././firsthome'

export default function Landing({navigation}) {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
    <TouchableOpacity onPress={()=> navigation.replace('Firsthome')}>
    <LinearGradient
        // Background Linear Gradient
        colors={['rgba(245,145,46,0.09)', 'transparent']}
        style={styles.background}
      />
      <Image source={require("../../assets/uLeaner.png")} />
    </TouchableOpacity>
     
     
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'orange',
  },
  background: {
    position: 'absolute',
    left: -80,
    right: -80,
    top: 10,
    height: 350,
  },
});
