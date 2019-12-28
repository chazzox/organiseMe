import axios from 'axios';

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

/* ------------       THUNK CREATORS     ------------------ */

export const login = (credentials, navigation) => dispatch => {
	{
		fetch('http://86.163.162.130:5000/api/users/login', {
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
					setUserAndRedirect(result.name, navigation, dispatch);
				} else if (result.success == false) {
					navigation.navigate('Login', {
						error: 'Login failed.'
					});
				}
			})
			.catch(err => {
				navigation.navigate('Login', { error: 'Login failed.' });
			});
	}
};

export const signup = (credentials, navigation) => dispatch => {
	axios
		.post(`${IP}/auth/signup`, credentials)
		.then(res => setUserAndRedirect(res.data, navigation, dispatch))
		.catch(() =>
			navigation.navigate('SignedOut', { error: 'Signup failed.' })
		);
};

export const logout = navigation => dispatch => {
	dispatch(removeCurrentUser());
	navigation.navigate('SignedOut', { error: 'Logout successful.' });
};

/* ------------      HELPER FUNCTIONS     ------------------ */

function setUserAndRedirect(user, navigation, dispatch) {
	dispatch(setCurrentUser(user));
	navigation.navigate('SignedIn', { userName: user });
}