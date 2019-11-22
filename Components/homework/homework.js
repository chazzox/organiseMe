import * as React from 'react';
import { View, Text, StyleSheet, Dimensions, StatusBar } from 'react-native';
import { TabView, SceneMap } from 'react-native-tab-view';
import Animated from 'react-native-reanimated';

const Screen = React.memo(() => (
    <View style={styles.screen}>
        <View style={styles.block} />
        <View style={styles.block} />
        <View style={styles.block} />
        <View style={styles.block} />
    </View>
)
);

function TabLabel({ navigationState, position, index, children }) {
    const opacity = React.useMemo(() => {
        const inputRange = navigationState.routes.map((_, i) => i);

        return Animated.interpolate(position, {
            inputRange,
            outputRange: inputRange.map(i => (i === index ? 1 : 0.5)),
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
            outputRange: inputRange.map(i => (-layout.width / 1.5) * i),
        });
    }, []);

    return (
        <Animated.View
            style={[
                styles.tabbar,
                {
                    width: (layout.width / 1.5) * navigationState.routes.length,
                    transform: [{ translateX }],
                },
            ]}>
            {navigationState.routes.map((route, i) => (
                <TabLabel
                    navigationState={navigationState}
                    position={position}
                    index={i}>
                    {route.key}
                </TabLabel>
            ))}
        </Animated.View>
    );
}

export default class TabViewExample extends React.Component {
    state = {
        index: 0,
        routes: [
            { key: 'Monday' },
            { key: 'tuesday' },
            { key: 'wednesday' },
            { key: 'thursday' },
            { key: 'friday' },
        ],
    };

    render() {
        return (
            <TabView
                navigationState={this.state}
                renderTabBar={props => <TabBar {...props} />}
                renderScene={SceneMap({
                    Monday: Screen,
                    tuesday: Screen,
                    wednesday: Screen,
                    thursday: Screen,
                    friday: Screen,
                })}
                onIndexChange={index => this.setState({ index })}
                initialLayout={{ width: Dimensions.get('window').width }}
                style={styles.container}
            />
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'black',
    },
    screen: {
        flex: 1,
        padding: 12,
    },
    block: {
        height: 120,
        width: 120,
        margin: 8,
        backgroundColor: 'tomato',
    },
    tabbar: {
        flexDirection: 'row',
        marginTop: 16,
    },
    label: {
        flex: 1,
        fontSize: 48,
        marginHorizontal: 24,
        color: 'white',
    },
});
