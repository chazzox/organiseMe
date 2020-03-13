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
	render() {
		return (
			<View style={styles.main}>
				<ScrollView style={{ width: '100%' }}>
					<View style={{ alignItems: 'center', width: '100%' }}>
						<View style={styles.editContainer}>
							<Text>{this.state.name}</Text>
							<TextInput placeholder={this.state.name} />
							<Text>{this.state.teacher}</Text>
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
