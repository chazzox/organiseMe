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
		let dueText;
		// conditional rendering statement
		if (this.props.dateDue) {
			dueText = this.props.dateDue;
		}
		if (this.props) {
			blockTextBody = 'No homework for this day';
		}
		return (
			<View style={styles.block}>
				<Text style={styles.blockTextMain}>{this.props.main}</Text>
				<Text style={styles.blockTextBody}>
					{this.props.body}
					<Text
						style={{
							color: 'white',
							fontWeight: 'bold',
							marginTop: 7
						}}>
						{dueText}
						<Text style={{ color: '#007Aff' }}>{this.props.date}</Text>
					</Text>
				</Text>
			</View>
		);
	}
}
class Dayobj extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<View style={styles.screen}>
				<ScrollView>{...this.props}</ScrollView>
			</View>
		);
	}
}

export default class homeworkMain extends Component {
	constructor() {
		this.createSchedule = this.createSchedule.bind(this);
		this.RenderSchedule = this.RenderSchedule.bind(this);
	}
	createSchedule() {
		let homeworkArr = [[], [], [], [], [], []];
		for (let hwIterator = 0; hwIterator < users.homework.length; hwIterator++) {
			if (
				new Date(
					new Date().getFullYear(),
					new Date().getMonth(),
					new Date().getDate() + 7
				).getTime() > users.homework[hwIterator].due &&
				new Date(
					new Date().getFullYear(),
					new Date().getMonth(),
					new Date().getDate()
				).getTime() <= users.homework[hwIterator].due
			) {
				honestlyIHaveNoIdea = Math.floor(
					new Date(
						new Date().getFullYear(),
						new Date().getMonth(),
						new Date().getDate() + 7
					).getTime() -
						new Date(users.homework[hwIterator].due - 1).getTime() / 86400000
				);
				console.log(honestlyIHaveNoIdea);
				homeworkArr[honestlyIHaveNoIdea].push(users.homework[hwIterator]);
			}
			homeworkArr[new Date(users.homework[hwIterator].due - 1).getDay()].sort(function(a, b) {
				return a.subjectId - b.subjectId;
			});
		}

		return homeworkArr;
	}
	RenderSchedule() {
		weeksHomework = this.createSchedule();
		let dayRender = [];
		for (var i = 0; i < weeksHomework.length; i++) {
			ppppppp;
		}
		return [{}, {}, {}, {}, {}];
	}
	componentDidMount() {
		screenArr = RenderSchedule();
	}

	render() {
		return (
			<TabName
				style={{ height: 90 }}
				screenBoi={SceneMap({
					Monday: screenArr[0],
					Tuesday: screenArr[1],
					Wednesday: screenArr[2],
					Thursday: screenArr[3],
					Friday: screenArr[5]
				})}
			/>
		);
	}
}
