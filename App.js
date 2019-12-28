import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import loggerMiddleware from 'redux-logger';
import thunkMiddleware from 'redux-thunk';

import currentUser from './components/redux/reducer';
import { isSignedIn } from './components/auth/memory';
import { createRootNavigator } from './components/router';
import { createAppContainer } from 'react-navigation';

export default class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			signedIn: false,
			checkedSignIn: false
		};
	}

	componentDidMount() {
		isSignedIn()
			.then(res =>
				this.setState({
					signedIn: res,
					checkedSignIn: true
				})
			)
			.catch(error => console.error(error));
	}
	render() {
		const { checkedSignIn, signedIn } = this.state;
		if (!checkedSignIn) {
			return null;
		}
		const Layout = createAppContainer(createRootNavigator(signedIn));
		return (
			<Provider
				store={createStore(
					currentUser,
					applyMiddleware(thunkMiddleware, loggerMiddleware)
				)}>
				<Layout />
			</Provider>
		);
	}
}
