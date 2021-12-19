import React from "react";
import {
  StyleSheet,
  useWindowDimensions,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from "react-native";
import Newpassword from "../../newpassword";
import Emailsent from "./emailsent";


const Forgotpassword = ({navigation}) => {
  const { height, width } = useWindowDimensions();
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Please enter the email associated with your account & we will send you
        an email with instructions to reset your password.
      </Text>
      <View>
        <TextInput placeholder="Email Address" style={styles.textinput} />
      </View>       
      <TouchableOpacity
        style={{
          marginTop: 50,
          backgroundColor: "orange",
          padding: 20,
          alignItems:'center',
          borderRadius: 10,
          width: 350,
        }}
        onPress={() => navigation.navigate('Emailsent')}
      >
        <Text style={{fontSize:17, color:'white'}}>Continue</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Forgotpassword;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: "center",
    backgroundColor: "white",
    paddingTop:30
  },
  text: {
    fontSize: 17,
    color: "gray",
  },

  textinput: {
    alignItems: "center",
    borderWidth: StyleSheet.hairlineWidth,
    marginTop: 30,
    padding: 15,
    borderRadius: 10,
    width: 350,
  },
});
