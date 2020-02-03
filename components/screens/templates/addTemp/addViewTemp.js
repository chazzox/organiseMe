// imbuilt node imports
import { ScrollView } from 'react-native-gesture-handler';
import React, { Component } from 'react';
import { View, Text, Picker, Button } from 'react-native';

//our custom written imports
import { UserInput, PickerExample } from '../generalImport';
import styles from './add.style';
import { users } from '../../user';

export class AddTemplate extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name: '',
			description: '',
			due: '',
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
						/>
					</View>
					<View style={styles.formContainer}>
						<Text style={styles.title}>Due</Text>
						<UserInput
							placeholder={this.props.placholder3}
							style={styles.inputStyle}
							value={this.state.due}
							onChangeText={due => this.handleChangeDue(due)}
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
					<View style={styles.formContainer}>
						<Text
							onPress={() => this.handleAdd()}
							style={[styles.title, { color: 'black' }]}>
							Add {this.props.formType}
						</Text>
					</View>
				</ScrollView>
			</View>
		);
	}
}
