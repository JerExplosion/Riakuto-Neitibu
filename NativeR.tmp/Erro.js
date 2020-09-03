


import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export function ErroFunc({erroMessage}) {
  return (

    <View style = { styles.container }>
  
       <Text style = {styles.styleOfText}> {erroMessage} </Text>

    </View>
  )
} 

const styles = StyleSheet.create({

  styleOfText: {
    color: 'red',
    fontWeight: 'bold',
    fontSize: 15
  },

  container: {
    paddingVertical: 10,
  }

});