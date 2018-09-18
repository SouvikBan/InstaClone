import React from 'react';
import { StyleSheet, Text, View ,Button,Image} from 'react-native'
import {Icon} from 'native-base'

export default class SearchTab extends React.Component { 
    static navigationOptions = {
        tabBarIcon : ({tintColor}) => (
            <Icon name="search" style={{ color: tintColor}} />
        )
    }     
    render() {
        return (
            <Text>Search Screen</Text>
        );
    }
}
