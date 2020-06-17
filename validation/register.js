const Validator = require('validator');
const isEmpty = require('is-empty');
module.exports = function validateRegisterInput(data) {
	let error = '';
	// Convert empty fields to an empty string so we can use validator functions
	data.name = !isEmpty(data.name) ? data.name : '';
	data.email = !isEmpty(data.email) ? data.email : '';
	data.password = !isEmpty(data.password) ? data.password : '';
	data.password2 = !isEmpty(data.password2) ? data.password2 : '';
	// check all fields are not empty
	if (
		isEmpty(data.name) ||
		isEmpty(data.email) ||
		isEmpty(data.password) ||
		isEmpty(data.password2)
	) {
		error = 'Data fields were detected to be empty, please try again';
	} else if (!Validator.isEmail(data.email)) {
		error = 'Email is invalid';
	}

	if (!Validator.isLength(data.password, { min: 6, max: 30 }) && isEmpty(error)) {
		error = 'Password must be at least 6 characters';
	}
	if (!Validator.equals(data.password, data.password2) && isEmpty(error)) {
		error = 'Passwords must match';
	}
	return {
		error,
		isValid: isEmpty(error)
	};
};
