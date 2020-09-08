

// import { StatusBar } from 'expo-status-bar';
// import React from 'react';
// import { StyleSheet, Text, View } from 'react-native';
// import { HeaderExtensionFunc } from './HeaderExtension';
// import { InputerFunc } from './Inputer';
// import { ButNoonFunc } from './ButNoon';
// import { ErroFunc } from './Erro';

// export function AListViewController() {
//   return (
//     <View style={styles.container}>

//          {/* <HeaderExtensionFunc> Signing In </HeaderExtensionFunc> */} 

//         <ButNoonFunc bTitle = {'Sign In'} bStyle = {styles.signInButton} onPress = {() => {}} />

//     </View>
//   );   
// } 

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 22,
//     paddingTop: 137,
//     alignItems: 'center',
//   },
//   customizedInput: {
//       marginVertical: 12,
//   },

//   signInButton: {
//     marginVertical: 17
//   }
// });

import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { HeaderExtensionFunc } from './HeaderExtension';
import { InputerFunc } from './Inputer';
import { ButNoonFunc } from './ButNoon';
import { ErroFunc } from './Erro';
import PersonalizedFlatListView from './PersonalizedFlatListView';


export function AListViewController() {
  return(
    <View style = {styles.container}>

      <PersonalizedFlatListView 
        listOfItems = {
          {DATA}
        }
        keyExtractor = {(DATA) => DATA.keyyy}
      />  

      <FlatList
        keyExtractor = {(DATA) => DATA.keyyy}
        data = {DATA}
        renderItem = { ({item}) => (
          <Text>{item.descriptionText}</Text>
        )}
      />
    </View>
  )
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

// export function AListViewController() {
//   return (
//     <View style={styles.container}>

//       <PersonalizedFlatListView
//         listOfItems={
//           { DATA }
//         }
//         keyExtractor = {DATA.keyExtractor}
//       />

//     </View>
//   );
// }

const DATA = [
  {
    titleText: "Tittle",
    descriptionText: "one",
    imageURL: "http://vivirtupasion.com/wp-content/uploads/2016/05/DANI_PERFILzoomCircle.png",
    keyyy: "key1",
  },
  {
    titleText: "Tittle Two",
    descriptionText: "two",
    imageURL: "http://vivirtupasion.com/wp-content/uploads/2016/05/DANI_PERFILzoomCircle.png",
    keyyy: "key2",
  },
];