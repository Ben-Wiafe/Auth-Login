import React, {useState} from "react";
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  KeyboardAvoidingView,
} from "react-native";
import { Formik } from "formik";
import { NavigationContainer } from "@react-navigation/native";
import { useWindowDimensions } from "react-native";
import SignIn from "./signin";
import { Icon } from "react-native-elements/dist/Icon";

const SignUp = ({ navigation }) => {
  const { height, width } = useWindowDimensions();
  const [show, setShow] = useState(true)
  const [color, setColor] = useState( 'gray');

  return (
    <View style={{ backgroundColor: "white", flex:1, }}>
      <View
        style={{
          marginTop: 70,
          alignItems: "center",
          backgroundColor: "white",
        }}
      >
        <Image source={require("../../assets/uLeanerlogo.png")} />
      </View>
      <View >
        <Text
          style={{
            fontWeight: "bold",
            fontSize: 40,
            padding: 30,
            color: "black",
          }}
        >
          Sign up
        </Text>
        <KeyboardAvoidingView
          style={{
            flexDirection: "row",
            justifyContent: "space-evenly",
            alignItems: "center",
            backgroundColor: "white",
            marginHorizontal: 10,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              borderWidth: StyleSheet.hairlineWidth,
              height: 62,
              width: 170,
              borderRadius: 10,
              padding: 5,
            }}
          >
            <Image
              source={require("../../assets/Profile.png")}
              style={{ marginRight: 16, marginLeft: 6 }}
            />

            <TextInput
              name="name"
              placeholder="First Name"
              style={styles.name}
              // onChangeText={handleChange("fname")}
              // onBlur={handleBlur("fname")}
              // value={values.fname}
            />
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              borderWidth: StyleSheet.hairlineWidth,
              height: 62,
              width: 170,
              padding: 5,
              borderRadius: 10,
            }}
          >
            <Image
              source={require("../../assets/Profile.png")}
              style={{ marginRight: 16, marginLeft: 6 }}
            />

            <TextInput
              name="name"
              placeholder="First Name"
              style={styles.name}
              // onChangeText={handleChange("fname")}
              // onBlur={handleBlur("fname")}
              // value={values.fname}
            />
          </View>
        </KeyboardAvoidingView>
        <KeyboardAvoidingView style={{ padding: 27 }}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              borderWidth: StyleSheet.hairlineWidth,
              height: 62,

              padding: 5,
              borderRadius: 10,
            }}
          >
            <Image source={require("../../assets/Mail.png")} style={{marginRight: 16, marginLeft: 6}} />
            <TextInput
              name="email"
              placeholder="Email address"
              style={styles.name}
              // onChangeText={handleChange("fname")}
              // onBlur={handleBlur("fname")}
              // value={values.fname}
            />
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              borderWidth: StyleSheet.hairlineWidth,
              height: 62,

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
              secureTextEntry={show}
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
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              borderWidth: StyleSheet.hairlineWidth,
              height: 62,
              padding: 5,
              marginTop: 20,
              borderRadius: 10,
            }}
          >
            <Image
              source={require("../../assets/Password.png")}
              style={{ marginRight: 16, marginLeft: 6 }}
            />

            <TextInput
              name="confirmPass"
              placeholder="Confirm password"
              style={styles.name}
              secureTextEntry={show}
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
        <TouchableOpacity style={styles.signup}>
          <Text style={styles.signtext}>Sign up </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.goBack(SignIn)} style={{alignItems:'center', top:150}}>
          <Text style={{fontSize:20, color:'gray'}}>Already have an account? <Text style={{color:'orange', fontWeight:'600',textDecorationLine:'underline'}}>Login</Text></Text>
         
      </TouchableOpacity>
      </View>
      
    </View>
  );
};

export default SignUp;

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
  signtext:{
    color:'white',
    fontSize:24,
  },
  name: {
    width:'80%',
    fontWeight: "400",
    fontSize: 17,
  },
});
