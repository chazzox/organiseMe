import React, { Component } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';

import { PreviewMain } from '../templates/preview/previewType';
import { users } from '../user';

export default class HomeworkView extends Component {
	constructor(props) {
		super(props);
		this.state = {
			homeworkIndex: this.getHomework(this.props.id),
			editMode: false
		};
	}

	componentDidMount() {
		this.props.navigation.setParams({
			editMode: this.state.editMode,
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
		modeBool = true
		return {
			headerRight: (
				<TouchableOpacity
					onPress={() => {
						modeBool = !modeBool;
						console.log(modeBool)
						params.toggleViewMode();
					}}
					style={{ paddingRight: 5 }}>
					<Text style={{ fontSize: 15, color: 'white', fontWeight: 'bold' }}>
						{mode[modeBool === true ? 1 : 0]}
					</Text>
				</TouchableOpacity>
			)
		};
	};

	getHomework(id) {
		for (let hwIndex = 0; hwIndex < users.homework.length; hwIndex++) {
			if (users.homework[hwIndex].id == id) {
				return hwIndex;
			}
		}
	}
	render() {
		return <PreviewMain editMode={this.state.editMode} homework={this.state.homeworkIndex} />;
	}
}
