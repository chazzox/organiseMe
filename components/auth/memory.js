// React-Native's version of local storage
import { AsyncStorage } from 'react-native';
export const LOGINKEY = 'create-react-native-app-redux-auth-demo-key';

/*			Memory Management Functions			*/
export const onSignIn = (LOGINKEY, TOKEN) => {
	AsyncStorage.setItem(LOGINKEY, TOKEN);
};
export const setStorage = (key, data) => AsyncStorage.setItem(key, JSON.stringify(data));
// If user signs out, remove TRUE key
export const onSignOut = () => AsyncStorage.removeItem(LOGINKEY);
export const isSignedIn = () => {
	prom = new Promise((resolve, reject) => {
		AsyncStorage.getItem(LOGINKEY)
			.then(res => {
				if (res !== null) {
					resolve(true);
				} else {
					resolve(false);
				}
			})
			.catch(err => reject(err));
	});

	return prom;
};
/*				get all keys stored in storage				*/
export const getAll = () => {
	AsyncStorage.getAllKeys()
		.then(res => {
			return res;
		})
		.catch(err => reject(err));
};
/*				get user json in storage upon login event				*/
export const getJSON = () => {
	console.log('yeah');
};
