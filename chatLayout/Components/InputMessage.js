import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import Icon from '@expo/vector-icons/FontAwesome';

export default class InputMessage extends React.Component {

    constructor(){
        super();
        this.state = {
            text:''
        }
    }

    render(){

        return(
            <View style= {{ flex:2, flexDirection:'row', justifyContent:'flex-end', padding:25, marginBottom:20  }}>
                <View style={{ flex:1, alignItems:'flex-start', top:5 }}>
                    <Icon name="image" size={20} color="#2699FB" />
                </View>

                <View style={{ flex:10 }}>
                    <TextInput
                        style={{height: 40}}
                        onChangeText={(text) => this.setState({text})}
                        value={this.state.text}
                        placeholder="Enter Message"
                    />
                </View>

                <View style={{ flex:1, alignItems:'flex-end', top:5 }}>
                    <Icon name="send" size={20} color="#2699FB" style={{ textAlign:'left' }} />
                </View>
                
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
  