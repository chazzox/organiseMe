import React, { Component } from 'react';
import { Text, View, TextInput } from 'react-native';

import ButtonSaveCancel from '../templates/saveCancelButton';
import styles from './sujectStyle.style';

export default class subjectAdd extends Component {
	constructor(props){
		super(props)
		
	}
	render() {
		return (
			<View style={styles.main}>
				<View style={styles.inputContainer}>
					<View style={styles.nameInput}>
						<Text></Text>
						<TextInput
							style={styles.SubjectTitle}
							placeholder='Enter subject name'
							value={this.state.name}
							placeholderTextColor='#fff'
							onChangeText={name => this.handleChangeState(0, name)}
						/>
					</View>
					<View style={styles.teacherInput}>
						<Text>Enter Your teacher's name</Text>
					</View>
					<View style={styles.blockInput}>
						<Text>What days do you have this subject on?</Text>
					</View>
				</View>
				<ButtonSaveCancel
					cancel='Cancel'
					confirm='Add Subject'
					confirmFunc={() => console.log('ree')}
					cancelFunc={() => console.log('reeeeee')}
				/>
			</View>
		);
	}
}
