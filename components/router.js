import React from 'react';
import { FontAwesome } from 'react-native-vector-icons';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { Dimensions } from 'react-native';

import Login from './screens/login/Login';
import Signup from './screens/login/Signup';
import welcome from './screens/login/welcome';
import DashView from './screens/dashView';
import SideMenu from './screens/main/sidebar/SideMenu';

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
					gesturesEnabled: false,
					headerVisible: false
				}
			}
		},
		{
			headerMode: 'none',
			initialRouteName: signedIn ? 'SignedIn' : 'SignedOut'
		}
	);
};

export const SignedIn = createDrawerNavigator(
	{
		Main: {
			screen: DashView,
			navigationOptions: {
				tabBarLabel: 'Main',
				tabBarIcon: ({ tintColor }) => (
					<FontAwesome name='home' size={30} color={tintColor} />
				)
			}
		}
	},
	{
		// Name of the sideview
		contentComponent: SideMenu,
		// This is the width of the sidebar
		drawerWidth: Dimensions.get('window').width - 180
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
			}
		})
	}
);
