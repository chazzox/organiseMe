// this is the defualt adding page, when coming from dashboard view it loads the homework add version
import React, { Component } from "react";
import { Text, Button, View, StyleSheet, TouchableOpacity } from "react-native";
import { StackActions, NavigationActions } from "react-navigation";

class register extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity>
          <Text style={[styles.titleText, { marginTop: 40, marginBottom: 80 }]}>
            Register
          </Text>
        </TouchableOpacity>
        <Text style={styles.titleText}>Email</Text>
        <Text style={styles.titleText}>password</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#292C30"
  },
  titleText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 50
  }
});

export default register;
