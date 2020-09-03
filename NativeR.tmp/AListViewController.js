

import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { HeaderExtensionFunc } from './HeaderExtension';
import { InputerFunc } from './Inputer';
import { ButNoonFunc } from './ButNoon';
import { ErroFunc } from './Erro';

export function AListViewController() {
  return (
    <View style={styles.container}>

         {/* <HeaderExtensionFunc> Signing In </HeaderExtensionFunc> */} 

        <ButNoonFunc bTitle = {'Sign In'} bStyle = {styles.signInButton} onPress = {() => {}} />

    </View>
  );   
} 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 22,
    paddingTop: 137,
    alignItems: 'center',
  },
  customizedInput: {
      marginVertical: 12,
  },

  signInButton: {
    marginVertical: 17
  }
});
