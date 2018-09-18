import React from 'react';
import { StyleSheet, Text, View ,Button,Image} from 'react-native'
import { createStackNavigator,createBottomTabNavigator } from 'react-navigation'
import MainScreen from './Components/MainScreen'
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import allReducers from './Reducers/CombineReducers'

const store=createStore(allReducers);

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <AppStackNavigation/>
      </Provider>
      
    );
  }
}

const AppStackNavigation = createStackNavigator({
  Main:MainScreen,

});

/*const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});*/
