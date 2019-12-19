import React from 'react';
import IOSIcon from 'react-native-vector-icons/Ionicons';
import { createStackNavigator } from 'react-navigation';

import welcome from './startup/welcome';
import register from './startup/register';
import signIn from './startup/signIn';

const StartUpStack = createStackNavigator(
    {
        welcome: {
            screen: welcome,
            navigationOptions({ navigation }) {
                return {
                    headerLeft: null
                };
            }
        },
        register: {
            screen: register,
            navigationOptions({ navigation }) {
                return {
                    headerLeft: (
                        <IOSIcon
                            name="ios-arrow-back"
                            onPress={() => {
                                navigation.goBack();
                            }}
                            color="white"
                            size={30}
                            style={{ paddingLeft: 15 }}
                        />
                    )
                };
            }
        },
        signIn: {
            screen: signIn,
            navigationOptions({ navigation }) {
                return {
                    headerLeft: (
                        <IOSIcon
                            name="ios-arrow-back"
                            onPress={() => {
                                navigation.goBack();
                            }}
                            color="white"
                            size={30}
                            style={{ paddingLeft: 15 }}
                        />
                    )
                };
            }
        }
    },
    {
        initialRouteName: 'welcome',
        defaultNavigationOptions: ({ navigation }) => ({
            headerStyle: {
                backgroundColor: 'black',
                borderBottomWidth: 0
            },
            headerTintColor: 'white',
            headerTitleStyle: {
                fontWeight: 'bold'
            }
        })
    }
);

export default StartUpStack;
