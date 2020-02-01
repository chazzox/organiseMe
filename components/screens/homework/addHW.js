import React, { Component } from 'react';
import { View, Text, TextInput, Picker, Button } from 'react-native';
import { connect } from 'react-redux';

import styles from './add.style';
import { ScrollView } from 'react-native-gesture-handler';

import {UserInput} from '../templates/generalImport'

class PickerExample extends Component {
	state = { user: '' };
	updateUser = user => {
		this.setState({ user: user });
	};
	render() {
		return (
			<View>
				<Text style={styles.text}>{this.state.user}</Text>
				<Picker selectedValue={this.state.user} onValueChange={this.updateUser}>
					<Picker.Item color='white' label='Steve' value='steve' />
					<Picker.Item color='white' label='Ellen' value='ellen' />
					<Picker.Item color='white' label='Maria' value='maria' />
				</Picker>
			</View>
		);
	}
}

class addHW extends Component {
	constructor(props) {
		super(props);
	}
	addHW() {
		console.log('lmao');
	}
	render() {
		return (
			<View style={styles.background}>
				<ScrollView>
					<View style={styles.formContainer}>
						<Text style={styles.title}>Name</Text>
						<UserInput placeholder='kek' />
					</View>
					<View style={styles.formContainer}>
						<Text style={styles.title}>Description</Text>
						<UserInput placeholder='kek' />
					</View>
					<View style={styles.formContainer}>
						<Text style={styles.title}>Subject</Text>
						<UserInput placeholder='kek' />
					</View>
					<View style={styles.formContainer}>
						<Text style={styles.title}>Due</Text>
						<PickerExample></PickerExample>
					</View>
					<View style={styles.formContainer}>
						<Text style={styles.title}>Due</Text>
						<Button onPress={this.addHW()} title={'Add homework'} />
					</View>
				</ScrollView>
			</View>
		);
	}
}

export default connect(null, null)(addHW);
