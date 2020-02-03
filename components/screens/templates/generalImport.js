import React, { Component } from 'react';
import { TextInput, StyleSheet, View, Picker, Text } from 'react-native';

export class UserInput extends Component {
	constructor(props) {
		super(props);
		this.state = {
			style: styles.listItem
		};
	}
	render() {
		if (this.props.extraStyle) {
			this.state.style = StyleSheet.flatten([styles.listItem, this.props.extraStyle]);
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

export class PickerExample extends Component {
	constructor(props) {
		super(props);
		this.state = {
			subjectPreview: this.props.sub
		};
	}
	renderItems() {
		return this.props.pickerOptions.map((subjectOBJ, index) => {
			return (
				<Picker.Item
					color='white'
					key={'index'}
					label={subjectOBJ.name}
					value={subjectOBJ.name}
				/>
			);
		});
	}
	render() {
		return (
			<View>
				<Text style={styles.text}>{this.state.subjectPreview}</Text>
				<Picker
					selectedValue={this.props.sub}
					onValueChange={itemValue => {
						this.setState({
							subjectPreview: itemValue
						});
						this.props.updateState(itemValue);
					}}>
					{this.renderItems()}
				</Picker>
			</View>
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
