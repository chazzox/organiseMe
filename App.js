import React, { Component } from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';

export default class bigre extends Component {
  render() {
    return (
      <View style={styles.outer}>
        <View style={styles.head}>
          <Text style={styles.Text}>Ketan</Text>
        </View>
        <View style={styles.lowerCont}>
            <View style={styles.dashCont}>
              <Text style={styles.title}>bruh!</Text>
              <Text style={styles.body}>smaller bruh</Text>
            </View>
          <View style={styles.dashCont}>
            <Text style={styles.title}>bruh!</Text>
            <Text style={styles.body}>smaller bruh</Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  outer:{
    backgroundColor: '#f7f7f7',
    height: "100%",
    width:"100%"
  },
  head:{
    paddingTop: 20,
    backgroundColor: "#393e46",
    position: 'absolute',
    width: "100%",
    left: 0,
    top: 0,
    flexDirection: "row"
  },
  lowerCont:{
    marginTop: 75,
    display: "flex",
    alignItems: "center",
  },
  dashCont:{
    marginBottom: 30,
    backgroundColor: "#eeeeee",
    padding:15, 
    height: "30`%",
    width: "80%",
    borderRadius: 15,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.39,
    shadowRadius: 8.30,
    elevation: 13
  },
  title:{
    fontWeight: "Bold"
  }
})
