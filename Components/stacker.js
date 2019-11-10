import React from 'react';
import {
  Platform,
  StyleSheet,
  StatusBar,
  Text,
  View, TouchableOpacity
} from 'react-native';
import { createStackNavigator } from  'react-navigation';
import IOSIcon from "react-native-vector-icons/Ionicons";

// our modules (ie. views)
import dashView from './landing/dashView';
import quickAdd from './homework/quickAdd';
import examAdd from './exams/examAdd'

// essentially deals with header bar titles for each view
const stacker = createStackNavigator({
  Main : {
    screen: dashView,
    navigationOptions: ({navigation}) => ({
      // app title
      title: "yes",
      headerStyle:styles.head,
      headerTintColor: '#fff',
      headerLeft: (
        <TouchableOpacity onPress={() => navigation.openDrawer()}>
          <StatusBar barStyle="light-content" />
          <View style={{paddingLeft: 15}}>
            <IOSIcon
            name='ios-menu'
            size={30}
            color='white'
            />
          </View>
        </TouchableOpacity>
      )
    })
  },
  quickAdd: {
    screen: quickAdd,
    navigationOptions: ({ navigation }) => ({
      title: "y",
      headerTintColor: '#fff',
      headerStyle: styles.head,
      headerLeft: (
        <TouchableOpacity onPress={() => navigation.openDrawer()}>
          <StatusBar barStyle="light-content" />
          <View style={{ paddingLeft: 15 }}>
            <IOSIcon
              name='ios-menu'
              size={30}
              color='white'
            />
          </View>
        </TouchableOpacity>
      )
    })
  },
  examAdd:{
    screen: examAdd,
    navigationOptions: ({ navigation }) => ({
      title: "y",
      headerTintColor: '#fff',
      headerStyle: styles.head
    })
  }
});

const styles = StyleSheet.create({
  head: {
    backgroundColor: 'black',
    borderBottomWidth: 0
  }
});

export default stacker;