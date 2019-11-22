import React from 'react';
import {
  StatusBar,
  View, TouchableOpacity
} from 'react-native';
import {HeaderBackButton, createStackNavigator } from  'react-navigation';
import IOSIcon from "react-native-vector-icons/Ionicons";

// our modules (ie. views)
import dashView from './landing/dashView';
import homeworkMain from './homework/homework';
import quickAdd from './homework/quickAdd';
import examAdd from './exams/examAdd'

// essentially deals with header bar titles for each view
const stacker = createStackNavigator(
  {
  Main:{
    screen:dashView,
    navigationOptions:{
      title:'test'
    }
  },
  quickAdd:{
    screen: quickAdd,
    navigationOptions({ navigation }) {
      return {
        title: 'Screen Two',
        headerLeft: (
          <HeaderBackButton
            title="Custom"
            onPress={() => navigation.goBack()}
          />
        )
      }
    }
  },
  examAdd:examAdd,
  homeworkMain:homeworkMain,
  },
  {
    initialRouteName: 'Main',
    defaultNavigationOptions: ({ navigation }) => ({
      headerStyle: {
        backgroundColor: 'black',
        borderBottomWidth: 0
      },
      headerTintColor: 'white',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
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
        </TouchableOpacity>)
    }
    )
  }
);

export default stacker;