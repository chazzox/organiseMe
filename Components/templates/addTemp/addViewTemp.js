import * as React from 'react';
// importing elements needed to create structure of view
import { Text } from 'react-native';

export default class TempView extends React.Component {
    render() {
        return <Text>{this.props.Test}</Text>;
    }
}
