import React from 'react';
import { StatusBar, View, TouchableOpacity } from 'react-native';
import { HeaderBackButton, createStackNavigator, HeaderStyleInterpolator } from 'react-navigation';
import IOSIcon from 'react-native-vector-icons/Ionicons';
import Button from 'apsl-react-native-button';

// our modules (ie. views)
import dashView from './landing/dashView';
import homeworkMain from './homework/homework';
import quickAdd from './homework/quickAdd';
import SignIn from './signin/SignIn';

const checkUserExists = () => {
	if (true == true) {
		return 'Main';
	} else {
		return 'SignIn';
	}
};

// essentially deals with header bar titles for each view
const stacker = createStackNavigator(
	{
		Main: {
			screen: dashView,
			navigationOptions: {
				title: 'Dashboard'
			}
		},
		quickAdd: {
			screen: quickAdd,
			navigationOptions({ navigation }) {
				return {
					title: 'Add your homework',
					headerLeft: (
						<HeaderBackButton
							onPress={() => {
								try {
									navigation.goBack();
								} catch (err) {
									alert('reeeeeeeeeeee');
								}
							}}
							color='#fff'
						/>
					)
				};
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
								navigation.navigate('quickAdd');
							}}
						>
							<IOSIcon name="ios-add" color="white" size={45} />
						</Button>
					)
				};
			}
		},
		SignIn: SignIn
	},
	{
		initialRouteName: checkUserExists(),
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
					<StatusBar barStyle="light-content" />
					<View style={{ paddingLeft: 15 }}>
						<IOSIcon name="ios-menu" size={30} color="white" />
					</View>
				</TouchableOpacity>
			)
		})
	}
);

export default stacker;
