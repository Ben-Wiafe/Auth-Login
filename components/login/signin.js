import React, { useState } from "react";
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  StyleSheet,
  Alert,
  TextInput,
  KeyboardAvoidingView,
} from "react-native";
import { Formik } from "formik";
import { Icon } from "react-native-elements/dist/Icon";
import { NavigationContainer } from "@react-navigation/native";
import SignUp from "./signup";
import Forgotpassword from "./forgotpassword";
import { useWindowDimensions } from "react-native";


const SignIn = ({ navigation }) => {
  const { height, width } = useWindowDimensions();
  const [show, setShow] = useState(true)
   
  const [color, setColor] = useState( 'gray');
  const [colo, setColo] = useState( 'gray');
  return (
    <View style={{ backgroundColor: "white", flex: 1 }}>
      <View
        style={{
          marginTop: 120,
          alignItems: "center",
          backgroundColor: "white",
        }}
      >
        <Image source={require("../../assets/uLeanerlogo.png")} />
      </View>
      <View style={{ marginTop: 0 }}>
        <Text
          style={{
            fontWeight: "bold",
            fontSize: 40,
            padding: 30,
            color: "black",
          }}
        >
          Sign in
        </Text>

        <KeyboardAvoidingView style={{ padding: 27 }}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              borderWidth: StyleSheet.hairlineWidth,
              borderColor:color,
              height: 65,
              padding: 5,
              borderRadius: 10,
            }}
          >
            <Image
              source={require("../../assets/Mail.png")}
              style={{ marginRight: 16, marginLeft: 6 }}
            />
            <TextInput
              name="email"
              placeholder="Email address"
              style={styles.email}
              onFocus={()=> { setColor('orange')}}
              onBlur={() => {setColor('gray')}}
              textContentType="emailAddress"
              underlineColorAndroid="transparent"
/>         
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              borderWidth: StyleSheet.hairlineWidth,
              borderColor:colo,
              height: 65,
              marginTop: 20,
              padding: 5,
              borderRadius: 10,
          
            }}
          >
            <Image
              source={require("../../assets/Password.png")}
              style={{ marginRight: 16, marginLeft: 6 }}
            />

            <TextInput
              name="password"
              placeholder="Password"
              style={styles.name}
              selectionColor={"blue"}
              secureTextEntry={show}
              onFocus={()=> { setColo('orange')}}
              onBlur={() => {setColo('gray')}}
              // onChangeText={handleChange("fname")}
              // onBlur={handleBlur("fname")}
              // value={values.fname}
            />
        <TouchableOpacity onPress={
          () =>{
           setShow((prev) => !prev)
           }
        }>
        <Icon name={show === true? 'eye-off': 'eye'}
            size={25}
            color={'gray'}
            type="ionicon"
        />
        </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
        <View>
          <TouchableOpacity
            style={styles.forgetpass}
            onPress={() => {
              navigation.navigate(Forgotpassword)
            }}
          >
            <Text style={styles.forgettext}>Forgot Password? </Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.signup}>
          <Text style={styles.signtext}>Sign in </Text>
        </TouchableOpacity>
       <TouchableOpacity onPress={() => {navigation.replace('SignUp')}} style={{alignItems:'center', top:200}}>
       
          <Text style={{fontSize:20, color:'gray'}}>Don't have an account yet? <Text style={{color:'orange', fontWeight:'600',textDecorationLine:'underline'}}>Create Account</Text></Text>
      
       </TouchableOpacity>
      </View>
    </View>
  );
};
export default SignIn;

const styles = StyleSheet.create({
  signup: {
    backgroundColor: "#F48C06",
    alignItems: "center",
    padding: 20,
    marginTop: 20,
    borderRadius: 10,
    marginHorizontal: 25,
    borderWidth: StyleSheet.hairlineWidth,
  },
  signtext: {
    color: "white",
    fontSize: 24,
  },
  name: {
   width:'80%',
    fontWeight: "400",
    fontSize: 17,
  },
  email: {
    width: "100%",
    fontWeight: "400",
    fontSize: 17,
  
  },
  forgettext: {
    color: "gray",
    textAlign: "right",
    marginRight: 25,
    marginTop: -10,
    fontSize: 17,
  },
});
