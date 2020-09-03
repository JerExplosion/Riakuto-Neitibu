

import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export function ButNoonFunc({bTitle, bStyle, onPress}) {
  return (
      <TouchableOpacity style = {[bTitle, styles.container, bStyle]} onPress = {onPress}  >
       <Text style = {styles.textStyle}> {bTitle} </Text>
      </TouchableOpacity>

  )
} 

const styles = StyleSheet.create({
  container: {
    
    backgroundColor: 'black',
    width: "55%",
    alignItems: 'center', 
    justifyContent: 'center',
    padding: 9,
    borderRadius: 9
    
  },

  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 15
  }
});
