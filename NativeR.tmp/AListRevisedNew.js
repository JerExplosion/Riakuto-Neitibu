

import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { HeaderExtensionFunc } from './HeaderExtension';
import { InputerFunc } from './Inputer';
import { ButNoonFunc } from './ButNoon';
import { ErroFunc } from './Erro';
import PersonalizedFlatListView from './PersonalizedFlatListView';


export default class App extends Component {

  getData() {
    return [
      {
        key: 1, title: 'Albert Einstein',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore',
        image_url: 'http://vivirtupasion.com/wp-content/uploads/2016/05/DANI_PERFILzoomCircle.png'
      },
      {
        key: 2,
        title: 'Isaac newton',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore',
        image_url: 'http://3.bp.blogspot.com/-jd5x3rFRLJc/VngrSWSHcjI/AAAAAAAAGJ4/ORPqZNDpQoY/s1600/Profile%2Bcircle.png'
      },
      {
        key: 1, title: 'Albert Einstein',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore',
        image_url: 'http://vivirtupasion.com/wp-content/uploads/2016/05/DANI_PERFILzoomCircle.png'
      },
      {
        key: 2,
        title: 'Isaac newton',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore',
        image_url: 'http://3.bp.blogspot.com/-jd5x3rFRLJc/VngrSWSHcjI/AAAAAAAAGJ4/ORPqZNDpQoY/s1600/Profile%2Bcircle.png'
      },
      {
        key: 1, title: 'Albert Einstein',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore',
        image_url: 'http://vivirtupasion.com/wp-content/uploads/2016/05/DANI_PERFILzoomCircle.png'
      },

    ]
  }

  render() {
    return (
      <View style={styles.container}>  
        <PersonalizedFlatListView
          listOfItems = {this.getData()}
        />
      </View>
    );
  }
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
//         listOfItems = {

//         }
      
//       />

//          {/* <HeaderExtensionFunc> Signing In </HeaderExtensionFunc> */} 

//         {/* <ButNoonFunc bTitle = {'Sign In'} bStyle = {styles.signInButton} onPress = {() => {}} /> */}

//     </View>
//   );   
// } 