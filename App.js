import React, { Component } from 'react';
import {
	createDrawerNavigator,
	createAppContainer,
	createStackNavigator
} from 'react-navigation';
import { Provider } from 'react-redux';
import { Dimensions, View, AppRegistry } from 'react-native';

import store from './Components/auth/store';

import { UserSigned } from './Components/auth/storage';
import startUpStack from './Components/startup/startStack';
import SideMenu from './Components/sidebar/SideMenu';
import stacker from './Components/stacker';

async function getUserState() {
	const value = await UserSigned();
	return value;
}

const AppClass = (props) => createDrawerNavigator(
	{
		startUpStack: {
			screen: startUpStack,
			navigationOptions: {
				drawerLockMode: 'locked-closed'
			}
		},
		loginStack: { screen: stacker }
	},
	{
		initialRouteName: getUserState() ? 'startUpStack' : 'loginStack',
		// Name of the sideview
		contentComponent: SideMenu,
		// This is the width of the sidebar
		drawerWidth: Dimensions.get('window').width - 180
	}
);

class MyApp extends Component {
	render() {
		return (
			<Provider store={store}>
				<AppClass navigation={this.props.navigation} />
			</Provider>
		);
	}
}

export default AppRegistry.registerComponent(MyApp);
