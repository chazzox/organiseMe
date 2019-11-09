import React, {Component} from 'react';
// importing elements needed to create structure of view
import {
  Text,
  View,
  Button
} from 'react-native';

// importing style sheet
import styles from './dashView.style';

class dashView extends Component {
  render () {
    return (
      <View style={styles.container}>
        <View style={styles.dashCont}>
          <Text style={styles.title}>Add new homework</Text>
          <Text style={styles.body}>Use this section to add your homework quickly!</Text>
          <Button style={styles.but} onPress={() => this.props.navigation.navigate("quickAdd")} title="Detail Page" />
        </View>
        <View style={styles.dashCont}>
          <Text style={styles.title}>bruh!</Text>
          <Text style={styles.body}>smaller bruh</Text>
          <Button style={styles.but} onPress={() => this.props.navigation.navigate("examAdd")} title="a" />
        </View>
      </View>
    );
  }
}

export default dashView;