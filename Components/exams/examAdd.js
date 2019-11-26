// this is the defualt adding page, when coming from dashboard view it loads the homework add version
import React, { Component } from "react";
import { Text, View, StyleSheet } from "react-native";

class quickAdd extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={{ color: "white" }}>examy boi</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#292C30"
  }
});

export default quickAdd;
