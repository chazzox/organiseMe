import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';

import { PickerExample } from '../generalImport';

class Preview extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<ScrollView style={styles.viewContainer}>
				<View style={styles.homeworkContainer}>
					<Text>Name: {this.props.name}</Text>
					<Text>Description: {this.props.desc}</Text>
					<Text>Due: {this.props.due}</Text>
					<Text>Subject: {this.props.due}</Text>
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
	}
	renderView() {
		if (this.props.editMode == false) {
			return <Preview name='lol' desc='lmao' due='test' />;
		} else {
			return <EditPreview />;
		}
	}
	render() {
		return <View>{this.renderView()}</View>;
	}
}

const styles = {
	viewContainer: { backgroundColor: 'black',height:'100%' },
	homeworkContainer: {
		backgroundColor: 'white'
	}
};
