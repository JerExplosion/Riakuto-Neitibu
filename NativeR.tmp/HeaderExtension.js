         
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, StyleSheet} from 'react-native';


export function HeaderExtensionFunc({children, style, ...props}) {
  return <Text{...props} style = {[styles.textStyling, style]} >{children} </Text>;
} 

const styles = StyleSheet.create({ // command + k + c -> comment out a chunk of code 
  
  textStyling: {
      fontSize: 20,
      fontWeight: "bold",
      color: 'black'
  }
    ,
});
 