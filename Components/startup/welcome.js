// this is the defualt adding page, when coming from dashboard view it loads the homework add version
import React, { Component } from "react";
import {
  Text,
  Button,
  View,
  StyleSheet,
  TouchableOpacity,
  TextInput
} from "react-native";

class welcome extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={[styles.titleText, { marginTop: 40 }]}>Welcome</Text>
        <TouchableOpacity
          onPress={() => {
            this.props.navigation.navigate("signIn");
          }}
        >
          <Text style={styles.titleText}>Sign In</Text>
		  
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            this.props.navigation.navigate("register");
          }}
        >
          <Text style={styles.titleText}>Register</Text>
        </TouchableOpacity>
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
    fontSize: 60,
    marginBottom: 80
  }
});

export default welcome;
