// this is the defualt adding page, when coming from dashboard view it loads the homework add version
import React, {Component} from 'react';
import {
  Text,
  Button, 
  View,
  StyleSheet,
  TextInput,
  StatusBar
} from 'react-native';


class quickAdd extends Component {
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
  componentDidMount(){
    StatusBar.setHidden(true)
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

export default quickAdd;
