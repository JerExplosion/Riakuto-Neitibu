

import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import { StyleSheet, Text, View } from 'react-native';
import { SignInViewController } from './InSign';
import { AListViewController } from './AListViewController'
import { DetailedViewController } from './DetailedViewController'

const AuthoStack = createStackNavigator();

export function AuthoStackNavigatorFunc() {
  return (

      <AuthoStack.Navigator screenOptions = {
        {headerShown: true}
      }>
       
      <AuthoStack.Screen name = {'Bar'} component = {SignInViewController} />
       <AuthoStack.Screen name = {'Articles'} component = {AListViewController} />
       {/* <AuthoStack.Screen name = {'DetailedScreen'} component = {DetailedViewController} /> */}

      </AuthoStack.Navigator>

  );
} 

 


