import React from 'react';
import { StyleSheet, Text, View ,Image,Platform} from 'react-native'
import {Icon,Button} from 'native-base'
import { createBottomTabNavigator } from 'react-navigation'
import HomeTab from './TabNavigator/HomeTab'
import ProfileTab from './TabNavigator/ProfileTab'
import SearchTab from './TabNavigator/SearchTab'
import FollowingTab from './TabNavigator/FollowingTab'
import AddMediaTab from './TabNavigator/AddMediaTab'

export default class MainScreen extends React.Component {
    
    static navigationOptions = {
        headerLeft:<Icon name="ios-camera-outline" style={{ paddingLeft:10 }} />,
        title:"Instaclone",
        headerTitleStyle:{fontStyle:'italic'},
        headerRight:<Icon name="ios-send-outline" style={{ paddingRight:10 }} />
    }   
    render() {
        return (
            <AppTabNavigator />
        );
    }
}

const AppTabNavigator = createBottomTabNavigator({
    HomeTab:{ screen: HomeTab},
    SearchTab:{ screen: SearchTab},
    AddMediaTab:{ screen: AddMediaTab},
    FollowingTab:{ screen: FollowingTab},
    ProfileTab:{ screen: ProfileTab }
  
  },{
      animationEnabled:true,
      swipeEnabled:true,
      tabBarPosition:"bottom",
      tabBarOptions:{
          style:{
              ...Platform.select({
                  android:{
                      backgroundColor:'white'
                  }
              })
          },
          activeTintColor:'#000',
          inactiveTintColor:'#d1cece',
          showLabel:false,
          showIcon:true
      }
  })
  