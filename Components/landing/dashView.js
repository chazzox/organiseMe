import React, { Component } from "react";
// importing elements needed to create structure of view
import { Text, View, Button, ScrollView, StyleSheet } from "react-native";
import { StackActions, NavigationActions } from "react-navigation";

// importing style sheet
import styles from "./dashView.style";

class dashView extends Component {
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
      <View style={styles.ViewBox}>
        <ScrollView style={styles.ScrollView}>
          <View style={styles.container}>
            <View style={styles.dashCont}>
              <Text style={styles.title}>Add new homaework</Text>
              <Text style={styles.body}>
                Use this section to add your homework quickly!
              </Text>
              <View style={styles.but}>
                <Button
                  title="Quick Add"
                  onPress={() => this.props.navigation.navigate("addHW")}
                  style={styles.button}
                />
              </View>
            </View>

            <View style={styles.dashCont}>
              <Text style={styles.title}>
                Don't know what homework you have?
              </Text>
              <Text style={styles.body}>
                Click the link below to view your coming weeks homwork
              </Text>
              <View style={styles.but}>
                <Button
                  onPress={() => this.navToForm("homeworkMain")}
                  style={styles.button}
                  title="homework boi"
                />
              </View>
            </View>

            <View style={styles.dashCont}>
              <Text style={styles.title}>big bruh</Text>
              <Text style={styles.body}>bruh bruh</Text>
              <View style={styles.but}>
                <Button
                  title="bruh bruh, bruh bruh"
                  onPress={() => this.navToForm("homeworkMain")}
                  style={styles.button}
                />
              </View>
            </View>

            <View style={styles.dashCont}>
              <Text style={styles.title}>big bruh</Text>
              <Text style={styles.body}>bruh bruh</Text>
              <View style={styles.but}>
                <Button
                  title="bruh bruh, bruh bruh"
                  onPress={() => this.navToForm("homeworkMain")}
                  style={styles.button}
                  transparent="True"
                />
              </View>
            </View>

            <View
              style={StyleSheet.flatten([styles.bodyBottom, styles.dashCont])}
            >
              <Text style={styles.title}>big bruh</Text>
              <Text style={styles.body}>
                this is a test of the scroll features
              </Text>
              <View style={styles.but}>
                <Button
                  title="bruh bruh, bruh bruh"
                  onPress={() => this.navToForm("homeworkMain")}
                  style={styles.button}
                />
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}
export default dashView;
