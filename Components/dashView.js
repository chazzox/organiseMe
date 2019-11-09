import React, {Component} from 'react';
// importing elements needed to create structure of view
import {
  Text,
  View,
  Button
} from 'react-native';

// importing style sheet
import styles from './styles/dashView.style';

class dashView extends Component {
  render () {
    return (
      <View style={styles.container}>
        <View style={styles.dashCont}>
          <Text style={styles.title}>bruh!</Text>
          <Text style={styles.body}>smaller bruh</Text>
          <Button style={styles.but} onPress={() => this.props.navigation.navigate("Detail")} title="Detail Page" />
        </View>
        <View style={styles.dashCont}>
          <Text style={styles.title}>bruh!</Text>
          <Text style={styles.body}>smaller bruh</Text>
          <Button style={styles.but} onPress={() => this.props.navigation.navigate("Detail")} title="a" />
        </View>
      </View>
    );
  }
}

export default dashView;