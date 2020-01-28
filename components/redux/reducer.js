import axios from 'axios';
import { StackActions, NavigationActions } from 'react-navigation';

import IP from '../../IP';

/* -----------------    ACTION TYPES    ------------------ */
const SET_CURRENT_USER = 'SET_CURRENT_USER';
const REMOVE_CURRENT_USER = 'REMOVE_CURRENT_USER';

/* ------------     ACTION CREATORS      ------------------ */
const setCurrentUser = user => ({ type: SET_CURRENT_USER, user });
export const removeCurrentUser = () => ({ type: REMOVE_CURRENT_USER });

/* ------------          REDUCER         ------------------ */
export default function reducer(currentUser = {}, action) {
	switch (action.type) {
		case SET_CURRENT_USER:
			return action.user;

		case REMOVE_CURRENT_USER:
			return {};

		default:
			return currentUser;
	}
}

/* ------------       API COMMUNICATOR     ----------------- */
export const login = (credentials, navigation) => dispatch => {
	{
		fetch(`${IP}/api/users/login`, {
			method: 'POST',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(credentials)
		})
			.then(response => response.text())
			.then(res => {
				const result = JSON.parse(res);
				if (result.success == true) {
					try {
						setUserAndRedirect(result.name, navigation, dispatch, {
							name: result.name
						});
					} catch (err) {
						console.log(err);
					}
				} else if (result.success == false) {
					console.log('login function: user login unsuccessful');
					navigation.navigate('Login', {
						error: 'SignedOut failed.'
					});
				}
			})
			.catch(err => {
				console.log('login function: user login unsuccessful');
				navigation.navigate('Login', { error: 'Login failed.' });
			});
	}
};

export const signup = (credentials, navigation) => dispatch => {
	fetch(`${IP}/api/users/register`, {
		method: 'POST',
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(credentials)
	})
		.then(response => response.text())
		.then(res => {
			const result = JSON.parse(res);
			if (result.success == true) {
				setUserAndRedirect(result.name, navigation, dispatch, {
					name: result.name
				});
			} else if (result.success == false) {
				navigation.navigate('Login', {
					error: 'Login failed.'
				});
			}
		})
		.catch(() =>
			navigation.navigate('SignedOut', { error: 'Signup failed.' })
		);
};

export const logout = navigation => dispatch => {
	dispatch(removeCurrentUser());
	NavigationActions.navigate('SignedOut', { error: 'Logout successful.' });
};

/* ------------      HELPER FUNCTIONS     ------------------ */

function setUserAndRedirect(user, navigation, dispatch, userJSON) {
	dispatch(setCurrentUser(user));
	navigation.dispatch(
		StackActions.reset({
			index: 0,
			actions: [
				NavigationActions.navigate(
					{ routeName: 'loginStack' },
					userJSON
				)
			]
		})
	);
}
