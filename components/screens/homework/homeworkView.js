import React, { Component } from 'react';
import { PreviewMain, RightHeader } from '../templates/preview/previewType';
import { users } from '../user';

export default class HomeworkView extends Component {
	constructor(props) {
		super(props);
		console.log();
		this.state = {
			homeworkIndex: getIndex(this.props.navigation.getParam('hw', '01')),
			editMode: false
		};
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
	getIndex(id){

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
	render() {
		return (
			<PreviewMain
				editMode={this.state.editMode}
				homework={users.homework[this.state.homeworkIndex]}
			/>
		);
	}
}
