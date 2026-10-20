import React, { Component } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

// Exercise 1 & 3: a function component named Welcome that accepts the props "code" and "name"
const Welcome = (props) => {
  return (
    <Text>
      Welcome to {props.code} - {props.name}
    </Text>
  );
};

// Exercise 2 & 3: a class component named ModuleInfo that lists my modules using Welcome
class ModuleInfo extends Component {
  render() {
    return (
      <View>
        <Text>These are my modules this semester:</Text>
        <Welcome code="C346" name="Mobile App Development" />
        <Welcome code="C105" name="Introduction to Programming" />
        <Welcome code="C337" name="Immersive Technologies" />
      </View>
    );
  }
}

export default function App() {
  return (
    <View style={styles.container}>
      <ModuleInfo />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 50, // keeps the text below the phone's status bar
  },
});
