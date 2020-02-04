import React, { Component } from 'react';
import { Text, View } from 'react-native';

import { PreviewMain } from '../templates/preview/previewType';
import { users } from '../user';
import { TouchableOpacity } from 'react-native-gesture-handler';
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
			toggleViewMode: () => {
				console.log('toggled');
				this.setState(prevState => ({
					editMode: !this.state.editMode
				}));
			}
		});
	}
	static navigationOptions = ({ navigation }) => {
		const { params = {} } = navigation.state;
		return {
			headerRight: (
				<TouchableOpacity onPress={() => params.toggleViewMode()} style={{ paddingRight: 5 }}>
					<Text style={{ fontSize: 15, color: 'white', fontWeight: 'bold' }}>Edit</Text>
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
		console.log('render was ran :'+this.state.editMode)
		return <PreviewMain editMode={this.state.editMode} homework={this.state.homeworkIndex} />;
	}
}
