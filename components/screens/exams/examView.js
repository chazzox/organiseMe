import React, { Component } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';

import { PreviewMain, RightHeader } from '../templates/preview/previewType';
import { users } from '../user';

export default class examView extends Component {
	constructor(props) {
		super(props);
		this.state = {
			editMode: false,
			event: this.props.navigation.state.params.event
		};
		this.props.navigation.setParams({
			editMode: this.state.editMode,
			examTitle: this.state.event.name,
			toggleViewMode: () => {
				this.setState(prevState => ({
					editMode: !this.state.editMode
				}));
			}
		});
	}
	static navigationOptions = ({ navigation }) => {
		const { params = {} } = navigation.state;
		mode = ['edit', 'save'];
		modeBool = true;
		return {
			title: params.examTitle,
			headerRight: <RightHeader nav={navigation} />
		};
	};
	render() {
		return (
			<PreviewMain editMode={this.state.editMode} event={this.state.event} />
		);
	}
}
