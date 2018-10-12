import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Icon from '@expo/vector-icons/FontAwesome';

export default class Header extends React.Component {

    render(){
        return(
            <View style={{ flex:1 }}>
                <View style={{ flex:1, flexDirection:'row', marginTop:30, padding:10 }}>
                    <View style={{ flex:1, margin:2 }}>
                    {/* <Text style={{ textAlign:'center', color:'#EEE' }}>John Deo</Text> */}
                        <Icon name="backward" size={30} color="#2699FB" />
                    </View>
                    <View style={{ flex:5 }}>
                        <Text style={{ textAlign:'left', fontSize:25, color:'#2699FB', left:'25%' }}>John Deo</Text>
                    </View>
                </View>
                <View style={{borderBottomWidth:1, marginTop:10, borderBottomColor:'#999' }} />
            </View>
        )
    }

}

const styles = StyleSheet.create({
    box:{
      flex:1,
      padding:10
    }
  });
  