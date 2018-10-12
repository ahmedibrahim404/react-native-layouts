import React from 'react';
import { StyleSheet, Text, View, TouchableWithoutFeedback } from 'react-native';

export default class Header extends React.Component {
  render() {
    return (
        <View style={{ flex:2, flexDirection:'column', backgroundColor:'#2699FB' }}>
            <View style={{ flex:3, marginTop:45, justifyContent:'center' }}>
                <Text style={[styles.text, {fontSize:25}]}>Main Title</Text>
                <Text style={[styles.text, { fontSize:18, margin:20 }]}>Lorem dolor sit amet consectetur adipisicing elit, sed do.</Text>
            </View>
            <View style={{ flex:1, flexDirection:'row', alignItems:'flex-end' }}>
                <View style={{ flex:1 }}>
                    <TouchableWithoutFeedback onPress={this.props.onLoginClick}>
                        <View><Text style={[styles.text, { fontSize:23, marginBottom:11 }]}>Login</Text></View>
                    </TouchableWithoutFeedback>
                    {/* <View style={{ backgroundColor:'#000', height:2 }}></View> */}
                </View>

                <View style={{ flex:1 }}>
                    <TouchableWithoutFeedback onPress={this.props.onRegisterClick}>
                        <View><Text style={[styles.text, { fontSize:23, marginBottom:11 }]}>Register</Text></View>
                    </TouchableWithoutFeedback>
                    {/* <View style={{ backgroundColor:'#000', height:2 }}></View> */}
                </View>
            </View>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  text: { fontWeight:'bold', color:'#FFF', textAlign:'center' },
});
