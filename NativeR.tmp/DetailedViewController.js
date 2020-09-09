

import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { HeaderExtensionFunc } from './HeaderExtension';

export function DetailedViewController() {
  return (
    <View style={styles.container}>

      <Text>Detailed Screen</Text>

     <HeaderExtensionFunc> Signing In </HeaderExtensionFunc> 

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

  // ---------
  baseText: {
    fontFamily: "Cochin"
  },
  titleText: {
    fontSize: 20,
    fontWeight: "bold"
  }

});

// ------------ experimentations

// const onPressTitle = () => {
//   console.log("title pressed");
// };

// const TextInANest = () => {
//   const titleText = useState("Bird's Nest");
//   const bodyText = useState("This is not really a bird nest.");

//   return (
//     <Text style={styles.baseText}>
//       <Text style={styles.titleText} onPress={onPressTitle}>
//         {titleText}
//         {"\n"}
//         {"\n"}
//       </Text>
//       <Text numberOfLines={5}>{bodyText}</Text>
//     </Text>
//   );
// };


// export default TextInANest;
