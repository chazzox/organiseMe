import React, { Component } from 'react';
import { View, Text } from 'react-native';

import { AddTemplate } from '../templates/addTemp/addViewTemp';

export default class addHW extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<AddTemplate
				placholder1='Enter homework name here'
				placholder2='lmao2'
				placholder3='lmao3'
			/>
		);
	}
}
