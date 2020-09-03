

import React from 'react';
import {Image, StyleSheet,Text, View }from 'react-native';

const PersonalizedRow = ({descriptionText, titleText, imageURL}) => (

    <View style = { styles.container} >
        <Image source = {{uri: imageURL}} style = {styles.picStyle} />    
        <View style = {styles.containerTextStyle}>
            <Text style = {styles.titleStyle}>
                {titleText}
            </Text>
            <Text style = {styles.descriptionStyle}>
                {descriptionText}
            </Text>
        </View>
    </View>
);

export default PersonalizedRow;

const styles= StyleSheet.create({
    container: {
        flexDirection: 'row',
        flex: 1,
        padding: 12,
        marginBottom: 7,
        marginTop: 7,
        marginRight: 16,
        marginLeft: 16,
        elevation: 2,
        borderRadius: 6,
        backgroundColor: '#FFF',
    }, 
    titleStyle: {
        fontSize: 16,
        color: '#000'
    },
    containerTextStyle: {
        flexDirection: 'column',
        flex: 1,
        justifyContent: 'center',
        marginLeft: 13,
    },
    descriptionStyle: {
        fontStyle: 'italic',
        fontSize: 11,
    }, 
    picStyle: {
        height: 53,
        height: 53,
    },
});

