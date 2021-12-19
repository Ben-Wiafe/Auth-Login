import React from "react";
import { View, Text ,Image} from "react-native";

export default function Emailsent() {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent:'center',
        backgroundColor: "white",
       
      }}
    >
      <Image source={require('../../assets/email-notification.png')}/>
      <Text style={{fontSize:38, fontWeight:'bold', color:'#2F327D', marginTop:-60, textAlign:'center' }}>Email Sent</Text>
      <Text style={{maxWidth:300, textAlign:'center', fontSize:16, color:'gray'}}>Please check your email and click on the
 link sent to reset your password</Text>
    </View>
  );
}
