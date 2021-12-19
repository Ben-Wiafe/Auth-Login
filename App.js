import React from 'react';
import { Text, View,Image, LayoutAnimation } from 'react-native';
import Landing from './components/homepage/landing';
import Firsthome from './components/homepage/firsthome';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native' 
import SecondHome from './components/homepage/secHome';
import Login from './components/login/login';
import SignIn from './components/login/signin';
import SignUp from './components/login/signup';
import Newpassword from './newpassword';
import Emailsent from './components/login/emailsent';
import Forgotpassword from './components/login/forgotpassword';
const Stack =createNativeStackNavigator();


export default function App() {
  return (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name='Landing'  component={Landing} options={{ headerShown: false }}/>
      <Stack.Screen name='Firsthome' component= {Firsthome} options={{headerShown:false}}/>
      <Stack.Screen name='SecondHome' component= {SecondHome} options={{headerShown:false}}/>
      <Stack.Screen name='Login' component= {Login} options={{headerShown:false}}/>
      <Stack.Screen name='SignUp' component= {SignUp} options={{headerShown:false}}/>
      <Stack.Screen name='SignIn' component= {SignIn} options={{headerShown:false}}/>
      <Stack.Screen name='Forgotpassword' component= {Forgotpassword} options={{title:"Reset Password", headerTitleAlign:'center'}}/>
      <Stack.Screen name='Newpassword' component= {Newpassword} options={{title:"New Password", headerTitleAlign:'center'}}/>
      <Stack.Screen name='Emailsent' component= {Emailsent} options={{headerShown:false}}/>

    </Stack.Navigator>

  </NavigationContainer>
  
   
 
  );
}
