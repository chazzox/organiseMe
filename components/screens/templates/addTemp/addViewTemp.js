// imbuilt node imports
import { ScrollView } from 'react-native-gesture-handler';
import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Alert } from 'react-native';

//our custom written imports
import { UserInput, PickerExample } from '../generalImport';
import { users } from '../../user';
import styles from './add.style';

// functions from reducer

// the module itself
export class AddTemplate extends Component {
	constructor(props) {
		super(props);
		// states used for the text input
		this.state = {
			name: '',
			description: '',
			due: '',
			subject: users.subjects[0].name
		};
		this.handleAdd = this.handleAdd.bind(this);
	}
	handleChangeState(index, value) {
		switch (index) {
			case 0:
				this.setState({ name: value });
				break;
			case 1:
				this.setState({ description: value });
				break;
			case 2:
				this.setState({ due: value });
				break;
		}
	}

	handleAdd() {
		try {
			Alert.alert(
				'Invalid Homework Inputs',
				'Date due does not match regex, please try again',
				[
					{
						text: 'OK',
						onPress: () =>
							this.setState({
								error: '',
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
							onChangeText={name => this.handleChangState(0, name)}
						/>
					</View>
					<View style={styles.formContainer}>
						<Text style={styles.title}>Description</Text>
						<UserInput
							placeholder={this.props.placholder2}
							style={styles.inputStyle}
							value={this.state.description}
							onChangeText={description => this.handleChangeState(1, description)}
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
							onChangeText={due => this.handleChangeState(2, due)}
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
