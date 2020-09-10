

import React from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native';
import { ButNoonFunc } from './ButNoon';

class FetcherViewController extends React.Component {

    constructor() {
        super();
        this.state = {
            data: []
        }
    }

    componentDidMount() {
        this.apiFetcher()
    }

    async apiFetcher() {
        let resp = await fetch('https://facebook.github.io/react-native/movies.json')
        let respJSON = await resp.json()
        console.warn(respJSON)
        this.setState({data: respJSON.movies})
    }
                        
    render() {
        return(
            <View style = {styles.container}>
  
                <FlatList 
                ItemSeparatorComponent = {this.FlatItemSeparator} //why ain't this working though?
                
                data = {this.state.data}
                renderItem = { ({item}) => <Text style = {styles.flatTextStyle}> 
                {item.title} {'('}{item.releaseYear}{')'} </Text>}
                />
                
            </View>
        )
    }
}

const Item = ({title}) => (
    <View style = {styles.itemStyle}>
      <Text style = {styles.titleStyle}>{title}</Text>
    </View>
);

const FlatItemSeparator = () => {
    return (
      <View
        style={{
          height: 1,
          width: "100%",
          backgroundColor: "#000",
        }}
      />
    );
  }

// function Item({ title }) {
//     return (
//       <View style={styles.item}>
//         <Text style={styles.title}>{title}</Text>
//       </View>
//     );
//   }

export default FetcherViewController;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: 25,
      justifyContent: 'center',
      alignContent: 'center',
      alignItems: 'center',
      backgroundColor: '#fff',
    },
    customizedButton: {
        marginVertical: 17
    },

    flatTextStyle: {
        margin: 25, 
        color: 'skyblue',
        fontWeight: 'bold',
        fontSize: 20,
    },

    itemStyle: {
        backgroundColor: '#B9F1EF',
        padding: 22,
        marginVertical: 7,
        marginHorizontal: 15,
        borderRadius: 17,
    },
    titleStyle: {
        fontSize: 18,
        fontWeight: 'bold'
    },
});


                {/* <ButNoonFunc bTitle = {'Noon'} bStyle = {styles.customizedButton} 
                    onPress = {() => {
                        
                }}  
                /> */}





    // item: {
    //   backgroundColor: '#f9c2ff',
    //   padding: 20,
    //   marginVertical: 8,
    //   marginHorizontal: 16,
    // },
    // title: {
    //   fontSize: 32,
    // },


// const styles = StyleSheet.create({
//     container: {
//         flexDirection: 'row',
//         flex: 1,
//         padding: 12,
//         marginBottom: 7,
//         marginTop: 7,
//         marginRight: 16,
//         marginLeft: 16,
//         elevation: 2,
//         borderRadius: 6,
//         backgroundColor: '#FFF',
//     }, 
//     titleStyle: {
//         fontSize: 16,
//         color: '#000'
//     },
//     containerTextStyle: {
//         flexDirection: 'column',
//         flex: 1,
//         justifyContent: 'center',
//         marginLeft: 13,
//     },
//     descriptionStyle: {
//         fontStyle: 'italic',
//         fontSize: 11,
//     }, 
//     picStyle: {
//         height: 53,
//         height: 53,
//     },
// });