import PropTypes from "prop-types";
import React, { Component } from "react";
import { StackActions, NavigationActions } from "react-navigation";
import { ScrollView, Text, View } from "react-native";

// style sheet
import styles from "./SideMenu.style";

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
              onPress={() => this.navToForm("Main")}
            >
              Dashboard
            </Text>
          </View>

          <View>
            <Text
              style={styles.sectionHeadingStyle}
              onPress={() => this.navToForm("homeworkMain")}
            >
              Homework
            </Text>
          </View>

          <View>
            <Text
              style={styles.sectionHeadingStyle}
              onPress={() => this.navToForm("examAdd")}
            >
              Exams
            </Text>
          </View>

          <View>
            <Text style={styles.sectionHeadingStyle}>Section 3</Text>
          </View>
        </View>

        <View style={styles.footerContainer}>
          <Text>This is my fixed footer</Text>
        </View>
      </View>
    );
  }
}

SideMenu.propTypes = {
  navigation: PropTypes.object
};

export default SideMenu;
