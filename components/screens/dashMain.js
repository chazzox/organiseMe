import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text, View, Button, ScrollView, StyleSheet } from 'react-native';
// importing style sheet
import styles from './dashView.style';

import { users } from './user';

class DashContainer extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<View style={styles.dashCont}>
				<Text style={styles.title}>{this.props.title}</Text>
				<Text style={styles.body}>{this.props.body}</Text>
				{this.props.optionalComponents}
				<View style={styles.but}>
					<Button
						title={this.props.buttonTitle}
						onPress={this.props.nav}
						style={styles.button}
					/>
				</View>
			</View>
		);
	}
}

class DashView extends Component {
	constructor(props) {
		super(props);
		this.findNew = this.findNew.bind(this);
		this.navigation = this.props.navigation;
		this.state = {
			UserName: users.name,
			nextHW: this.findNew(users.homework),
			nextExam: this.findNew(users.exams)
		};
	}

	findNew(userJSON) {
		let indexStore;
		let comparitor = new Date().getTime();
		for (let i = 1; i < userJSON.length; i++) {
			if (comparitor <= userJSON[i].due && new Date().getTime() >= userJSON[i].due) {
				comparitor = userJSON[i].due;
				indexStore = i;
			}
		}
		if(indexStore==undefined){

			return{name:'no new'}
		}
		else{
			return userJSON[indexStore];
		}
	}

	render() {
		return (
			<View style={styles.ViewBox}>
				<ScrollView style={styles.ScrollView}>
					<Text style={styles.userName}>Hey, {this.state.UserName}!</Text>
					<View style={styles.container}>
						<DashContainer
							title='Add new homework'
							body='Use this section to add your homework quickly!'
							buttonTitle='Add Homework'
							nav={() => this.navigation.navigate('addHW')}
						/>
						<DashContainer
							title='Add new Exam'
							body='Use this section to add your exams quickly!'
							buttonTitle='Add new Exam'
							nav={() => this.navigation.navigate('examAdd')}
						/>
						<DashContainer
							title='Next piece of homework'
							body={`Your next peice of homework due is: `}
							buttonTitle='click here to see info'
							optionalComponents={
								<Text style={styles.eventShowcase}>{this.state.nextHW.name}</Text>
							}
							nav={() =>
								this.navigation.navigate('homeworkView', {
									hw: this.state.nextHW.id
								})
							}
						/>

						<DashContainer
							title='Next Exam'
							body={`Your next peice of homework due is: ${this.state.nextExam.name}`}
							buttonTitle='click here to see info'
							optionalComponents={
								<Text style={styles.eventShowcase}>{this.state.nextExam.name}</Text>
							}
							nav={() =>
								this.navigation.navigate('examView', {
									hw: this.state.nextExam.id
								})
							}
						/>
						<View style={[styles.dashCont, { marginBottom: 45 }]}>
							<Text style={styles.title}>Can't find what you're looking for?</Text>
							<Text style={[styles.body, { marginBottom: 5, marginTop: 5 }]}>
								Click the icon dashboard icon in the top left to explore more options
							</Text>
						</View>
					</View>
				</ScrollView>
			</View>
		);
	}
}

const mapDispatchToProps = dispatch => ({
	login: (credentials, navigation) => dispatch(login(credentials, navigation))
});

export default connect(mapDispatchToProps, null)(DashView);
