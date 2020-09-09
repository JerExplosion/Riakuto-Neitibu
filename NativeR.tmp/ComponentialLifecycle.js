

import React from 'react'
import {View, Text, Button} from 'react-native'

class LoginComponent extends React.Component {

    constructor() {
        super()
        this.state = {
            data:""
        }
        console.warn('construtor')
    }

    componentDidMount() {
        console.warn('componentdidmount')
    }
    componentDidUpdate() {
        console.warn('componentDidUpdate')
    }

    render() {
        return (
            <View>
                <Text>Class exponents</Text>

                <Button title = "button title" onPress = {() => {this.setState({data: "this.setState"})}}/>

                <Button title="update " onPress = {()=>{this.setState({data:"update"})}}/>
            </View>
        )
    }
}

export default LoginComponent