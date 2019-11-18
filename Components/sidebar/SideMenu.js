import PropTypes from 'prop-types';
import React, {Component} from 'react';
import {StackActions, NavigationActions} from 'react-navigation';
import {ScrollView, Text, View} from 'react-native';

// style sheet
import styles from './SideMenu.style';

class SideMenu extends Component {
  navigateToScreen = (route) => () => {
    const navigateAction = NavigationActions.navigate({
      routeName: route
    });
    this.props.navigation.dispatch(navigateAction);
  }

  render () {
    return (
      <View style={{height:'100%'}}>
        <View style={styles.spacer}></View>
        <View style={styles.container}>
          <ScrollView>
            <View>
              <Text style={styles.sectionHeadingStyle}
                onPress={() =>
                  this.props.navigation.dispatch(StackActions.reset({
                    index: 0,
                    actions: [NavigationActions.navigate({ routeName: 'Main' })],
                  }))}>
                Dashboard
              </Text>
            </View>
            <View>
              <Text 
              style={styles.sectionHeadingStyle} 
                onPress={() =>
                  this.props.navigation.dispatch(StackActions.reset({
                    index: 0,
                    actions: [NavigationActions.navigate({ routeName: 'quickAdd' })],
                  }))
                }>
              Quick
              </Text>
            </View>
            <View>
              <Text style={styles.sectionHeadingStyle}>
              Section 2
              </Text>          
            </View>
            <View>
              <Text style={styles.sectionHeadingStyle}>
              Section 3
              </Text>
            </View>
          </ScrollView>
          <View style={styles.footerContainer}>
            <Text>This is my fixed footer</Text>
          </View>
        </View>
      </View>
    );
  }
}

SideMenu.propTypes = {
  navigation: PropTypes.object
};

export default SideMenu;