import * as React from 'react';
import { Dimensions, ScrollView, Text, View } from 'react-native';
import Animated from 'react-native-reanimated';
import { SceneMap, TabView } from 'react-native-tab-view';
import styles from './examView.style';

const defaultRoute = [
    { key: 'Monday' },
    { key: 'Tuesday' },
    { key: 'Wednesday' },
    { key: 'Thursday' },
    { key: 'Friday' }
];

const Monday = React.memo(() => (
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
                        }}>
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
                        }}>
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
                        }}>
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
                        }}>
                        Due:
                        <Text style={{ color: '#007Aff' }}>12/07/20</Text>
                    </Text>
                </Text>
            </View>
        </ScrollView>
    </View>
));

const screen = React.memo(() => (
    <View style={styles.screen}>
        <ScrollView>
            <View style={styles.block} />
            <View style={styles.block} />
            <View style={styles.block} />
            <View style={styles.block} />
            <View style={styles.block} />
            <View style={styles.block} />
        </ScrollView>
    </View>
));

function TabLabel({ navigationState, position, index, children }) {
    // function to creater opacity of text for next day view
    const opacity = React.useMemo(() => {
        const inputRange = navigationState.routes.map((NotUsed, i) => i);
        // returns a vlue of apaicty based on the current view vs the
        return Animated.interpolate(position, {
            inputRange,
            outputRange: inputRange.map(i => (i === index ? 1 : 0.4))
        });
    }, []);

    return (
        <Animated.Text style={[styles.label, { opacity }]}>
            {children}
        </Animated.Text>
    );
}

function TabBar({ navigationState, layout, position }) {
    const translateX = React.useMemo(() => {
        const inputRange = navigationState.routes.map((_, i) => i);
        return Animated.interpolate(position, {
            inputRange,
            outputRange: inputRange.map(i => (-layout.width / 1.5) * i)
        });
    }, []);

    return (
        <Animated.View
            style={[
                styles.tabbar,
                {
                    width: (layout.width / 1.5) * navigationState.routes.length,
                    transform: [{ translateX }]
                }
            ]}>
            {navigationState.routes.map((route, i) => (
                <TabLabel
                    navigationState={navigationState}
                    position={position}
                    index={i}
                    key={i}>
                    {route.key}
                </TabLabel>
            ))}
        </Animated.View>
    );
}

export default class TabName extends React.Component {
    state = {
        index: 0,
        routes: defaultRoute
            .slice(new Date().getDay() - 1)
            .concat(defaultRoute.slice(0, new Date().getDay() - 1))
    };

    render() {
        return (
            <TabView
                navigationState={this.state}
                renderTabBar={props => <TabBar {...props} />}
                // this is not the order of the tabs
                renderScene={SceneMap({
                    // refers to the react componnent used in view underneath
                    Monday: Monday,
                    Tuesday: Monday,
                    Wednesday: screen,
                    Thursday: screen,
                    Friday: screen
                })}
                onIndexChange={index => this.setState({ index })}
                initialLayout={{ width: Dimensions.get('window').width }}
                style={styles.container}
            />
        );
    }
}
