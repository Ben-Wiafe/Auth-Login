import React, { useState } from "react";
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  KeyboardAvoidingView,
  Alert,
} from "react-native";
import { Formik } from "formik";
import { NavigationContainer } from "@react-navigation/native";
import { useWindowDimensions } from "react-native";
import SignIn from "./signin";
import { Icon } from "react-native-elements/dist/Icon";
import * as yup from "yup";

const SignUp = ({ navigation,submitting }) => {

 const backgroundColo = submitting ? 'rgba(27,27,51,0.4)' : 'rgba(27,27,51,1)'

  const [show, setShow] = useState(true);
  const [color, setColor] = useState("gray");
  const [colo, setColo] = useState("gray");
  const [col, setCol] = useState("gray");
  const [co, setCo] = useState("gray");
  const [c, setC] = useState("gray");

  const loginSchema = yup.object().shape({
    fname: yup
      .string()
      .min(3, "First must be more than 3 characters")
      .required("First name is Required"),

    lname: yup
      .string()
      .min(3, "Last must be more than 3 characters")
      .required("Last name is Required"),

    email: yup
      .string()
      .email("Please enter valid email")
 
      .required("Email Address is Required!"),

    password: yup
      .string()
      .min(8, ({ min }) => `Password must be at least ${min} characters`)
      .matches(/\w*[a-z]\w*/, "Password must have a small letter")
      .matches(/\w*[A-Z]\w*/, "Password must have a capital letter")
      .matches(/\d/, "Password must have a number")
      .matches(/[!@#$%^&*()\-_"=+{}; :,<.>]/,
        "Password must have a special character"
      )
      .required("Password is required"),

    confirmPass: yup
      .string()
      .oneOf([yup.ref("password"), null], "Password does not match!"),
  });

  return (
    <View style={{ backgroundColor: "white", flex: 1 }}>
      <View
        style={{
          marginTop: 70,
          alignItems: "center",
          backgroundColor: "white",
        }}
      >
        <Image source={require("../../assets/uLeanerlogo.png")} />
      </View>
      <Formik
        initialValues={{
          fname: "",
          lname: "",
          email: "",
          password: "",
          confirmPass: "",
        }}
        onSubmit={(values, formikActions) => {
          setTimeout(() => {
            console.log(values)
            formikActions.resetForm();
            formikActions.setSubmitting(false)

          }, 3000);
        
        }}
        validationSchema={loginSchema}
        submitting
      >
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          setFieldTouched,
          isSubmitting,
          values,
          errors,
          touched,
          isValid,
        }) => (
          <View>
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
                paddingBottom:9
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  borderWidth: StyleSheet.hairlineWidth,
                  height: 62,
                  borderColor: color,
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
                  name="fname"
                  placeholder="First Name"
                  style={styles.name}
                  onFocus={() => {
                    setColor("orange");
                  }}
                  onBlur={() =>{
                    setColor('gray');
                    setFieldTouched('fname') ;
                  }}
                 autoCapitalize='characters'
                  onChangeText={handleChange("fname")}
                  value={values.fname}
                />
              </View>
              
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  borderWidth: StyleSheet.hairlineWidth,
                  height: 62,
                  width: 170,
                  borderColor: colo,
                  padding: 5,
                  borderRadius: 10,
                }}
              >
                <Image
                  source={require("../../assets/Profile.png")}
                  style={{ marginRight: 16, marginLeft: 6 }}
                />

                <TextInput
                  name="lname"
                  placeholder="Last Name"
                  style={styles.name}
                  onFocus={() => {
                    setColo("orange");
                  }}
                  onBlur={() =>{
                    setColo('gray');
                    setFieldTouched('lname') ;
                  }}
                  onChangeText={handleChange("lname")}
                  value={values.lname}
                />
              </View>
              
            </KeyboardAvoidingView>
            <View style={{flexDirection:'row', alignItems:'center', justifyContent:'space-between'}}>
            {touched.fname && errors.fname &&
              <Text style={{ fontSize: 12, color: '#FF0D10', paddingHorizontal:31,}}>{errors.fname}</Text>
            }
            {touched.lname && errors.lname &&
              <Text style={{ fontSize: 12, color: '#FF0D10', paddingHorizontal:33,}}>{errors.lname}</Text>
            }
            </View>
           
            <KeyboardAvoidingView style={{ padding: 25 }}>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  borderWidth: StyleSheet.hairlineWidth,
                  height: 62,
                  marginTop:-20,
                  borderColor: col,
                  padding: 5,
                  marginBottom:8,
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
                  style={styles.name}
                  onFocus={() => {
                    setCol("orange");
                  }}
                  onBlur={() =>{
                    setCol('gray');
                    setFieldTouched('email') ;
                  }}
                  onChangeText={handleChange("email")}
                  value={values.email}
                  keyboardType="email-address"
                />
              
              </View>
              {touched.email && errors.email &&
              <Text style={{ fontSize: 12, color: '#FF0D10', paddingTop:0, paddingHorizontal:5 }}>{errors.email}</Text>
            }
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  borderWidth: StyleSheet.hairlineWidth,
                  height: 62,
                  borderColor: co,
                  marginTop:8,
                  padding: 5,
                  marginBottom:8,
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
                  onFocus={() => {
                    setCo("orange");
                  }}
                  onBlur={() =>{
                    setCo('gray');
                    setFieldTouched('password') ;
                  }}
                  secureTextEntry={show}
                  onChangeText={handleChange("password")}
                  value={values.password}
                />
                <TouchableOpacity
                  onPress={() => {
                    setShow((prev) => !prev);
                  }}
                >
                  <Icon
                    name={show === true ? "eye-off" : "eye"}
                    size={25}
                    color={"gray"}
                    type="ionicon"
                  />
                </TouchableOpacity>
              </View>
              {touched.password && errors.password &&
              <Text style={{ fontSize: 12, color: '#FF0D10', paddingTop:0,paddingHorizontal:5 }}>{errors.password}</Text>
            }
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  borderWidth: StyleSheet.hairlineWidth,
                  height: 62,
                  borderColor: c,
                  marginBottom:8,
                  padding: 5,
                  marginTop:7,
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
                  onFocus={() => {
                    setC("orange");
                  }}
                  onBlur={() =>{
                    setC('gray');
                    setFieldTouched('confirmPass') ;
                  }}
                  secureTextEntry={show}
                  onChangeText={handleChange("confirmPass")}
                  value={values.confirmPass}
                />
                <TouchableOpacity
                  onPress={() => {
                    setShow((prev) => !prev);
                  }}
                >
                  <Icon
                    name={show === true ? "eye-off" : "eye"}
                    size={25}
                    color={"gray"}
                    type="ionicon"
                  />
                </TouchableOpacity>
                
              </View>
              {touched.confirmPass && errors.confirmPass &&
              <Text style={{ fontSize: 12, color: '#FF0D10', paddingTop:0,paddingHorizontal:5 }}>{errors.confirmPass}</Text>
            }
            </KeyboardAvoidingView>
            <TouchableOpacity style={styles.signup} onPress={handleSubmit} >
              <Text style={styles.signtext}>Sign up </Text>
            </TouchableOpacity>
           
            <TouchableOpacity
              onPress={() => navigation.replace("SignIn")}
              style={{ alignItems: "center", top:150}}
             
            >
              <Text style={{ fontSize: 16, color: "gray", }}>
                Already have an account?{" "}
                <Text
                  style={{
                    color: "orange",
                    fontWeight: "600",
                    textDecorationLine: "underline",
                  }}
                >
                  Login
                </Text>
              </Text>
            </TouchableOpacity>
          </View>
        )}
      </Formik>
    </View>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  signup: {
    backgroundColor: "#F48C06",
    alignItems: "center",
    padding: 20,
 
    borderRadius: 10,
    marginHorizontal: 25,
    borderWidth: StyleSheet.hairlineWidth,
  },
  signtext: {
    color: "white",
    fontSize: 24,
  },
  name: {
    width: "80%",
    fontWeight: "400",
    fontSize: 17,
  },
});
