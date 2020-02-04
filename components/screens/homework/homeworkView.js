import React, { Component } from 'react';
import { Text, View } from 'react-native';

import { PreviewMain } from '../templates/preview/previewType';
import { users } from '../user';

export default class HomeworkView extends Component {
	constructor(props) {
		super(props);
		this.state = {
			homeworkIndedx: getHomework(this.props.id)
		};
	}
	getHomework(id) {
		for (let hwIndex = 0; hwIndex < users.homework.length; hwIndex++) {
			if (users.homework[hwIndex].id == id) {
				return hwIndex;
			}
		}
	}
	render() {
		return <PreviewMain homework={homework} />;
	}
}
