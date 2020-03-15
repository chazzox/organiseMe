import { StackActions, NavigationActions } from 'react-navigation';
import IP from '../../IP';

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
		console.log(`attempting login`);
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
				} else {
					console.log(result);
				}
			})
			.catch(err => {
				console.log(err);
				console.log(`${IP}/api/users/login`);
				console.log('login function: user login unsuccessful');
				navigation.replace('Login', { error: 'signIn faled' });
			});
	}
};
/*		this is our register function		*/
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

/* 		function for saving user		*/
function setUserAndRedirect(user, navigation, dispatch, userJSON) {
	console.log(user);
	dispatch(setCurrentUser(user));
	navigation.dispatch(
		StackActions.reset({
			index: 0,
			actions: [NavigationActions.navigate({ routeName: 'loginStack' }, userJSON)]
		})
	);
}
