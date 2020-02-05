import React, { Component } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';

import { PreviewMain } from '../templates/preview/previewType';
import { users } from '../user';

class RightHeader extends Component {
	constructor(props) {
		super(props);
		this.state = {
			mode: ['edit homework', 'save changes'],
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
				<Text style={{ fontSize: 15, color: 'white', fontWeight: 'bold' }}>
					{this.state.mode[this.state.modeBool === true ? 1 : 0]}
				</Text>
			</TouchableOpacity>
		);
	}
}
export default class HomeworkView extends Component {
	constructor(props) {
		super(props);
		this.state = {
			homeworkIndex: 4,
			editMode: false
		};
	}
	static navigationOptions = ({ navigation }) => {
		const { params = {} } = navigation.state;
		mode = ['edit', 'save'];
		modeBool = true;
		return {
			title: params.homeworkTitle,
			headerRight: <RightHeader nav={navigation} />
		};
	};
	componentDidMount() {
		this.props.navigation.setParams({
			editMode: this.state.editMode,
			homeworkTitle: users.homework[this.state.homeworkIndex].name,
			toggleViewMode: () => {
				this.setState(prevState => ({
					editMode: !this.state.editMode
				}));
			}
		});
	}
	render() {
		return <PreviewMain editMode={this.state.editMode} homework={users.homework[this.state.homeworkIndex]} />;
	}
}
