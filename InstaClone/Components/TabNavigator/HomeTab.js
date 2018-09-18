import React from 'react';
import {StyleSheet, Text, View ,FlatList,Image} from 'react-native'
import {ListItem} from 'react-native-elements'
import {connect} from 'react-redux'
import {Button,Icon} from 'native-base'

class HomeTab extends React.Component {
  static navigationOptions = {
    tabBarIcon : ({tintColor}) => (
        <Icon name="ios-home" style={{ color: tintColor}} />
    )
  }     
  render() {
    this.props.Posts.map(item =>console.log(item.UserName));
    return (
      <FlatList data={this.props.Posts} renderItem={({item})=>
      <View>
        <View>
         <ListItem key={item.id} leftAvatar={{ rounded: true, source: { uri: item.Avatar_Url } }} title={item.UserName} />
        </View>
        <View>
          <Image source={{uri:item.Photos[0].Url}} style={{width:'100%', height:275}} />
        </View>
        <View>
        <Button iconLeft transparent primary>
          <Icon name='md-heart' style={{color:"red",marginLeft:5}}/>
        </Button>
        <Text style={{marginLeft:5}}>{item.No_likes}</Text>
        </View>
      </View>
      }
      keyExtractor={(item) => item.Post_id.toString()} />
    );
  }
} 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#999',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const mapStateToProps = state => {
  return{
    Posts:state.posts
  }
}

export default connect(mapStateToProps)(HomeTab)

