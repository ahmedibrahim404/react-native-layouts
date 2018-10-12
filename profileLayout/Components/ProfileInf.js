import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';
import Icon from '@expo/vector-icons/FontAwesome'

export default class ProfileInf extends React.Component {
    render() {
      return (
        <View style={{ flex:1, padding:15 }}>
            <View style={{ alignItems:'center', justifyContent:'flex-start' }}>
                <Icon name="user" size={45} color="#2699FB" />
                <Text style={{ fontSize:25, textAlign:'center', color:'#2699FB', fontWeight:'bold' }}>John Deo</Text>
                <Text style={{ fontSize:12, textAlign:'center', color:'#2699FB' }}>San Francisco, CA</Text>
            </View>
            <View style={{ flex:1 }}>
                <Text style={{ color:'#2699FB', margin:15, textAlign:'center' }}>
                Hi! My name is John, I’m a creative geek from San Francisco, CA. Contact me at john@mail.com
                </Text>
                <View style={{ flex:1, flexDirection:'row', paddingLeft:15, paddingRight:10,  }}>
                    <TouchableHighlight style={{ flex:1, margin:5 }}>
                        <Text style= {{ textAlign:'center', backgroundColor:'#2699FB', padding:10, color:'#FFF', borderWidth:1, borderColor:'#2699FB', borderRadius:5 }}>FOLLOW</Text>
                    </TouchableHighlight>
                    <TouchableHighlight style={{ flex:1, margin:5 }}>
                        <Text style= {{ textAlign:'center', backgroundColor:'#FFF', padding:10, color:'#2699FB', borderWidth:1, borderColor:'#2699FB', borderRadius:5 }}>MESSAGE</Text>
                    </TouchableHighlight>
                </View>
            </View>
        </View>
      );
    }
}
  
  