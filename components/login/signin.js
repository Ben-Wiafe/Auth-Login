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
import * as yup from "yup";
import { Icon } from "react-native-elements/dist/Icon";
import { NavigationContainer } from "@react-navigation/native";
import SignUp from "./signup";
import Forgotpassword from "./forgotpassword";
import { useWindowDimensions } from "react-native";

const SignIn = ({ navigation }) => {
  const { height, width } = useWindowDimensions();
  const [show, setShow] = useState(true);
  const [color, setColor] = useState("gray");
  const [colo, setColo] = useState("gray");

  const schema = yup.object().shape({
    email: yup
      .string()
      .email("Please enter valid email")
      .required("Email Address is Required!"),
    password: yup
      .string()
      // .min(8, ({ min }) => `Password must be at least ${min} characters`)
      // .matches(/\w*[a-z]\w*/, "Password must have a small letter")
      // .matches(/\w*[A-Z]\w*/, "Password must have a capital letter")
      // .matches(/\d/, "Password must have a number")
      // .matches(
      //   /[!@#$%^&*()\-_"=+{}; :,<.>]/,
      //   "Password must have a special character"
      // )
  
      .required("Password is required"),
  });
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
      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={(values, formikActions) => {
          setTimeout(() => {
            console.log(values)
            formikActions.resetForm();
          }, 3000);
        }}
        validationSchema={schema}
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
          isValid,}) => (
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
                  borderColor: color,
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
                  onFocus={() => {
                    setColor("orange");
                  }}
                  onBlur={() => {
                    setColor("gray");
                    setFieldTouched("email");
                  }}
                  onChangeText={handleChange("email")}
                  value={values.email}
                  keyboardType="email-address"
                />
              </View>
              {touched.email && errors.email &&
              <Text style={{ fontSize: 12, color: '#FF0D10', paddingTop:5, paddingHorizontal:5 }}>{errors.email}</Text>
            }
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  borderWidth: StyleSheet.hairlineWidth,
                  borderColor: colo,
                  height: 65,
                  marginTop: 17,
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
                  onFocus={() => {
                    setColo("orange");
                  }}
                  onBlur={() => {
                    setColo("gray");
                    setFieldTouched("lname");
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
                    size={24}
                    color={"gray"}
                    type="ionicon"
                  />
                </TouchableOpacity>
              </View>
              {touched.password && errors.password &&
              <Text style={{ fontSize: 12, color: '#FF0D10', paddingTop:5,paddingHorizontal:5 }}>{errors.password}</Text>
            }
            </KeyboardAvoidingView>
            <View>
              <TouchableOpacity
                style={styles.forgetpass}
                onPress={() => {
                  navigation.navigate(Forgotpassword);
                }}
              >
                <Text style={styles.forgettext}>Forgot Password? </Text>
              </TouchableOpacity>
            </View>
            <TouchableOpacity style={styles.signup} onPress={handleSubmit}>
              <Text style={styles.signtext}>Sign in </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                navigation.replace("SignUp");
              }}
              style={{ marginVertical: 200 }}
            >
              <Text
                style={{ fontSize: 16, color: "gray", textAlign: "center" }}
              >
                Don't have an account yet?{" "}
                <Text
                  style={{
                    color: "orange",
                    fontWeight: "600",
                    textDecorationLine: "underline",
                  }}
                >
                  Create Account
                </Text>
              </Text>
            </TouchableOpacity>
          </View>
        )}
      </Formik>
    </View>
  );
};
export default SignIn;

const styles = StyleSheet.create({
  signup: {
    backgroundColor: "#F48C06",
    alignItems: "center",
    padding: 18,
    marginTop: 20,
    borderRadius: 10,
    marginHorizontal: 25,
    borderWidth: StyleSheet.hairlineWidth,
  },
  signtext: {
    color: "white",
    fontSize: 22,
  },
  name: {
    width: "80%",
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
