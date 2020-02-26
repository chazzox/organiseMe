import React, { Component } from 'react';
import { Text, ScrollView, Button, View, Alert } from 'react-native';
import { connect } from 'react-redux';
import { withNavigation } from 'react-navigation';

// our modules
import { signup } from '../../redux/reducer';
import styles from './globalAuth.style';
import { UserInput } from '../templates/generalImport';

// the main class used to render the register form
class Register extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name: 'john',
			email: 'email@example.com',
			password: 'Compl$xPwsd1254',
			password2: 'notTheSame',
			error: ''
		};
		this.handleChangeEmail = this.handleChangeEmail.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChangeEmail(indexvalue, value) {
		switch (indexvalue) {
			case 0:
				this.setState({ name: value });
				break;
			case 1:
				this.setState({ email: value });
				break;
			case 2:
				this.setState({ password: value });
				break;
			case 3:
				this.setState({ password2: value });
				break;
		}
	}

	handleSubmit() {
		// Validation for forms
		Alert.alert(
			'Invalid Register Inputs',
			'passwords do no match, please try again',
			[
				{
					text: 'OK',
					onPress: () =>
						this.setState({
							email: '',
							password: '',
							error: ''
						})
				}
			],
			{ cancelable: false }
		);

		// if (
		// 	this.state.email &&
		// 	this.state.password &&
		// 	this.state.password === this.state.password2
		// ) {
		// 	signup(
		// 		{
		// 			name: this.state.name,
		// 			email: this.state.email,
		// 			password: this.state.password,
		// 			password2: this.state.password2
		// 		},
		// 		this.props.navigation
		// 	);
		// 	// clear the state after signup for security
		// 	this.setState({
		// 		email: '',
		// 		name: '',
		// 		password: '',
		// 		password2: '',
		// 		error: ''
		// 	});
		// } else {
		// 	this.setState({
		// 		email: '',
		// 		name: '',
		// 		password: '',
		// 		password2: '',
		// 		error: 'Email and password cannot be empty.  Passwords must also match.'
		// 	});
		// }
	}

	render() {
		if (this.state.error != '') {
			Alert.alert(
				'Invalid Register Inputs',
				this.state.error,
				[
					{
						text: 'OK',
						onPress: () =>
							this.setState({
								email: '',
								password: '',
								error: ''
							})
					}
				],
				{ cancelable: false }
			);
		}
		return (
			<View style={styles.container}>
				<ScrollView style={{ marginTop: 25 }}>
					<Text style={styles.textLabel}>Register</Text>
					<UserInput
						extraStyle={styles.textInput}
						value={this.state.name}
						placeholder='Name'
						length={15}
						onChangeText={name => this.handleChangeEmail(0, name)}
					/>
					<UserInput
						extraStyle={styles.textInput}
						value={this.state.email}
						placeholder='Enter email'
						length={50}
						onChangeText={email => this.handleChangeEmail(1, email)}
					/>
					<UserInput
						secureTextEntry={true}
						extraStyle={styles.textInput}
						placeholder='Enter a Password'
						value={this.state.password}
						onChangeText={password => this.handleChangeEmail(2, password)}
					/>
					<UserInput
						secureTextEntry={true}
						extraStyle={styles.textInput}
						placeholder='Confirm Password'
						value={this.state.password2}
						onChangeText={password2 => this.handleChangeEmail(3, password2)}
					/>
					<Button
						secureTextEntry={true}
						buttonStyle={styles.button}
						title='Sign Up'
						onPress={() => this.handleSubmit()}
					/>
				</ScrollView>
			</View>
		);
	}
}

const mapDispatchToProps = dispatch => ({
	login: (credentials, navigation) => dispatch(login(credentials, navigation))
});

export default connect(null, mapDispatchToProps)(withNavigation(Register));
