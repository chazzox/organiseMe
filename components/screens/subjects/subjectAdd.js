import React, { Component } from 'react';
import { Text, View } from 'react-native';

import ButtonSaveCancel from '../templates/saveCancelButton'
import styles from './sujectStyle.style';

export default class subjectAdd extends Component {
	render() {
		return (
			<View style={styles.main}>
				<View style={styles.nameInput}>
					<Text>Enter subject name</Text>
				</View>
				<View style={styles.teacherInput}>
					<Text>Enter Your teacher's name</Text>
				</View>
				<View style={styles.blockInput}>
					<Text>What days do you have this subject on?</Text>
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
