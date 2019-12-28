import React from 'react';
import IOSIcon from 'react-native-vector-icons/Ionicons';
import { TabBarBottom } from 'react-navigation';
import { FontAwesome } from 'react-native-vector-icons';
import { createStackNavigator } from 'react-navigation-stack';
import { TouchableOpacity } from 'react-native';

import Login from './screens/login/Login';
import Signup from './screens/login/Signup';
import Main from './screens/Main';
import welcome from './screens/login/welcome';

export const createRootNavigator = (signedIn = false) => {
	return createStackNavigator(
		{
			SignedIn: {
				screen: SignedIn,
				navigationOptions: {
					gesturesEnabled: false
				}
			},
			SignedOut: {
				screen: SignedOut,
				navigationOptions: {
					gesturesEnabled: false
				}
			}
		},
		{
			mode: 'modal',
			headerMode: 'none',
			initialRouteName: signedIn ? 'SignedIn' : 'SignedOut'
		}
	);
};
export const SignedIn = createStackNavigator(
	{
		Main: {
			screen: Main,
			navigationOptions: {
				tabBarLabel: 'Main',
				tabBarIcon: ({ tintColor }) => (
					<FontAwesome name='home' size={30} color={tintColor} />
				)
			}
		}
	},
	{
		tabBarOptions: {
			activeTintColor: 'red',
			inactiveTintColor: 'gray',
			labelStyle: {
				fontSize: 13
			}
		},
		tabBarComponent: TabBarBottom,
		tabBarPosition: 'bottom',
		animationEnabled: false,
		swipeEnabled: false
	}
);
export const SignedOut = createStackNavigator(
	{
		welcome: {
			screen: welcome,
			navigationOptions({ navigation }) {
				return {
					headerLeft: null
				};
			}
		},
		Login: {
			screen: Login,
			navigationOptions: {
				title: 'Login'
			}
		},
		Signup: {
			screen: Signup,
			navigationOptions: {
				title: 'Sign Up'
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
			},
		})
	}
);
