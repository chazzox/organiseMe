import React, { Component } from 'react';
import {Text, View, StyleSheet} from 'react-native';

export default class bigre extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image style={{ width: 40, height: 40 }} source={require('assets/img/navbar.png')} />
        <Text style={styles.Text}>
          Ketan
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    position: 'absolute',
    left: 0,
    top: 0,
    backgroundColor: '#222', 
    width: "100%"
  },
  Text:{
    paddingTop: 25,
    paddingBottom:10,
    paddingLeft: 15,
    alignSelf: 'flex-start',
    color:"white",
    fontSize: 25
  }
})