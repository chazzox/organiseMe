import React, {Component} from 'react';
// importing elements needed to create structure of view
import {
  Text,
  View,
  Button,
  ScrollView
} from 'react-native';
import { StackActions, NavigationActions } from 'react-navigation';

// importing style sheet
import styles from './dashView.style';

class dashView extends Component {
  render () {
    return (
      <View style={styles.ViewBox}>
          <ScrollView style={styles.ScrollView}>
          <View style={styles.container}>
            <View style={styles.dashCont}>
              <Text style={styles.title}>Add new homework</Text>
              <Text style={styles.body}>Use this section to add your homework quickly!</Text>
              <View style={styles.but}>
                <Button 
                  title="Quick Add" 
                  onPress={() =>
                    this.props.navigation.dispatch(StackActions.reset({
                      index: 0,
                      actions: [NavigationActions.navigate({ routeName: 'quickAdd' })],
                    }))
                  }
                />
              </View>
            </View>
            <View style={styles.dashCont}>
              <Text style={styles.title}>bruh!</Text>
              <Text style={styles.body}>smaller bruh</Text>
              <View style={styles.but}>
                <Button
                  title='homework boi'
                  onPress={() => 
                    this.props.navigation.dispatch(StackActions.reset({
                      index: 0,
                      actions: [NavigationActions.navigate({ routeName: 'homeworkMain' })],
                    }))
                  }
                />
              </View>
              </View>
            </View>
          </ScrollView>
        </View>
    );
  }
}

export default dashView;