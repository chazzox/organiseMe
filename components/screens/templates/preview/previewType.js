import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';

import { PickerExample } from '../generalImport';
import { users } from '../../user';

class Preview extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<ScrollView style={styles.viewContainer}>
					<View style={styles.homeworkContainer}>
						<Text style={styles.Text}>Name</Text>
						<Text style={styles.Text}>{this.props.name}</Text>
					</View>
					<View style={styles.homeworkContainer}>
						<Text style={styles.Text}>Description</Text>
						<Text style={styles.Text}>{this.props.desc}</Text>
					</View>
					<View style={styles.homeworkContainer}>
						<Text style={styles.Text}>Due</Text>
						<Text style={styles.Text}>{this.props.due}</Text>
					</View>
					<View style={styles.homeworkContainer}>
						<Text style={styles.Text}>Subject</Text>
						<Text style={styles.Text}>{this.props.sub.name}</Text>
					</View>
			</ScrollView>
		);
	}
}

class EditPreview extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<View>
				<Text>bruh</Text>
			</View>
		);
	}
}

export class PreviewMain extends Component {
	constructor(props) {
		super(props);
		this.state = { sub: this.findSubject(this.props.homework.subjectId) };
	}
	findSubject(id) {
		for (let subIndex = 0; subIndex < users.subjects.length; subIndex++) {
			if (users.subjects[subIndex].subjectId == id) {
				return users.subjects[subIndex];
			}
		}
	}

	renderView() {
		if (this.props.editMode == false) {
			console.log(this.state.sub);
			return (
				<Preview
					name={this.props.homework.name}
					desc={this.props.homework.description}
					due={new Date().toString().slice(-new Date().toString().length, 10)}
					sub={this.state.sub}
				/>
			);
		} else {
			return <EditPreview />;
		}
	}
	render() {
		return <View>{this.renderView()}</View>;
	}
}

const styles = {
	viewContainer: { backgroundColor: '#292C30', height: '100%' },
	homeworkContainer: {
		backgroundColor: '#2F3439',
		margin: 10,
		alignContent: 'center',
		borderColor: 'rgba(255, 255, 255, 0.03)',
		shadowColor: '#000',
		shadowOffset: {
			width: 0,
			height: 6
		},
		shadowOpacity: 0.39,
		shadowRadius: 8.3,
		elevation: 13
	},
	Text: { color: 'white' }
};
