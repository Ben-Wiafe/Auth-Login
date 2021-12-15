import React from 'react';
import { Text, View,Image, LayoutAnimation } from 'react-native';
import Landing from './components/homepage/landing';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native' 


const Stack =createNativeStackNavigator();


export default function App() {
  return (
  <NavigationContainer>
    <Stack.Navigator>

    </Stack.Navigator>
    
  </NavigationContainer>
  
   
 
  );
}
