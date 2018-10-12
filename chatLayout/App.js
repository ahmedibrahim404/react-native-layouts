import React from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import Header from './Components/Header';
import Message from './Components/Message';
import InputMessage from './Components/InputMessage';

export default class App extends React.Component {

  render() {
    return (
      <View style={{ flex:1, flexDirection:'column' }}>
          <ScrollView>
            <Header/>
            <View>
              <Message time="Monday, 10:40 am" from={0} text="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore." />
              <Message time="Monday, 10:40 am" from={1} text="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore." />
              <Message time="Monday, 10:40 am" from={0} text="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore." />
              <Message time="Monday, 10:40 am" from={1} text="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore." />
              <Message time="Monday, 10:40 am" from={0} text="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore." />
              <Message time="Monday, 10:40 am" from={0} text="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore." />
              <Message time="Monday, 10:40 am" from={1} text="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore." />
              <Message time="Monday, 10:40 am" from={0} text="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore." />
              <Message time="Monday, 10:40 am" from={1} text="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore." />
              <Message time="Monday, 10:40 am" from={1} text="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore." />
            </View>
          </ScrollView>
          <InputMessage />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  box:{
    flex:1,
    padding:10
  }
});
