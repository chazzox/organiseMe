import React from 'react';
import { Dimensions } from 'react-native';
import {
    createDrawerNavigator,
    createAppContainer
} from 'react-navigation';
import * as FileSystem from 'expo-file-system';

import SideMenu from './Components/sidebar/SideMenu';
import stacker from './Components/stacker'
import startUpStack from './Components/startup/startStack'

const App = createDrawerNavigator(
    {
        loginStack: { screen: stacker },
        startUpStack: {
            screen: startUpStack,
            navigationOptions: {
                drawerLockMode: 'locked-closed'
            }
        }
    },
    {
        initialRouteName: 'startUpStack',
        // Name of the sideview
        contentComponent: SideMenu,
        // This is the width of the sidebar
        drawerWidth: Dimensions.get('window').width - 180
    }
);

export default createAppContainer(App);
