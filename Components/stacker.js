import React from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View, TouchableOpacity
} from 'react-native';

import { createStackNavigator } from  'react-navigation';
import IOSIcon from "react-native-vector-icons/Ionicons";
import dashView from "./dashView";
import quickAdd from "./homework/quickAdd";

// essentially deals with header bar titles for each view
const stackNav = createStackNavigator({
  Main : {
    screen: dashView,
    navigationOptions: ({navigation}) => ({
      // app title
      title: "yes",
      headerStyle:styles.head,
      headerTintColor: '#fff',
      headerLeft: (<TouchableOpacity onPress={() => navigation.openDrawer()}>
        <View style={{
          paddingLeft: 15
        }}>
          <IOSIcon
            name='ios-menu'
            size={30}
            color='white'
          />
        </View>
      </TouchableOpacity>
      ),
    })
  },
  Detail: {
    screen: quickAdd,
    navigationOptions: ({ navigation }) => ({
      title: "y",
      headerTintColor: '#fff',
      headerStyle: styles.head
    })
  }
});

const styles = StyleSheet.create({
  head: {
    backgroundColor: '#393e46'
  }
});

export default stackNav;