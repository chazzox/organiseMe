import PropTypes from "prop-types";
import React, { Component } from "react";
import { connect } from "react-redux";
import { StackActions, NavigationActions } from "react-navigation";
import { ScrollView, Text, View } from "react-native";
// style sheet
import styles from "./SideMenu.style";
import { TouchableOpacity } from "react-native-gesture-handler";

class SideMenu extends Component {
  constructor(props) {
	super(props);
	this.navToForm = this.navToForm.bind(this);
  }

  navToForm = formName => {
	this.props.navigation.dispatch(
	  StackActions.reset({
		index: 0,
		actions: [NavigationActions.navigate({ routeName: formName })]
	  })
	);
  };

  render() {
	return (
	  <View style={{ height: "100%" }}>
		{/*the spacer allows the navbar and top of sidebar to align*/}
		<View style={styles.spacer}></View>
		<View style={styles.container}>
		  <View>
			<Text
			  style={styles.sectionHeadingStyle}
			  onPress={() => this.props.navigation.navigate("Main")}
			>
			  Dashboard
			</Text>
		  </View>

		  <View>
			<Text
			  style={styles.sectionHeadingStyle}
			  onPress={() => this.props.navigation.navigate("homeworkMain")}
			>
			  Homework
			</Text>
		  </View>

		  <View>
			<Text
			  style={styles.sectionHeadingStyle}
			  onPress={() => this.props.navigation.navigate("examMain")}
			>
			  Exams
			</Text>
		  </View>

		  <View>
			<Text style={styles.sectionHeadingStyle}>Section 3</Text>
		  </View>
		</View>

		<View style={styles.footerContainer}>
		  <TouchableOpacity
			onPress={() => {
			  this.props.navigation.navigate("settings");
			}}
		  >
			<Text>Account Settings</Text>
		  </TouchableOpacity>
		</View>

		<View style={styles.footerContainer}>
		  <TouchableOpacity
			onPress={() => {
			  this.navToForm("SignedOut");
			}}
		  >
			<Text>Sign out of organiseMe</Text>
		  </TouchableOpacity>
		</View>
	  </View>
	);
  }
}

export default connect(null, null)(SideMenu);
