// this is the defualt adding page, when coming from dashboard view it loads the homework add version
import React, {Component} from 'react';
import {
  Text,
  Button, 
  View,
  StyleSheet,
  TextInput
} from 'react-native';
import { StackActions, NavigationActions } from 'react-navigation';


class SignIn extends Component {
  render () {
    return (
      <View style={styles.container}>
        <Text>Quickly boi</Text>
        <Button
          title="add me"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#292C30'
  }
});

export default SignIn;
