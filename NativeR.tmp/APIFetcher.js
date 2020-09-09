

import React from 'react';
import {View, Text, FlatList} from 'react-native';

class App extends React.Component {

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
            <View>
                <Text style = {{fontSize = 100}}> API Caller </Text>

                <FlatList data = {this.state.data}
                renderItem = { ({item}) => <Text> {item.title} </Text>}
                />

            </View>
        )
    }
}

export default App;