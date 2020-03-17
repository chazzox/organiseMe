import React, { Component } from 'react';
import TabName from '../templates/weekViewMain/weekView';

export default class examMain extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return <TabName style={{ height: 90 }} mode='ex' nav={this.props.navigation} />;
	}
}
