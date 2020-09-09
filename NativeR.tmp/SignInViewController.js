

import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import { HeaderExtensionFunc } from './HeaderExtension';
import { InputerFunc } from './Inputer';
import { ButNoonFunc } from './ButNoon';
import { ErroFunc } from './Erro';
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'


export function SignInViewController({navigation}) {
  return (
    <View style={styles.container}>

         {/* <HeaderExtensionFunc> Signing In </HeaderExtensionFunc> */} 

        <ErroFunc error = {'Erro Tester'} />

        <InputerFunc style={styles.customizedInput} placeholder={'Username'} />
        <InputerFunc style={styles.customizedInput} placeholder={'Passcode'} secureTextEntry />

        <ButNoonFunc bTitle = {'Sign In'} bStyle = {styles.signInButton} 
        onPress = {() => {
            navigation.navigate('API');
          }}  
        />

    </View>
  );   
} 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 22,
    paddingTop: 67,
    alignItems: 'center',
  },
  customizedInput: {
      marginVertical: 12,
  },

  signInButton: {
    marginVertical: 17
  }
});

