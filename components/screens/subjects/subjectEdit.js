import React, { Component } from 'react';
import { Text, View, TextInput, ScrollView } from 'react-native';

import styles from './sujectStyle.style';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default class subjectEdit extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name: this.props.navigation.state.params.name,
			teacher: this.props.navigation.state.params.teacher
		};
	}
	handleChangeState(indexvalue, value) {
		switch (indexvalue) {
			case 0:
				this.setState({ name: value });
				break;
			case 1:
				this.setState({ teacher: value });
				break;
		}
	}
	render() {
		return (
			<View style={styles.main}>
				<ScrollView style={{ width: '100%' }}>
					<View style={{ alignItems: 'center', width: '100%' }}>
						<View style={styles.editContainer}>
							<Text style={{ fontWeight: 'bold', color: '#fff', fontSize: 20 }}>
								Press on the values you want to change
							</Text>
							<TextInput
								style={styles.SubjectTitle}
								placeholder={this.state.name}
								value={this.state.name}
								placeholderTextColor='#fff'
								onChangeText={name => this.handleChangeState(0, name)}
							/>
							<TextInput
								style={styles.SubjectTeacher}
								placeholder={this.state.teacher}
								value={this.state.teacher}
								placeholderTextColor='#fff'
								onChangeText={teacher => this.handleChangeState(1, teacher)}
							/>
						</View>
						<View style={styles.buttonContainer}>
							<TouchableOpacity>
								<View style={styles.deleteButton}>
									<Text style={styles.buttonText}>Delete Subject</Text>
								</View>
							</TouchableOpacity>

							<TouchableOpacity>
								<View style={styles.saveButton}>
									<Text style={styles.buttonText}>Save Changes</Text>
								</View>
							</TouchableOpacity>
						</View>
					</View>
				</ScrollView>
			</View>
		);
	}
}
