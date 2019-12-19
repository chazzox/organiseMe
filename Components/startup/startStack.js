import React from 'react';
import IOSIcon from 'react-native-vector-icons/Ionicons';
import { createStackNavigator } from 'react-navigation';
import { TouchableOpacity } from 'react-native';
import welcome from './components/welcome';
import register from './components/register';
import signIn from './components/signIn';

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
            screen: register
        },
        signIn: {
            screen: signIn
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
            },
            headerLeft: (
                <TouchableOpacity>
                    <IOSIcon
                        name="ios-arrow-back"
                        onPress={() => {
                            navigation.goBack();
                        }}
                        color="white"
                        size={30}
                        style={{ paddingLeft: 15 }}
                    />
                </TouchableOpacity>
            )
        })
    }
);

export default StartUpStack;
