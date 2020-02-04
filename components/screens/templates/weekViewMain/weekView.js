import React, { Component } from 'react';
import { Dimensions, ScrollView, Text, View } from 'react-native';
import Animated from 'react-native-reanimated';
import { TabView, SceneMap } from 'react-native-tab-view';
import styles from './weekView.style';
import { users } from '../../user';
import { TouchableOpacity } from 'react-native-gesture-handler';
const defaultRoute = [
	{ key: 'currentDay' },
	{ key: 'nextDay' },
	{ key: 'nextDay2' },
	{ key: 'nextDay3' },
	{ key: 'nextDay4' }
];
const dayNameArray = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];

function TabLabel({ navigationState, position, index, children }) {
	// function to creater opacity of text for next day view
	const opacity = React.useMemo(() => {
		const inputRange = navigationState.routes.map((NotUsed, i) => i);
		// returns a vlue of apaicty based on the current view vs the
		return Animated.interpolate(position, {
			inputRange,
			outputRange: inputRange.map(i => (i === index ? 1 : 0.4))
		});
	}, []);

	return <Animated.Text style={[styles.label, { opacity }]}>{children}</Animated.Text>;
}

function TabBar({ navigationState, layout, position }) {
	const translateX = React.useMemo(() => {
		const inputRange = navigationState.routes.map((_, i) => i);
		return Animated.interpolate(position, {
			inputRange,
			outputRange: inputRange.map(i => (-layout.width / 1.5) * i)
		});
	}, []);

	return (
		<Animated.View
			style={[
				styles.tabbar,
				{
					width: (layout.width / 1.5) * navigationState.routes.length,
					transform: [{ translateX }]
				}
			]}>
			{navigationState.routes.map((route, i) => (
				<TabLabel navigationState={navigationState} position={position} index={i} key={i}>
					{
						dayNameArray
							.slice(new Date().getDay() - 1)
							.concat(dayNameArray.slice(0, new Date().getDay() - 1))[i]
					}
				</TabLabel>
			))}
		</Animated.View>
	);
}
export function createSchedule(mode) {
	let newDay, tasks;
	if (mode == 'hw') {
		tasks = users.homework;
	} else if (mode == 'ex') {
		tasks = users.exams;
	}
	let today = new Date();
	let homeworkArr = [[], [], [], [], []];
	let homeworkArrIndex = 0;
	for (var i = 0; i < 7; i++) {
		newDay = new Date(today.getFullYear(), today.getMonth(), today.getDate() + i);
		if (newDay.getDay() != 0 && newDay.getDay() != 6) {
			for (let hwIterator = 0; hwIterator < tasks.length; hwIterator++) {
				if (newDay.getTime() == tasks[hwIterator].due) {
					homeworkArr[homeworkArrIndex].push(tasks[hwIterator]);
				}
			}
			homeworkArrIndex++;
		}
	}
	return homeworkArr;
}

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
				this.props.homework.due
			).getMonth()}/${new Date(this.props.homework.due).getFullYear()}`;
			dueText = 'Due:  ';
		} else {
			name = 'no ' + (this.props.mode == 'hw' ? 'homework' : 'exams') + ' today';
			body = 'keep scrolling fool, there is no sustenance for you here';
		}
		return (
			<TouchableOpacity disabled={this.props.homework ? false : true} style={styles.block}>
				<Text style={styles.blockTextMain}>{name}</Text>
				<Text style={styles.blockTextBody}>
					{body}
					<Text
						style={{
							color: 'white',
							fontWeight: 'bold',
							marginTop: 7
						}}>
						{'\n'}
						{dueText}
						<Text style={{ color: '#007Aff' }}>{due}</Text>
					</Text>
				</Text>
			</TouchableOpacity>
		);
	}
}

class DayView extends Component {
	constructor(props) {
		super(props);
		this.state = {
			//state is by default an object
			homeworkArray: createSchedule(this.props.mode)[this.props.day],
			dayView: null
		};
	}
	componentDidMount() {
		this.setState({ dayView: this.renderTableData() });
	}
	renderTableData() {
		let dayARR = this.state.homeworkArray.map((homework, index) => {
			return <HWobj key={index} homework={homework} />;
		});
		if (dayARR.length == 0) {
			return <HWobj mode={this.props.mode} />;
		}
		return dayARR;
	}
	render() {
		return (
			<View style={styles.screen}>
				<ScrollView>{this.state.dayView}</ScrollView>
			</View>
		);
	}
}

export default class TabName extends React.Component {
	state = {
		index: 0,
		routes: defaultRoute
	};

	render() {
		return (
			<TabView
				navigationState={this.state}
				renderTabBar={props => <TabBar {...props} />}
				renderScene={SceneMap({
					currentDay: () => <DayView mode={this.props.mode} day={0} />,
					nextDay: () => <DayView mode={this.props.mode} day={1} />,
					nextDay2: () => <DayView mode={this.props.mode} day={2} />,
					nextDay3: () => <DayView mode={this.props.mode} day={3} />,
					nextDay4: () => <DayView mode={this.props.mode} day={4} />
				})}
				onIndexChange={index => this.setState({ index })}
				initialLayout={{ width: Dimensions.get('window').width }}
				style={styles.container}
			/>
		);
	}
}
