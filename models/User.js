const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// Create Schema
const UserSchema = new Schema({
	name: {
		type: String,
		required: true
	},
	email: {
		type: String,
		required: true
	},
	password: {
		type: String,
		required: true
	},
	date: {
		type: Date,
		default: new Date().getTime()
	},
	success: {
		type: Boolean,
		default: true
	},
	info: {
		type: Object,
		default: false
	}
});
module.exports = User = mongoose.model('users', UserSchema);
