// this is the defualt adding page, when coming from dashboard view it loads the homework add version
import React, {Component} from 'react';
import {
  Text,
  Button, 
  View,
  StyleSheet
} from 'react-native';
import { StackActions, NavigationActions } from 'react-navigation';


class quickAdd extends Component {
  render () {
    return (
      <View style={styles.container}>
        <Text>Quickly boi</Text>
        <Button
          title="add me"
          onPress={() =>{
            this.props.navigation.dispatch(StackActions.reset({
              index: 0,
              actions: [NavigationActions.navigate({ routeName:'quickAdd'})],
            }))
            console.log('ree')}}
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
    backgroundColor: '#313131'
  }
});

export default quickAdd;
