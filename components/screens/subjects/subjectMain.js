import React, { Component } from 'react';
import { Text, View, ScrollView, TouchableOpacity } from 'react-native';

import styles from './sujectStyle.style';
import { users } from '../user';

class SubjectPreview extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<TouchableOpacity
				onPress={() => {
					this.props.navProps.navigate('subjectEdit', this.props.subjectJSON);
				}}
				style={styles.subjectContainer}
				key={this.props.index}>
				<Text style={styles.SubjectTitle}>{this.props.subjectJSON.name}</Text>
				<Text style={styles.SubjectTeacher}>{this.props.subjectJSON.teacher}</Text>
			</TouchableOpacity>
		);
	}
}
export default class subjectMain extends Component {
	constructor(props) {
		super(props);
		this.state = {
			subjects: this.renderSubList()
		};
	}
	renderSubList() {
		return users.subjects.map((subject, index) => {
			return (
				<SubjectPreview
					navProps={this.props.navigation}
					key={index}
					subjectJSON={subject}
				/>
			);
		});
	}
	render() {
		return (
			<View style={styles.main}>
				<ScrollView>
					<View style={{ alignItems: 'center' }}>{this.state.subjects}</View>
				</ScrollView>
			</View>
		);
	}
}
