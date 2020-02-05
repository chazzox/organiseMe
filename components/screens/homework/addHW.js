import React, { Component } from 'react';
import { View, Text } from 'react-native';

// our props based adding template
import { AddTemplate } from '../templates/addTemp/addViewTemp';

export default class addHW extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<AddTemplate
				placholder1='Enter homework name here'
				placholder2='Enter the description here'
				placholder3='what is the due date?'
				nav={this.props.navigation}
				formType='Homework'
			/>
		);
	}
}
