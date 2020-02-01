import React, { Component } from 'react';
import { TextInput, StyleSheet } from 'react-native';

export class UserInput extends Component {
	constructor(props){
		super(props)
		this.state={
			style: styles.listItem
		}
	}
	render() {
		if (this.props.extraStyle) {
			this.state.style =  StyleSheet.flatten([styles.listItem, this.props.extraStyle])
		}
		return (
			<TextInput
				style={this.state.style}
				autoCapitalize='none'
				autoCorrect={false}
				maxLength={15}
				placeholderTextColor='white'
				{...this.props}
			/>
		);
	}
}

const styles = StyleSheet.create({
	textInput: {
		width: 300,
		margin: 10,
		color: 'black',
		fontSize: 15,
		borderWidth: 2,
		borderRadius: 20,
		paddingLeft: 15,
		borderWidth: 0,
		padding: 10
	}
});
