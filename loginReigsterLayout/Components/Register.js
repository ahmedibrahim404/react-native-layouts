import React from 'react';
import { StyleSheet, Text, View, TouchableWithoutFeedback } from 'react-native';
import { Button, Input } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class Register extends React.Component {
  render() {
    return (
        <View style={{ flex:1, marginTop:15, padding:20 }}>
            <Text style={ styles.text }>Register HERE!</Text>
            <View style={{ flex:1 }}>

                <View style={{ margin:5 }}>
                    <Input placeholder='Username'/>
                </View>
                <View style={{ margin:5 }}>                      
                    <Input secureTextEntry={true} placeholder='Password' />
                </View>
                <View style={{ margin:5 }}>                      
                    <Input placeholder='Email'/>
                </View>

            </View>
            <View style={{ flex:2 }}>
            <Button
                title='LOGIN'
                titleStyle={{ fontWeight: "700" }}
                buttonStyle={{
                  backgroundColor: "#2699FB",
                }}
                containerStyle={{ marginTop: 30 }}
                />
            </View>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  text: { fontWeight:'bold', color:'#2699FB', textAlign:'center', fontSize:25 },
});
