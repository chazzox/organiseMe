import React, { Component } from 'react';
import { Dimensions, ScrollView, Text, View } from 'react-native';
import { SceneMap } from 'react-native-tab-view';
import TabName from '../templates/weekViewMain/weekView';
import styles from '../templates/weekViewMain/weekView.style';

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
						<Text style={{ color: '#007Aff' }}>
							{this.props.date}
						</Text>
					</Text>
				</Text>
			</View>
		);
	}
}

const Monday = () => (
	<View style={styles.screen}>
		<ScrollView>
			<HWobj
				main='Maths - header'
				body={`descriptions of the homework, its a test lmao also please do this that and the other lmaoooooooooooo${'\n'}`}
				date='12/07/20'
			/>
			<HWobj />
		</ScrollView>
	</View>
);

const screen = () => (
	<View style={styles.screen}>
		<ScrollView>
			<HWobj />
			<HWobj />
			<HWobj />
			<HWobj />
		</ScrollView>
	</View>
);

export default class homeworkMain extends Component {
	render() {
		return (
			<TabName
				style={{ height: 90 }}
				screenBoi={SceneMap({
					Monday: Monday,
					Tuesday: Monday,
					Wednesday: screen,
					Thursday: screen,
					Friday: screen
				})}
			/>
		);
	}
}
