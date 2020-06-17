const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const keys = require('../../config/keys');
// Load input validation
const validateRegisterInput = require('../../validation/register');
const validateLoginInput = require('../../validation/login');
// Load User model
const User = require('../../models/User');

// @route POST api/register
router.post('/register', (req, res) => {
	// Form validation
	const { error, isValid } = validateRegisterInput(req.body);
	// Check validation
	if (!isValid) {
		return res.status(400).json({ error: error, success: isValid });
	}
	User.findOne({ email: req.body.email }).then(user => {
		if (user) {
			return res.status(400).json({ error: 'Email already exists' });
		} else {
			const newUser = new User({
				name: req.body.name,
				email: req.body.email,
				password: req.body.password,
				success: true
			});
			console.log(`new signUp: ${newUser}`);
			// Hash password before saving in database
			bcrypt.genSalt(10, (err, salt) => {
				bcrypt.hash(newUser.password, salt, (err, hash) => {
					if (err) throw err;
					newUser.password = hash;
					newUser
						.save()
						.then(user => {
							res.json(user);
						})
						.catch(err => console.log(err));
				});
			});
		}
	});
});

// @route POST api/users/login
router.post('/login', (req, res) => {
	// Form validation
	const { error, isValid } = validateLoginInput(req.body);
	console.log(error);
	if (!isValid) {
		return res.status(400).json({ error: error, success: isValid });
	}
	const email = req.body.email;
	const password = req.body.password;
	// Find user by email
	User.findOne({ email }).then(user => {
		// Check if user exists
		if (!user) {
			return res
				.status(400)
				.json({ error: 'Email or Password is incorrect', success: false });
		}
		// Check password
		bcrypt.compare(password, user.password).then(isMatch => {
			if (isMatch) {
				// User matched
				// Create JWT Payload
				const payload = {
					id: user.id,
					name: user.name
				};
				// Sign token
				jwt.sign(
					payload,
					keys.secretOrKey,
					{
						expiresIn: 31556926 // 1 year in seconds
					},
					(err, token) => {
						console.log(`user login event: ${user}`);
						res.json({
							id: user.id,
							name: user.name,
							token: token,
							success: true
						});
					}
				);
			} else {
				return res
					.status(400)
					.json({ error: 'Email or Password is incorrect', success: false });
			}
		});
	});
});

module.exports = router;
