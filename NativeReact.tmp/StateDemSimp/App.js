import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';


export default function App() {

  const [counter, setCounter] = useState(0)
  const [textIchi, settingTextIchi] = useState(null)
  const [textNi, settingTextNi] = useState("")

  return (
    <View style={styles.container}>

    <Button style = {styles.increase} title = "Increase"  onPress = {() => {
          console.log(counter);
          setCounter(counter + 1)
      }}/>

      <Button style = {styles.decrease} title = "Decrease"  onPress = {() => {
          console.log(counter);
          setCounter(counter - 1)
      }}/>

      <Button style = {styles.increase} title = "Randomize"  onPress = {() => {
          
        setCounter(Math.floor(Math.random()*1000));
        console.log(counter)
      }}/>

      <Text>Random number is {counter} </Text>

      <StatusBar style="auto" />
    </View>
  );
}


const styles = StyleSheet.create({
  // '#08C9F0' '#ffcff1' '#e91e63'
  increase: {
    color: '#000', 
  },
  decrease: {
    color: '#000',
    padding: 200,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
