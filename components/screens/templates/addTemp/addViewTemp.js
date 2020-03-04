// imbuilt node imports
import { ScrollView } from 'react-native-gesture-handler';
import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Alert } from 'react-native';

//our custom written imports
import { UserInput, PickerExample } from '../generalImport';
import styles from './add.style';
import { users } from '../../user';

export class AddTemplate extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name: 'maths task 1',
			description:
				"the homework is about lots of things that i can't currently mention but in due time i shall, this is a description about for an invalid example of homework, this description is far too long ",
			due: '23/04/20',
			subject: users.subjects[0].name
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
			Alert.alert(
				'Invalid Homework Inputs',
				'Description is over the maximum length, please shorten',
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
		} catch (err) {
			alert(err);
		}
	}
	render() {
		return (
			<View style={styles.background}>
				<ScrollView>
					<View style={styles.formContainer}>
						<Text style={styles.title}>Name</Text>
						<UserInput
							placeholder={this.props.placholder1}
							style={styles.inputStyle}
							value={this.state.name}
							onChangeText={name => this.handleChangeName(name)}
						/>
					</View>
					<View style={styles.formContainer}>
						<Text style={styles.title}>Description</Text>
						<UserInput
							placeholder={this.props.placholder2}
							style={styles.inputStyle}
							value={this.state.description}
							onChangeText={description => this.handleChangeDesc(description)}
							multiline
							numberOfLines={10}
						/>
					</View>
					<View style={styles.formContainer}>
						<Text style={styles.title}>Due</Text>
						<UserInput
							placeholder={this.props.placholder3}
							style={styles.inputStyle}
							value={this.state.due}
							onChangeText={due => this.handleChangeDue(due)}
							keyboardType='numbers-and-punctuation'
						/>
					</View>
					<View style={styles.formContainer}>
						<Text style={styles.title}>Subject</Text>
						<PickerExample
							sub={this.state.subject}
							pickerOptions={users.subjects}
							updateState={itemValue => {
								this.setState({ subject: itemValue });
							}}
						/>
					</View>
					<TouchableOpacity onPress={() => this.handleAdd()}>
						<View style={styles.formContainer}>
							<Text style={[styles.title, { color: '#007AFF' }]}>
								Add {this.props.formType}
							</Text>
						</View>
					</TouchableOpacity>
				</ScrollView>
			</View>
		);
	}
}
