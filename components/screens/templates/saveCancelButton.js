import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default class ButtonSaveCancel extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<View style={styles.buttonContainer}>
				<TouchableOpacity onPress={this.props.cancelFunc}>
					<View style={styles.deleteButton}>
						<Text style={styles.buttonText}>{this.props.cancel}</Text>
					</View>
				</TouchableOpacity>

				<TouchableOpacity onPress={this.props.confirmFunc}>
					<View style={styles.saveButton}>
						<Text style={styles.buttonText}>{this.props.confirm}</Text>
					</View>
				</TouchableOpacity>
			</View>
		);
	}
}
const styles = {
	buttonContainer: {
		flexDirection: 'row',
		alignItems: 'center'
	},
	buttonText: {
		fontWeight: 'bold',
		fontSize: 20,
		color: '#fff'
	},
	saveButton: {
		padding: 15,
		margin: 5,
		borderRadius: 15,
		marginTop: 25,
		backgroundColor: '#49c449'
	},
	deleteButton: {
		padding: 15,
		margin: 5,
		marginTop: 25,
		borderRadius: 15,
		backgroundColor: '#d84a4a'
	}
};
