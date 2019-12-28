import React, { Component } from 'react';
import {
	StyleSheet,
	Text,
	TextInput,
	KeyboardAvoidingView,
	ScrollView,
	Button,
	View
} from 'react-native';
import { connect } from 'react-redux';

import { login } from '../../redux/reducer';
import styles from './login.style';

class UserInput extends Component {
	render() {
		return (
			<TextInput
				style={styles.textInput}
				autoCapitalize='none'
				autoCorrect={false}
				maxLength={15}
				placeholderTextColor='white'
				{...this.props}
			/>
		);
	}
}

class Login extends Component {
	constructor(props) {
		super(props);
		this.state = {
			email: '',
			password: '',
			error: JSON.stringify(this.props.navigation.getParam('error'))
		};
		this.handleChangeEmail = this.handleChangeEmail.bind(this);
		this.handleChangePassword = this.handleChangePassword.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChangeEmail(value) {
		this.setState({ email: value });
	}

	handleChangePassword(value) {
		this.setState({ password: value });
	}

	handleSubmit() {
		const email = this.state.email;
		const password = this.state.password;
		this.props.login({ email, password }, this.props.navigation);
		// clear the state after login for security
		this.setState({
			email: '',
			password: '',
			error: ''
		});
	}

	render() {
		return (
			<View style={styles.container}>
				<ScrollView>
					<Text style={styles.error}>{this.state.error}</Text>
					<Text style={styles.textLabel}>Email</Text>
					<UserInput
						placeholder='EMAIL'
						value={this.state.email}
						onChangeText={email => this.handleChangeEmail(email)}
					/>
					<Text style={styles.textLabel}>Password</Text>
					<UserInput
						secureTextEntry={true}
						placeholder='PASSWORD'
						value={this.state.password}
						onChangeText={password =>
							this.handleChangePassword(password)
						}
					/>
					<Button
						buttonStyle={styles.button}
						title='Login'
						onPress={this.handleSubmit}
					/>
				</ScrollView>
			</View>
		);
	}
}

const mapDispatchToProps = dispatch => ({
	login: (credentials, navigation) => dispatch(login(credentials, navigation))
});

export default connect(null, mapDispatchToProps)(Login);
