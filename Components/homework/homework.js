import * as React from 'react';
import { View, Text, StyleSheet, Dimensions, ScrollView } from 'react-native';
import { TabView, SceneMap } from 'react-native-tab-view';
import Animated from 'react-native-reanimated';

const Screen = React.memo(() => (
    <View style={styles.screen}>
        <ScrollView>
        <View style={styles.block}/>
        <View style={styles.block}/>
        <View style={styles.block}/>
        <View style={styles.block}/>
        </ScrollView>
    </View>
)
);

function TabLabel({ navigationState, position, index, children }) {
    // function to creater opacity of text for next day view
    const opacity = React.useMemo(() => {
        const inputRange = navigationState.routes.map((NotUsed, i) => i);
        // returns a vlue of apaicty based on the current view vs the
        // test 2
        // test 3
        return Animated.interpolate(position, {
            inputRange,
            outputRange: inputRange.map(i => (i === index ? 1 : 0.4)),
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
                    index={i}
                    key={i}>
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
            {key:'Monday'},
            {key:'Tuesday'},
            {key:'Wednesday'},
            {key:'Thursday'},
            {key:'Friday'}
        ],
    };

    render() {
        return (
            <TabView
                navigationState={this.state}
                renderTabBar={props => <TabBar {...props} />}
                // this is not the order of the tabs
                renderScene={SceneMap({
                    Monday:Screen,
                    Tuesday:Screen,
                    Wednesday:Screen,
                    Friday:Screen,
                    Thursday:Screen
                    })
                }
                onIndexChange={(index) => this.setState({index})}
                initialLayout={{ width: Dimensions.get('window').width }}
                style={styles.container}
            />
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#292C30'
    },
    screen: {
        flex: 1,
        padding: 12
    },
    block: {
        height: 120,
        width: 120,
        margin: 8,
        backgroundColor: '#2F3439',
        padding: 15,
        width: '80%',
        borderRadius: 15,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.39,
        shadowRadius: 8.30,
        elevation: 13
    },
    tabbar: {
        flexDirection: 'row',
        marginTop: 16,
    },
    label: {
        flex: 1,
        fontSize: 40,
        marginHorizontal: 24,
        color: 'white',
    },
});
