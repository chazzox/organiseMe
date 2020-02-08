import React, { Component } from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { Dimensions, StatusBar, View, TouchableOpacity, Text } from 'react-native';
import IOSIcon from 'react-native-vector-icons/Ionicons';

// auth screens
import Login from './screens/login/Login';
import Signup from './screens/login/Signup';
import welcome from './screens/login/welcome';

// logged in screens
import DashView from './screens/dashMain';
import SideMenu from './screens/sidebar/SideMenu';

import homeworkMain from './screens/homework/homework';
import addHW from './screens/homework/addHW';
import homeworkView from './screens/homework/homeworkView';

import examMain from './screens/exams/examMain';
import examAdd from './screens/exams/examAdd';
import examView from './screens/exams/examView';

import subjectView from './screens/subjects/subjectView';
import subjectAdd from './screens/subjects/subjectAdd';
import subjectEdit from './screens/subjects/subjectEdit';

import settings from './screens/accSettings/settingsView';
export class Headers extends Component {
	render() {
		return (
			<TouchableOpacity onPress={this.props.nav}>
				<IOSIcon
					name={this.props.name}
					style={{ paddingRight: 15 }}
					color='white'
					size={30}
				/>
			</TouchableOpacity>
		);
	}
}

export const createRootNavigator = signedIn => {
	return createStackNavigator(
		{
			loginStack: {
				screen: SignedInDrawer,
				navigationOptions: {
					gesturesEnabled: false
				}
			},
			SignedOut: {
				screen: authStack
			}
		},
		{
			headerMode: 'none',
			initialRouteName: signedIn ? 'loginStack' : 'SignedOut'
		}
	);
};

const SignedInDrawer = createDrawerNavigator(
	{
		main: {
			screen: createStackNavigator(
				{
					Main: {
						screen: DashView,
						navigationOptions: {
							title: 'Dashboard'
						}
					},

					homeworkMain: {
						screen: homeworkMain,
						navigationOptions({ navigation }) {
							return {
								title: 'Upcoming Homework...',
								gesturesEnabled: false,
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
					homeworkView: {
						screen: homeworkView,
						navigationOptions({ navigation }) {
							return {
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

					examMain: {
						screen: examMain,
						navigationOptions({ navigation }) {
							return {
								title: 'Your Exams for this Week',
								gesturesEnabled: false,
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
					},
					examView: {
						screen: examView,
						navigationOptions({ navigation }) {
							return {
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

					subjectMain: {
						screen: subjectView,
						navigationOptions({ navigation }) {
							return {
								title: 'Your Subjects',
								gesturesEnabled: false,
								headerRight: (
									<Headers
										nav={() => {
											navigation.navigate('subjectAdd');
										}}
										name='ios-add'
									/>
								)
							};
						}
					},
					subjectAdd: {
						screen: subjectAdd,
						navigationOptions({ navigation }) {
							return {
								title: 'Add a new Subject',
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
					subjectEdit: {
						screen: subjectEdit,
						navigationOptions({ navigation }) {
							return {
								title: 'Edit Subject',
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

					settings: {
						screen: settings,
						navigationOptions({ navigation }) {
							return {
								title: 'Edit your settings here',
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
					initialRouteName: 'Main',
					defaultNavigationOptions({ navigation }) {
						return {
							headerStyle: {
								backgroundColor: 'black',
								borderBottomWidth: 0
							},
							headerTintColor: 'white',
							headerTitleStyle: {
								fontWeight: 'bold'
							},
							headerLeft: (
								<TouchableOpacity onPress={() => navigation.toggleDrawer()}>
									<StatusBar barStyle='light-content' />
									<View style={{ paddingLeft: 15 }}>
										<IOSIcon name='ios-menu' size={30} color='white' />
									</View>
								</TouchableOpacity>
							)
						};
					}
				}
			)
		}
	},
	{
		// Name of the sideview
		contentComponent: SideMenu,
		// This is the width of the sidebar
		drawerWidth: Dimensions.get('window').width - 180
	}
);

const authStack = createStackNavigator(
	{
		welcome: {
			screen: welcome,
			navigationOptions: {
				headerLeft: null
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
