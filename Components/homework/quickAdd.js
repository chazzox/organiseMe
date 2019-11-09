import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet
} from 'react-native';

class quickAdd extends Component {
  render () {
    return (
      <View style={styles.container}>
        <Text>Quickly boi</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
  }
});

export default quickAdd;
