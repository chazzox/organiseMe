import React, { Component } from 'react';
import { Text, ScrollView, Button, View, Alert } from 'react-native';
import { connect } from 'react-redux';
import { withNavigation } from 'react-navigation';

// our modules
import { signup } from '../../redux/reducer';
import { UserInput } from '../templates/generalImport';
import styles from './globalAuth.style';

class Register extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name: '',
			email: '',
			password: '',
			password2: '',
			error: this.props.navigation.state.params.error
		};
		this.handleChangeState = this.handleChangeState.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChangeState(indexvalue, value) {
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
		// validation is handled on the api side of things so we dont need to worry
		this.props.signup(
			{
				name: this.state.name,
				email: this.state.email,
				password: this.state.password,
				password2: this.state.password2
			},
			this.props.navigation
		);
		// clear the state after signup for security
		this.setState({
			email: '',
			name: '',
			password: '',
			password2: '',
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
				<ScrollView style={{ marginTop: 25 }}>
					<Text style={styles.formTitle}>Register</Text>
					<UserInput
						extraStyle={styles.textInput}
						value={this.state.name}
						placeholder='Name'
						length={15}
						onChangeText={name => this.handleChangeState(0, name)}
					/>
					<UserInput
						extraStyle={styles.textInput}
						value={this.state.email}
						placeholder='Enter email'
						length={50}
						onChangeText={email => this.handleChangeState(1, email)}
					/>
					<UserInput
						secureTextEntry={true}
						extraStyle={styles.textInput}
						placeholder='Enter a Password'
						value={this.state.password}
						onChangeText={password => this.handleChangeState(2, password)}
					/>
					<UserInput
						secureTextEntry={true}
						extraStyle={styles.textInput}
						placeholder='Confirm Password'
						value={this.state.password2}
						onChangeText={password2 => this.handleChangeState(3, password2)}
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
	signup: (credentials, navigation) => dispatch(signup(credentials, navigation))
});

export default connect(null, mapDispatchToProps)(withNavigation(Register));
