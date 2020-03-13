import React, { Component } from 'react';
import { PreviewMain, RightHeader } from '../templates/preview/previewType';

export default class HomeworkView extends Component {
	constructor(props) {
		super(props);
		this.state = {
			editMode: false,
			event: this.props.navigation.state.params.event
		};
		this.props.navigation.setParams({
			homeworkTitle: this.state.event.name,
			toggleViewMode: () => {
				this.setState(prevState => ({
					editMode: !this.state.editMode
				}));
			}
		});
	}
	static navigationOptions = ({ navigation }) => {
		mode = ['edit', 'save'];
		modeBool = true;
		return {
			headerRight: <RightHeader nav={navigation} />
		};
	};
	render() {
		return <PreviewMain editMode={this.state.editMode} event={this.state.event} />;
	}
}
