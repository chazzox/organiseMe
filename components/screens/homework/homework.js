import React, { Component } from 'react';
import { Dimensions, ScrollView, Text, View } from 'react-native';
import { SceneMap } from 'react-native-tab-view';
import TabName from '../templates/weekViewMain/weekView';
import styles from '../templates/weekViewMain/weekView.style';

import { users } from '../user';

class HWobj extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		let dueText, body, name, due;
		// conditional rendering statement
		if (this.props.homework) {
			dueText = this.props.dateDue;
		}
		if (this.props.homework) {
			name = this.props.homework.name;
			body = this.props.homework.description;
			due = `${new Date(this.props.homework.due).getDate()}/${new Date(
				this.props.homework.due,
			).getMonth()}/${new Date(this.props.homework.due).getFullYear()}`;
			dueText = 'Due:  ';
		}
		return (
			<View style={styles.block}>
				<Text style={styles.blockTextMain}>{name}</Text>
				<Text style={styles.blockTextBody}>
					{body}
					<Text
						style={{
							color: 'white',
							fontWeight: 'bold',
							marginTop: 7,
						}}
					>
						{'\n'}
						{dueText}
						<Text style={{ color: '#007Aff' }}>{due}</Text>
					</Text>
				</Text>
			</View>
		);
	}
}

function createSchedule() {
	let newDay;
	let today = new Date();
	let homeworkArr = [[], [], [], [], []];
	let homeworkArrIndex = 0;
	for (var i = 0; i < 7; i++) {
		newDay = new Date(today.getFullYear(), today.getMonth(), today.getDate() + i);
		if (newDay.getDay() != 0 && newDay.getDay() != 6) {
			for (let hwIterator = 0; hwIterator < users.homework.length; hwIterator++) {
				if (newDay.getTime() == users.homework[hwIterator].due) {
					homeworkArr[homeworkArrIndex].push(users.homework[hwIterator]);
				}
			}
			homeworkArrIndex++;
		}
	}
	return homeworkArr;
}

class DayView extends Component {
	constructor(props) {
		super(props);
		this.state = {
			//state is by default an object
			homeworkArray: createSchedule()[this.props.day],
		};
	}
	renderTableData() {
		return this.state.homeworkArray.map((homework, index) => {
			return <HWobj key={index} homework={homework} />;
		});
	}
	render() {
		return (
			<View style={styles.screen}>
				<ScrollView>{this.renderTableData()}</ScrollView>
			</View>
		);
	}
}

export default class homeworkMain extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<TabName
				style={{ height: 90 }}
				screenBoi={SceneMap({
					currentDay: () => <DayView day={0} />,
					nextDay: () => <DayView day={1} />,
					nextDay2: () => <DayView day={2} />,
					nextDay3: () => <DayView day={3} />,
					nextDay4: () => <DayView day={4} />,
				})}
			/>
		);
	}
}
