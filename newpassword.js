import React, {useState} from "react";
import {
  StyleSheet,
 
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { Icon } from "react-native-elements/dist/Icon";


const Newpassword = () => {
    const [show, setShow] = useState(true)

  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        New Password should be different from old password
      </Text>
      <View>
        <Text style={{ top: 24, paddingHorizontal: 5 }}>New Password</Text>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent:'space-between',
            borderWidth: StyleSheet.hairlineWidth,
            height: 55,
            
            marginTop: 30,
            padding: 5,
            borderRadius: 10,
          }}
        >
          <TextInput placeholder="" secureTextEntry={show} style={{width:320}}/>
          <TouchableOpacity onPress={
          () =>{
           setShow((prev) => !prev)
           }
          }>
          <Icon name={show === true? 'eye-off': 'eye'} type="ionicon" color={"gray"} />

          </TouchableOpacity>

        </View>

        <Text style={{ top: 4, paddingHorizontal: 5, color: "gray" }}>
          Must be at least 8 characters
        </Text>
      </View>
      <View>
        <Text style={{ top: 24, paddingHorizontal: 5 }}>Confirm Password</Text>
        <TextInput
          placeholder=""
          style={styles.textinput}
          secureTextEntry={true}
        />
      </View>
      <TouchableOpacity
        style={{
          marginTop: 50,
          backgroundColor: "orange",
          padding: 20,
          alignItems: "center",
          borderRadius: 10,
          width: 350,
        }}
      >
        <Text style={{ fontSize: 19, color: "white" }}>Set Password</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Newpassword;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: "center",
    backgroundColor: "white",
    paddingTop: 30,
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
