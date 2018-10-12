import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class Message extends React.Component {

    render(){
        return(
            <View>
                <Text style={{ color:'#2699FB', textAlign:'center', marginTop:10 }}>{this.props.time}</Text>
                <View style={[styles.messageContainer, this.props.from == 0 ? { marginLeft:'auto', backgroundColor:'#2699FB' } : null]}>
                    <Text style={[styles.messageText, this.props.from == 0 ? { color:'#FFF' } : { color:'#2699FB' }]}>{this.props.text}</Text>
                </View>
            </View>
        )
    }

}

const styles = StyleSheet.create({
    messageContainer:{
        backgroundColor:'#F1F9FF',
        padding:8,
        width:300,
        alignItems:'flex-end',
        margin:15,
        borderRadius:8,
        // marginLeft:'auto'
    },
    messageText:{
    //   color:'#FFF',
        margin:10,
        fontSize:16,
    }
});
  