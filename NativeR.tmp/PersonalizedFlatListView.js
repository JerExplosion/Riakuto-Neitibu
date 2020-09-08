
import React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import PersonalizedRow from './PersonalizedRow';

const PersonalizedFlatListView = ( {listOfItems} ) => (
   <View style = { styles.containerStyle}>
       <FlatList 
       data = { listOfItems }
       renderItem = { ({listOfItems}) => 
       <PersonalizedRow
        titleText = {listOfItems.titleText}
        descriptionText = {listOfItems.descriptionText}
        imageURL = {listOfItems.imageURL}
       />}
    />
   </View>
);

const styles = StyleSheet.create({
    containerStyle: {
        flex: 1,
    },
});

export default PersonalizedFlatListView;
