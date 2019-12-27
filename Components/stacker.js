import React from 'react';
import { StatusBar, View, TouchableOpacity } from 'react-native';
import {
    HeaderBackButton,
    createStackNavigator,
    HeaderStyleInterpolator
} from 'react-navigation';

import IOSIcon from 'react-native-vector-icons/Ionicons';
import Button from 'apsl-react-native-button';

// our modules (ie. views)
import dashView from './landing/dashView';
import homeworkMain from './homework/homework';
import addHW from './homework/addHW';
import examView from './exams/examView';
import examAdd from './exams/examAdd';

// essentially deals with header bar titles for each view
const stacker = createStackNavigator(
    {
        main: {
            screen: dashView,
            navigationOptions: {
                title: 'Dashboard'
            }
        },
        homeworkMain: {
            screen: homeworkMain,
            navigationOptions({ navigation }) {
                return {
                    title: 'Upcoming Homework...',
                    headerRight: (
                        <Button
                            onPress={() => {
                                navigation.navigate('addHW');
                            }}>
                            <IOSIcon
                                name='ios-add'
                                style={{ paddingRight: 15 }}
                                color='white'
                                size={30}
                            />
                        </Button>
                    )
                };
            }
        },
        addHW: {
            screen: addHW,
            navigationOptions({ navigation }) {
                return {
                    title: 'Add your homework',
                    headerLeft: (
                        <IOSIcon
                            name='ios-arrow-back'
                            onPress={() => {
                                try {
                                    navigation.goBack();
                                } catch (err) {
                                    alert('reeeeeeeeeeee');
                                }
                            }}
                            color='white'
                            size={30}
                            style={{ paddingLeft: 15 }}
                        />
                    )
                };
            }
        },
        examView: {
            screen: examView,
            navigationOptions({ navigation }) {
                return {
                    title: 'Your Exams for this Week',
                    headerRight: (
                        <Button
                            onPress={() => {
                                navigation.navigate('examAdd');
                            }}>
                            <IOSIcon
                                name='ios-add'
                                style={{ paddingRight: 15 }}
                                color='white'
                                size={30}
                            />
                        </Button>
                    )
                };
            }
        },
        examAdd: {
            screen: examAdd,
            navigationOptions({ navigation }) {
                return {
                    title: 'Add New Exams',
                    headerLeft: (
                        <IOSIcon
                            name='ios-arrow-back'
                            onPress={() => {
                                try {
                                    navigation.goBack();
                                } catch (err) {
                                    alert('reeeeeeeeeeee');
                                }
                            }}
                            color='white'
                            size={30}
                            style={{ paddingLeft: 15 }}
                        />
                    )
                };
            }
        }
    },
    {
        initialRouteName: 'main',
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
                <TouchableOpacity onPress={() => navigation.openDrawer()}>
                    <StatusBar barStyle='light-content' />
                    <View style={{ paddingLeft: 15 }}>
                        <IOSIcon name='ios-menu' size={30} color='white' />
                    </View>
                </TouchableOpacity>
            )
        })
    }
);

export default stacker;
