import React, { Component } from 'react';
import { View, Text, ScrollView, TouchableOpacity, TextInput } from 'react-native';

import { users } from '../../user';
import styles from './preview.style';

class Preview extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<ScrollView contentContainerStyle={{ alignItems: 'center' }} style={styles.viewContainer}>
				<View style={[styles.homeworkContainer, { marginTop: 25 }]}>
					<Text style={styles.containerTitle}>Name</Text>
					<Text style={[styles.Text, { marginBottom: 0 }]}>{this.props.name}</Text>
				</View>
				<View style={styles.homeworkContainer}>
					<Text style={styles.containerTitle}>Description</Text>
					<Text style={styles.Text}>{this.props.desc}</Text>

					<Text style={styles.containerTitle}>Due</Text>
					<Text style={styles.Text}>{this.props.due}</Text>

					<Text style={styles.containerTitle}>Subject</Text>
					<Text style={styles.Text}>{this.props.sub}</Text>
				</View>
			</ScrollView>
		);
	}
}

class EditPreview extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name: this.props.name,
			desc: this.props.desc,
			due: this.props.due,
			sub: this.props.sub
		};
	}
	handleChangeState(indexvalue, value) {
		switch (indexvalue) {
			case 0:
				this.setState({ name: value });
				break;
			case 1:
				this.setState({ desc: value });
				break;
			case 2:
				this.setState({ due: value });
				break;
			case 3:
				this.setState({ sub: value });
				break;
		}
	}
	render() {
		return (
			<ScrollView contentContainerStyle={{ alignItems: 'center' }} style={styles.viewContainer}>
				<Text style={{ color: 'white', fontWeight: 'bold', marginTop: 25, fontSize: 25 }}>
					Press on the things you would like to change
				</Text>
				<View style={[styles.homeworkContainer, { marginTop: 25 }]}>
					<Text style={styles.containerTitle}>Name</Text>
					<TextInput
						style={[styles.Text, { marginBottom: 0 }]}
						placeholder={this.state.name}
						value={this.state.name}
						placeholderTextColor='#fff'
						onChangeText={name => this.handleChangeState(0, name)}
					/>
				</View>
				<View style={styles.homeworkContainer}>
					<Text style={styles.containerTitle}>Description</Text>
					<TextInput
						style={styles.Text}
						placeholder={this.state.desc}
						value={this.state.desc}
						placeholderTextColor='#fff'
						onChangeText={desc => this.handleChangeState(1, desc)}
						multiline={true}
					/>
					<Text style={styles.containerTitle}>Due</Text>
					<TextInput
						style={styles.Text}
						placeholder={this.state.due}
						value={this.state.due}
						placeholderTextColor='#fff'
						onChangeText={due => this.handleChangeState(2, due)}
					/>

					<Text style={styles.containerTitle}>Subject</Text>
					<TextInput
						style={styles.Text}
						placeholder={this.state.sub}
						value={this.state.sub}
						placeholderTextColor='#fff'
						onChangeText={sub => this.handleChangeState(3, sub)}
					/>
				</View>
			</ScrollView>
		);
	}
}

export class PreviewMain extends Component {
	constructor(props) {
		super(props);
		this.state = {
			eventName: this.props.event.name,
			eventDue: this.props.event.due,
			eventDesc: this.props.event.description,
			eventSubject: this.getSub(this.props.event.subjectId)
		};
	}

	getSub(id) {
		for (let subIndex = 0; subIndex < users.subjects.length; subIndex++) {
			if (users.subjects[subIndex].subjectId == id) {
				return users.subjects[subIndex].name;
			}
		}
	}

	renderView() {
		if (this.props.editMode == false) {
			return (
				<Preview
					name={this.state.eventName}
					desc={this.state.eventDesc}
					due={new Date(this.state.eventDue)
						.toString()
						.slice(-new Date().toString().length, 10)}
					sub={this.state.eventSubject}
				/>
			);
		} else {
			return (
				<EditPreview
					name={this.state.eventName}
					desc={this.state.eventDesc}
					due={new Date(this.state.eventDue)
						.toString()
						.slice(-new Date().toString().length, 10)}
					sub={this.state.eventSubject}
					toggle={this.props.togFunc}
				/>
			);
		}
	}
	render() {
		return <View>{this.renderView()}</View>;
	}
}

export class RightHeader extends Component {
	constructor(props) {
		super(props);
		this.state = {
			mode: ['Edit', 'Save'],
			modeBool: false
		};
	}
	render() {
		return (
			<TouchableOpacity
				onPress={() => {
					this.setState(prevState => ({
						modeBool: !prevState.modeBool
					}));
					this.props.nav.state.params.toggleViewMode();
				}}
				style={{ paddingRight: 5 }}>
				<Text style={{ fontSize: 17, color: 'white', fontWeight: 'bold' }}>
					{this.state.mode[this.state.modeBool === true ? 1 : 0]}
				</Text>
			</TouchableOpacity>
		);
	}
}
