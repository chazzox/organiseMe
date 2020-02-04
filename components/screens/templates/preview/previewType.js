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
				<View style={style.homeworkContainer}>
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
		return <Text>bruh</Text>;
	}
}

export default class PreviewMain extends Component {
	constructor(props) {
		super(props);
		this.state = {
			editMode: false
		};
	}
	renderView() {
		if (this.state.editMode == false) {
			return <Preview />;
		} else {
			return <EditPreview />;
		}
	}
	render() {
		return <View>{this.renderView()};</View>;
	}
}

const styles = {
	viewContainer: { blackgroundColor: 'black' },
	homeworkContainer: {
		bacgroundColor: 'white'
	}
};
