import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Icon from '@expo/vector-icons/FontAwesome';

export default class Post extends React.Component {
    render() {
      return (
        <View style={{ flex:1, margin:5, padding:10 }}>
            <View style={{ flex:4, backgroundColor:'rgba(241,249,255,.6)', padding:15 }}>
                <View style={{ flex:1, flexDirection:'row', padding:10 }}>
                    <View style={{ flex:5, flexDirection:'row' ,justifyContent:'flex-start' }}>
                        <Icon name="user" size={25} color="#2699FB" />
                        <Text style={{ marginLeft:7, fontWeight:'bold', color:'#2699FB', fontSize:16, textAlign:'left' }}>@johndeo</Text>
                    </View>
                    <View style={{ flex:2, justifyContent:'flex-end' }}>
                        <Text style={{ color:'#2699FB', fontSize:12, bottom:5, marginRight:5, textAlign:'right'  }}>1hr ago</Text>
                    </View>
                </View>
                <View stlye={{ flex:3, }}>
                    <Text style={{ color:"#2699FB", fontSize:25, fontWeight:'bold' }}>Excepteur sint occaecat cupidatat.</Text>
                    <Text style={{ color:"#2699FB", fontSize:14 }}>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim.</Text>
                </View>
            </View>
            <View style={{ flex:1, backgroundColor:'rgba(241,249,255,.6)' }}>

            </View>
        </View>
      );
    }
}
  
  