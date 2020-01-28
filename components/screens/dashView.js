import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text, View, Button, ScrollView, StyleSheet } from 'react-native';
import { users } from './user';
// importing style sheet
import styles from './dashView.style';

class DashContainer extends Component {
	render() {
		return (
			<View style={styles.dashCont}>
				<Text style={styles.title}>{this.props.title}</Text>
				<Text style={styles.body}>{this.props.body}</Text>
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
	findNew(obj) {
		console.log(obj);
		const lol = {
			name: 'bruh',
			id: 2
		};
		return lol;
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
							buttonTitle='Quick Add'
							nav={() => this.navigation.navigate('addHW')}
						/>
						<DashContainer
							title="Don't know what homework you have?"
							body='Click the link below to view your coming weeks homwork'
							buttonTitle='homework boi'
							nav={() => this.navigation.navigate('homeworkMain')}
						/>
						<DashContainer
							title='Next piece of homework'
							body={`Your next peice of homework due is: ${this.state.nextHW.name}`}
							buttonTitle='click here to see info'
							nav={() =>
								this.navigation.navigate('', {
									hw: this.state.nextHW.id
								})
							}
						/>
						<DashContainer
							title='Next Exam'
							body={`Your next peice of homework due is: ${this.state.nextExam.name}`}
							buttonTitle='click here to see info'
							nav={() =>
								this.navigation.navigate('', {
									hw: this.state.nextExam.id
								})
							}
						/>
						<DashContainer
							title='big bruh'
							body='bruh bruh'
							buttonTitle='bruh bruh, bruh bruh'
							nav={() => this.navigation.navigate('')}
							style={{}}
						/>
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
