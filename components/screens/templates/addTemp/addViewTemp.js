import React, { Component } from 'react';
// importing elements needed to create structure of view
import { Text } from 'react-native';

export default class TempView extends Component {
	render() {
		return <Text>{this.props.Test}</Text>;
	}
}
