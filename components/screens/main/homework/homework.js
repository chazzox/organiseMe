import * as React from 'react';
import { Dimensions, ScrollView, Text, View } from 'react-native';
import { SceneMap } from 'react-native-tab-view';
import TabName from '../templates/weekViewMain/weekView';
import styles from '../templates/weekViewMain/weekView.style';

const Monday = () => (
    <View style={styles.screen}>
        <ScrollView>
            <View style={styles.block}>
                <Text style={styles.blockTextMain}>Maths - header</Text>
                <Text style={styles.blockTextBody}>
                    descriptions of the homework, its a test lmao also please do
                    this that and the other lmaoooooooooooo
                    {'\n'}
                    <Text
                        style={{
                            color: 'white',
                            fontWeight: 'bold',
                            marginTop: 7
                        }}
                    >
                        Due:
                        <Text style={{ color: '#007Aff' }}>12/07/20</Text>
                    </Text>
                </Text>
            </View>
            <View style={styles.block}>
                <Text style={styles.blockTextMain}>Maths - header</Text>
                <Text style={styles.blockTextBody}>
                    descriptions of the homework, its a test lmao also please do
                    this that and the other lmaoooooooooooo
                    {'\n'}
                    <Text
                        style={{
                            color: 'white',
                            fontWeight: 'bold',
                            marginTop: 7
                        }}
                    >
                        Due:
                        <Text style={{ color: '#007Aff' }}>12/07/20</Text>
                    </Text>
                </Text>
            </View>
            <View style={styles.block}>
                <Text style={styles.blockTextMain}>Maths - header</Text>
                <Text style={styles.blockTextBody}>
                    descriptions of the homework, its a test lmao also please do
                    this that and the other lmaoooooooooooo
                    {'\n'}
                    <Text
                        style={{
                            color: 'white',
                            fontWeight: 'bold',
                            marginTop: 7
                        }}
                    >
                        Due:
                        <Text style={{ color: '#007Aff' }}>12/07/20</Text>
                    </Text>
                </Text>
            </View>
            <View style={styles.block}>
                <Text style={styles.blockTextMain}>Maths - header</Text>
                <Text style={styles.blockTextBody}>
                    descriptions of the homework, its a test lmao also please do
                    this that and the other lmaoooooooooooo
                    {'\n'}
                    <Text
                        style={{
                            color: 'white',
                            fontWeight: 'bold',
                            marginTop: 7
                        }}
                    >
                        Due:
                        <Text style={{ color: '#007Aff' }}>12/07/20</Text>
                    </Text>
                </Text>
            </View>
        </ScrollView>
    </View>
);

const screen = () => (
    <View style={styles.screen}>
        <ScrollView>
            <View style={styles.block}></View>
            <View style={styles.block}></View>
            <View style={styles.block}></View>
            <View style={styles.block}></View>
        </ScrollView>
    </View>
);

export default class homeworkMain extends React.Component {
    render() {
        return (
            <TabName
                screenBoi={SceneMap({
                    Monday: Monday,
                    Tuesday: Monday,
                    Wednesday: screen,
                    Thursday: screen,
                    Friday: screen
                })}
            />
        );
    }
}
