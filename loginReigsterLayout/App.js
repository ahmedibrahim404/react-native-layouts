import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './Components/Header';
import Login from './Components/Login'
import Register from './Components/Register';
export default class App extends React.Component {
  
  constructor(){
    super();
    this.state = {
        login:0,
    }
  }

  onLogin(){
    console.log("!")
      this.setState({
          login:0,
      })
  }

  onRegister(){
      this.setState({
          login:1
      })
  }

  render() {
    return (
      <View style= {{ flex:1 }}>
        <Header onLoginClick={() => this.onLogin()} onRegisterClick={() => this.onRegister()} />
        <View style={{ flex:3 }}>
          { this.state.login == 0 ? <Login /> : <Register /> }
        </View>
      </View>
    );
  }
}

