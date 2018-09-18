import React from 'react';
import { StyleSheet, Text, View ,Button,Image} from 'react-native'
import {Icon} from 'native-base'

export default class AddMediaTab extends React.Component { 
    static navigationOptions = {
        tabBarIcon : ({tintColor}) => (
            <Icon name="ios-add-circle" style={{ color: tintColor}} />
        ),
    }     
    render() {
        return (
            <Text>AddMedia Screen</Text>
        );
    }
}
