import React, { Component } from 'react';
import { View, Text, Picker, Button } from 'react-native';
import { connect } from 'react-redux';
import { ScrollView } from 'react-native-gesture-handler';

import { UserInput } from '../templates/generalImport';
import styles from './add.style';
import { users } from '../user';

class PickerExample extends Component {
	state = { user: 'maths' };
	updateUser = user => {
		this.setState({ user: user });
	};
	render() {
		return (
			<View>
				<Text style={styles.text}>{this.state.user}</Text>
				<Picker selectedValue={this.state.user} onValueChange={this.updateUser}>
					<Picker.Item color='white' label='maths' value='maths' />
					<Picker.Item color='white' label='DT' value='DT' />
					<Picker.Item color='white' label='Computer Science' value='Computer Science' />
					<Picker.Item color='white' label='Electronics' value='Electronics' />
				</Picker>
			</View>
		);
	}
}

class addHW extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name: '',
			description: '',
			due: ''
		};
		this.handleChangeName = this.handleChangeName.bind(this);
		this.handleChangeDesc = this.handleChangeDesc.bind(this);
		this.handleAdd = this.handleAdd.bind(this);
	}
	handleChangeName(value) {
		this.setState({ name: value });
	}

	handleChangeDesc(value) {
		this.setState({ description: value });
	}

	handleChangeDue(value) {
		this.setState({ due: value });
	}

	handleAdd() {
		try {
			this.props.navigation.goBack();
		} catch (err) {
			alert('reeeeeeeeeeee');
		}
	}
	render() {
		return (
			<View style={styles.background}>
				<ScrollView>
					<View style={styles.formContainer}>
						<Text style={styles.title}>Name</Text>
						<UserInput
							placeholder='kek'
							style={styles.inputStyle}
							value={this.state.name}
							onChangeText={name => this.handleChangeName(name)}
						/>
					</View>
					<View style={styles.formContainer}>
						<Text style={styles.title}>Description</Text>
						<UserInput
							placeholder='kek2'
							style={styles.inputStyle}
							value={this.state.description}
							onChangeText={description => this.handleChangeDesc(description)}
						/>
					</View>
					<View style={styles.formContainer}>
						<Text style={styles.title}>Due</Text>
						<UserInput
							placeholder='kek4'
							style={styles.inputStyle}
							value={this.state.due}
							onChangeText={due => this.handleChangeDue(due)}
						/>
					</View>
					<View style={styles.formContainer}>
						<Text style={styles.title}>Subject</Text>
						<PickerExample></PickerExample>
					</View>
					<View style={styles.formContainer}>
						<Text style={styles.title}>Due</Text>
						<Button onPress={this.handleAdd()} title={'Add homework'} />
					</View>
				</ScrollView>
			</View>
		);
	}
}

export default connect(null, null)(addHW);
