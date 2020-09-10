

import React from 'react'
import {useState} from 'react'
// import {FlatList, TextInput, Text, StyleSheet, View, TouchableOpacity} from 'react-native'
import {ScrollView, StyleSheet, View, TouchableOpacity, TextInput, Text, FlatList} from 'react-native'

const RestaurSearchViewController = ({navigation}) => {

   // const [searchApi, results, errorMessage] = useResults();
    // const [term, setTerm] = useState('')

    // const filterResultsByPrice = (price) =>{
    //     // price === $ || $$ || $$$
    //     return results.filter(results => {
    //         return results.price === price;
    //     })
    // }

    return (
        <View style = {{flex : 1}}>

            <ScrollView>

            <FilteredList  title='Cost Effective' navigation={navigation}/>
            <FilteredList  title='Bit Pricer' navigation={navigation}/>
            <FilteredList title='Big Spender' navigation={navigation}/>

            </ScrollView>

        </View>
    )
}

const styles = StyleSheet.create({
    title:{
        fontSize: 17,
        fontWeight: "bold",
        marginLeft: 17,
        marginBottom: 6
    },
    container:{
        marginBottom: 17
    }
})


export const FilteredList = ({title, results, navigation}) =>{

    // if (!results.length) {
    //     return null;
    // }
    
    return(
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            <FlatList 
            horizontal
            showsHorizontalScrollIndicator = { false }
            data={results}
            keyExtractor={(results) => results.id}
            renderItem={({item}) => {
                return (
                    <TouchableOpacity onPress={() =>navigation.navigate('?_?', {id: item.id})}>
                        <ResultDetail result={item}/>
                    </TouchableOpacity>
                )
            }}
            >
            </FlatList>
        </View>
    )
}

export default RestaurSearchViewController;