import React, { Component } from 'react';
import TabName from '../templates/weekViewMain/weekView';

export default class homeworkMain extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return <TabName style={{ height: 90 }} mode='hw' nav={this.props.navigation} />;
	}
}
