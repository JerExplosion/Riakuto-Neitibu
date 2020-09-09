


import { StatusBar } from 'expo-status-bar';
import React from 'react';

import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import { StyleSheet, Text, View } from 'react-native';
import { SignInViewController } from './SignInViewController';
import { AuthoStackNavigatorFunc } from './AuthoStackNavigator';


const RootedStack = createStackNavigator();

export default function App() {
  return (
  // <SignInViewController />

   <NavigationContainer>

      <RootedStack.Navigator screenOptions = {
        {headerShown: false}
      } >
       
       <RootedStack.Screen name = {'AuthoStack'} component = {AuthoStackNavigatorFunc} />
 
      </RootedStack.Navigator>

   </NavigationContainer>
  );
} 

 


