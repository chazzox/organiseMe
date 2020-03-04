import React, { Component } from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';

import { PickerExample } from '../generalImport';
import { users } from '../../user';

class Preview extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<ScrollView
				contentContainerStyle={{ alignItems: 'center' }}
				style={styles.viewContainer}>
				<View style={[styles.homeworkContainer, { marginTop: 25 }]}>
					<Text style={styles.containerTitle}>Name</Text>
					<Text style={[styles.Text, { marginBottom: 0}]}>{this.props.name}</Text>
				</View>
				<View style={styles.homeworkContainer}>
					<Text style={styles.containerTitle}>Description</Text>
					<Text style={styles.Text}>{this.props.desc}</Text>

					<Text style={styles.containerTitle}>Due</Text>
					<Text style={styles.Text}>{this.props.due}</Text>

					<Text style={styles.containerTitle}>Subject</Text>
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
			return (
				<Preview
					name={this.props.homework.name}
					desc={this.props.homework.description}
					due={new Date(this.props.homework.due)
						.toString()
						.slice(-new Date().toString().length, 10)}
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

export class RightHeader extends Component {
	constructor(props) {
		super(props);
		this.state = {
			mode: ['Edit', 'Save'],
			modeBool: false
		};
	}
	render() {
		return (
			<TouchableOpacity
				onPress={() => {
					this.setState(prevState => ({
						modeBool: !prevState.modeBool
					}));
					this.props.nav.state.params.toggleViewMode();
				}}
				style={{ paddingRight: 5 }}>
				<Text style={{ fontSize: 17, color: 'white', fontWeight: 'bold' }}>
					{this.state.mode[this.state.modeBool === true ? 1 : 0]}
				</Text>
			</TouchableOpacity>
		);
	}
}

const styles = {
	viewContainer: { backgroundColor: '#292C30', height: '100%' },
	homeworkContainer: {
		backgroundColor: '#2F3439',
		padding: 15,
		margin: 10,
		marginBottom: 15,
		marginBottom: 25,
		alignContent: 'center',
		borderColor: 'rgba(255, 255, 255, 0.03)',
		borderRadius: 15,
		shadowColor: '#000',
		shadowOffset: {
			width: 0,
			height: 6
		},
		shadowOpacity: 0.39,
		shadowRadius: 8.3,
		elevation: 13,
		width: '80%'
	},
	containerTitle: {
		color: 'white',
		fontSize: 25,
		fontWeight: 'bold',
		marginTop:5
	},
	Text: { color: 'white', fontSize: 20,marginBottom:20 }
};
