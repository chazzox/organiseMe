import React, { Component } from 'react';
import { Text, ScrollView, Button, View, Alert } from 'react-native';
import { connect } from 'react-redux';
import { withNavigation } from 'react-navigation';

// our modules
import { login } from '../../redux/reducer';
import { UserInput } from '../templates/generalImport';
import styles from './globalAuth.style';

class Login extends Component {
	constructor(props) {
		super(props);
		this.state = {
			email: '',
			password: '',
			error: this.props.navigation.state.params.error
		};
		this.handleChangeInput = this.handleChangeInput.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChangeInput(stateID, value) {
		switch (stateID) {
			case 0:
				this.setState({ email: value });
				break;
			case 1:
				this.setState({ password: value });
				break;
		}
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
				<ScrollView>
					<Text style={styles.formTitle}>LOGIN</Text>
					<UserInput
						placeholder='EMAIL'
						value={this.state.email}
						extraStyle={styles.textInput}
						onChangeText={email => this.handleChangeInput(0, email)}
					/>
					<UserInput
						secureTextEntry={true}
						placeholder='PASSWORD'
						value={this.state.password}
						extraStyle={styles.textInput}
						onChangeText={password => this.handleChangeInput(1, password)}
					/>
					<Button
						buttonStyle={styles.button}
						title='Login'
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

export default connect(null, mapDispatchToProps)(withNavigation(Login));
