import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import Header from './Components/Header';
import ProfileInt from './Components/ProfileInf';
import Post from './Components/Post';

export default class App extends React.Component {
  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
          <Header />
          <ProfileInt />
          <View style= {{ flex:1 }} >
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
          </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  }
});
