import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Icon from '@expo/vector-icons/FontAwesome';

export default class Header extends React.Component {
    render() {
      return (
        <View style={{ flex:1, flexDirection:'row', marginTop:25, padding:10 }}>
            <View style={{ flex:1, alignItems:'flex-start' }}>
                <Icon name="arrow-left" size={25} color="#2699FB" />
            </View>
            <View style={{ flex:5 }} >
                <Text style={{ textAlign:'center', fontSize:18, color:"#2699FB", fontWeight:'bold' }} >PROFILE</Text>
            </View>
            <View style={{ flex:1, alignItems:'flex-end' }}>
                <Icon name="list" size={25} color="#2699FB" />
            </View>
        </View>
      );
    }
}
  
  