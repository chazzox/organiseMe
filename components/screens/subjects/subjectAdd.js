import React, { Component } from 'react';
import { Text, View, TextInput, Alert } from 'react-native';

import ButtonSaveCancel from '../templates/saveCancelButton';
import styles from './sujectStyle.style';
import { ScrollView } from 'react-native-gesture-handler';

class InputSection extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<View style={styles.subjectContainer}>
				<Text style={styles.SubjectTitle}>Enter {this.props.changeName} name here:</Text>
				<TextInput
					style={[styles.SubjectTitle, { marginTop: 10, marginBottom: 10 }]}
					placeholder={`${this.props.changeName} here`}
					value={this.props.change}
					placeholderTextColor='#fff'
					onChangeText={this.props.func}
				/>
			</View>
		);
	}
}

export default class subjectAdd extends Component {
	constructor(props) {
		super(props);
		this.state = { SubName: '', TeachName: '' };
	}
	handleChangeState(key, value) {
		switch (key) {
			case 0:
				this.setState({ SubName: value });
				break;
			case 1:
				this.setState({ TeachName: value });
				break;
		}
	}
	addSub() {
		Alert.alert(
			'Title1',
			'body2',
			[
				{
					text: 'OK',
					onPress: () => {
						this.setState({
							SubName: '',
							TeachName: ''
						});
					}
				}
			],
			{ cancelable: false }
		);
	}
	cancelSub() {
		Alert.alert(
			'Title',
			'body',
			/* 				
			Are any of the fields empty, if not, alert user 
			to make sure that they want to clear any progress.
			*/
			this.state.SubName == '' && this.state.TeachName == ''
				? [{ text: 'ok' }]
				: [
						{
							text: 'cancel',
							style: 'cancel'
						},
						{ text: 'ok' }
				  ],
			{ cancelable: false }
		);
	}
	render() {
		return (
			<View style={styles.main}>
				<ScrollView style={{ width: '100%' }}>
					<View style={{ alignItems: 'center', width: '100%' }}>
						<InputSection
							change={this.state.SubName}
							changeName={'Subject'}
							func={value => this.handleChangeState(0, value)}
						/>
						<InputSection
							change={this.state.TeachName}
							changeName={'Teacher'}
							func={value => this.handleChangeState(1, value)}
						/>
						<ButtonSaveCancel
							cancel='Cancel'
							confirm='Add Subject'
							confirmFunc={() => this.addSub()}
							cancelFunc={() => this.cancelSub()}
						/>
					</View>
				</ScrollView>
			</View>
		);
	}
}
