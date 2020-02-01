import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signup } from '../../redux/reducer';
import { Text, TextInput, KeyboardAvoidingView, ScrollView, Button, View } from 'react-native';
import styles from './globalAuth.style';

class UserInput extends Component {
	render() {
		return (
			<View style={{ justifyContent: 'center', alignItems: 'center' }}>
				<Text style={styles.textLabel}>{this.props.title}</Text>
				<TextInput
					style={styles.textInput}
					autoCapitalize='none'
					autoCorrect={false}
					maxLength={30}
					value={this.stateValue}
					onChangeText={this.props.changeHandleFunction}
				/>
			</View>
		);
	}
}

class Signup extends Component {
	constructor(props) {
		super(props);
		this.state = {
			email: '',
			name: '',
			password: '',
			password2: '',
			error: ''
		};
		this.handleChangeEmail = this.handleChangeEmail.bind(this);
		this.handleChangeName = this.handleChangeName.bind(this);
		this.handleChangePassword1 = this.handleChangePassword1.bind(this);
		this.handleChangePassword2 = this.handleChangePassword2.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChangeEmail(value) {
		this.setState({ email: value });
	}

	handleChangeName(value) {
		this.setState({ name: value });
	}

	handleChangePassword1(value) {
		this.setState({ password: value });
	}

	handleChangePassword2(value) {
		this.setState({ password2: value });
	}

	handleSubmit() {
		// Validation for forms
		const regJSON = {
			name: this.state.name,
			email: this.state.email,
			password: this.state.password,
			password2: this.state.password2
		};
		console.log(regJSON);
		if (
			this.state.email &&
			this.state.password &&
			this.state.password === this.state.password2
		) {
			signup(regJSON, this.props.navigation);
			// clear the state after signup for security
			this.setState({
				email: '',
				name: '',
				password: '',
				password2: '',
				error: ''
			});
		} else {
			this.setState({
				email: '',
				name: '',
				password: '',
				password2: '',
				error: 'Email and password cannot be empty.  Passwords must also match.'
			});
		}
	}

	render() {
		return (
			<KeyboardAvoidingView behavior='padding' style={styles.container}>
				<ScrollView>
					<UserInput
						title='Enter name'
						value={this.state.name}
						changeHandleFunction={name => this.handleChangeName(name)}
					/>
					<UserInput
						title='Enter email'
						value={this.state.email}
						changeHandleFunction={email => this.handleChangeEmail(email)}
					/>
					<UserInput
						title='Enter a Password'
						value={this.state.password1}
						changeHandleFunction={password1 => this.handleChangePassword1(password1)}
					/>
					<UserInput
						title='Confirm Password'
						value={this.state.password2}
						changeHandleFunction={password2 => this.handleChangePassword2(password2)}
					/>
					<Text style={styles.error}>{this.state.error}</Text>
					<Button
						buttonStyle={styles.button}
						title='Sign Up'
						onPress={this.handleSubmit}
					/>
				</ScrollView>
			</KeyboardAvoidingView>
		);
	}
}

const mapDispatchToProps = dispatch => ({
	signup: (credentials, navigation) => dispatch(signup(credentials, navigation))
});

export default connect(null, mapDispatchToProps)(Signup);
