import { StackActions, NavigationActions } from 'react-navigation';
import IP from '../../IP';
import { setStorage } from '../auth/memory';

/* -----------------    REDUX JAZZ    ------------------ */
const SET_CURRENT_USER = 'SET_CURRENT_USER';
const REMOVE_CURRENT_USER = 'REMOVE_CURRENT_USER';
const setCurrentUser = user => ({ type: SET_CURRENT_USER, user });
export const removeCurrentUser = () => ({ type: REMOVE_CURRENT_USER });

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

/* ------------       API FUNCTIONS     ----------------- */
/*		This is our login in function		*/
export const login = (credentials, navigation) => dispatch => {
	{
		fetch(`${IP}/api/login`, {
			method: 'POST',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(credentials)
		})
			.then(response => response.text())
			.then(res => JSON.parse(res))
			.then(result => {
				console.log(result);
				if (result.success == true) {
					try {
						setUserAndRedirect(result.name, navigation, dispatch, {
							name: result.name
						});
					} catch (err) {
						console.log(err);
					}
				} else if (result.success == false) {
					navigation.replace('Login', {
						error: result.error
					});
				}
			})
			.catch(err => {
				console.log(err);
				navigation.replace('Login', { error: 'signIn faled' });
			});
	}
};

/*		This is our register function		*/
export const signup = (credentials, navigation) => dispatch => {
	fetch(`${IP}/api/register`, {
		method: 'POST',
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(credentials)
	})
		.then(response => response.text())
		.then(res => JSON.parse(res))
		.then(result => {
			if (result.success == true) {
				setUserAndRedirect(result.name, navigation, dispatch, {
					name: result.name
				});
			} else if (result.success == false) {
				navigation.replace('Register', { error: result.error });
			}
		})
		.catch(err => {
			console.log(err);
		});
};

/* 		function for removing user		*/
export const logout = navigation => dispatch => {
	dispatch(removeCurrentUser());
	NavigationActions.navigate('SignedOut', { error: 'Logout successful.' });
};

/* 		function for saving user and loging in		*/
function setUserAndRedirect(user, navigation, dispatch, userJSON) {
	setStorage('yeah', user);
	dispatch(setCurrentUser(user));
	navigation.dispatch(
		StackActions.reset({
			index: 0,
			actions: [NavigationActions.navigate({ routeName: 'loginStack' }, userJSON)]
		})
	);
}
