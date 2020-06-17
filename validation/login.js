const Validator = require('validator');
const isEmpty = require('is-empty');
module.exports = function validateLoginInput(data) {
	let error = '';
	// Convert empty fields to an empty string so we can use validator functions
	data.email = !isEmpty(data.email) ? data.email : '';
	data.password = !isEmpty(data.password) ? data.password : '';
	// check for empty fields
	// Email checks
	if (Validator.isEmpty(data.email) || Validator.isEmpty(data.password)) {
		error = 'Empty fields detected';
	} else if (!Validator.isEmail(data.email)) {
		error = 'Email is invalid';
	}
	return {
		error,
		isValid: isEmpty(error)
	};
};
