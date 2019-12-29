import React, { Component } from 'react';
import { FontAwesome } from 'react-native-vector-icons';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { Dimensions } from 'react-native';

// auth screens
import Login from './screens/login/Login';
import Signup from './screens/login/Signup';
import welcome from './screens/login/welcome';

// logged in screens
import DashView from './screens/dashView';
import SideMenu from './screens/main/sidebar/SideMenu';
import homeworkMain from './screens/main/homework/homework';
import addHW from './screens/main/homework/addHW';
import examView from './screens/main/exams/examView';
import examAdd from './screens/main/exams/examAdd';

export const createRootNavigator = (signedIn = false) => {
	return createStackNavigator(
		{
			loginStack: {
				screen: SignedIn,
				navigationOptions: {
					gesturesEnabled: false
				}
			},
			authStack: {
				screen: SignedOut,
				navigationOptions: {
					// we don't want our header to show on login
					header: null
				}
			}
		},
		{

			initialRouteName: signedIn ? 'loginStack' : 'authStack'
		}
	);
};

class Headers extends Component {
	render() {
		return (
			<Button onPress={this.props.nav}>
				<IOSIcon
					name={this.props.name}
					style={{ paddingRight: 15 }}
					color='white'
					size={30}
				/>
			</Button>
		);
	}
}

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
		},
		homeworkMain: {
			screen: homeworkMain,
			navigationOptions({ navigation }) {
				return {
					title: 'Upcoming Homework...',
					headerRight: (
						<Headers
							nav={() => {
								navigation.navigate('addHW');
							}}
							name='ios-add'
						/>
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
						<Headers
							nav={() => {
								try {
									navigation.goBack();
								} catch (err) {
									alert('reeeeeeeeeeee');
								}
							}}
							name='ios-arrow-back'
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
						<Headers
							nav={() => {
								navigation.navigate('examAdd');
							}}
							name='ios-add'
						/>
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
						<Headers
							nav={() => {
								try {
									navigation.goBack();
								} catch (err) {
									alert('reeeeeeeeeeee');
								}
							}}
							name='ios-arrow-back'
						/>
					)
				};
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
				headerMode: 'none'
			}
		);
