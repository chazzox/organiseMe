import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text, View, Button, ScrollView, StyleSheet } from 'react-native';
import { StackActions, NavigationActions } from 'react-navigation';

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
	}

	render() {
		return (
			<View style={styles.ViewBox}>
				<Text style={styles.userName}>Hey, Charlie!</Text>
				<ScrollView style={styles.ScrollView}>
					<View style={styles.container}>
						<DashContainer
							title='Add new homework'
							body='Use this section to add your homework quickly!'
							buttonTitle='Quick Add'
							nav={() => this.props.navigation.navigate('addHW')}
						/>
						<DashContainer
							title="Don't know what homework you have?"
							body='Click the link below to view your coming weeks homwork'
							buttonTitle='homework boi'
							nav={() =>
								this.props.navigation.navigate('homeworkMain')
							}
						/>
						<DashContainer
							title='big bruh'
							body='bruh bruh'
							buttonTitle='bruh bruh, bruh bruh'
							nav={() =>
								this.props.navigation.navigate('homeworkMain')
							}
						/>
						<DashContainer
							title='big bruh'
							body='bruh bruh'
							buttonTitle='bruh bruh, bruh bruh'
							nav={() =>
								this.props.navigation.navigate('homeworkMain')
							}
						/>
					</View>
				</ScrollView>
			</View>
		);
	}
}
export default connect(null, null)(DashView);
