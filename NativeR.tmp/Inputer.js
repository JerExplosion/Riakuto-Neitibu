



import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, StyleSheet,TextInput} from 'react-native';


export function InputerFunc({style, ...props}) {
  return <TextInput{...props} style = {[styles.inputa, style]} />
  

} 

const styles = StyleSheet.create({
  
  inputa: {
      width: "93%",
      backgroundColor: "#e8e8e8",
      padding: 15,
      borderRadius: 7
      
  },

}); 