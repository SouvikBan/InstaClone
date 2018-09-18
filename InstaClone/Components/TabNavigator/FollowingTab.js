import React from 'react';
import { StyleSheet, Text, View ,Button,Image} from 'react-native'
import {Icon} from 'native-base'

export default class FollowingTab extends React.Component { 
    static navigationOptions = {
        tabBarIcon : ({tintColor}) => (
            <Icon name="md-heart" style={{ color: tintColor}} />
        )
    }     
    render() {
        return (
            <Text>Following Screen</Text>
        );
    }
}
