import * as React from 'react';
import { View, Text, StyleSheet, Dimensions, ScrollView } from 'react-native';
import { TabView, SceneMap } from 'react-native-tab-view';
import Animated from 'react-native-reanimated';

import styles from './hwMainView.style';

const Monday = React.memo(() => (
    <View style={styles.screen}>
            <View style={styles.block}>
                <Text style={styles.blockTextMain}>
                    Maths - header
                </Text>
                <Text style={styles.blockTextBody}>
                    descriptions of the homework, its a test lmao
                    also please do this that and the other lmaoooooooooooo
                </Text>
            <Text style={{color:'white',fontWeight:'bold'}}>Due:</Text><Text style={{color:'blue'}}>12/07/20</Text>
            </View>
    </View>
));

const Tuesday = React.memo(() => (
    <View style={styles.screen}>
        <ScrollView>
            <View style={styles.block}/>
            <View style={styles.block}/>
            <View style={styles.block}/>
            <View style={styles.block}/>
        </ScrollView>
    </View>
));
const Wednesday = React.memo(() => (
    <View style={styles.screen}>
        <ScrollView>
            <View style={styles.block}/>
            <View style={styles.block}/>
            <View style={styles.block}/>
            <View style={styles.block}/>
        </ScrollView>
    </View>
));
const Thursday = React.memo(() => (
    <View style={styles.screen}>
        <ScrollView>
            <View style={styles.block}/>
            <View style={styles.block}/>
            <View style={styles.block}/>
            <View style={styles.block}/>
        </ScrollView>
    </View>
));
const Friday = React.memo(() => (
    <View style={styles.screen}>
        <ScrollView>
            <View style={styles.block}><Text>bruh</Text></View>
            <View style={styles.block} />
            <View style={styles.block} />
            <View style={styles.block} />
        </ScrollView>
    </View >
));


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

    return(
        <Animated.Text style={[styles.label,{opacity}]}>
            {children}
        </Animated.Text>
    );
}

function TabBar({ navigationState, layout,position }) {
    const translateX = React.useMemo(()=>{
        const inputRange = navigationState.routes.map((_,i)=>i);
        return Animated.interpolate(position,{
            inputRange,
            outputRange: inputRange.map(i => (-layout.width / 1.5) * i),
        });
    },[]);


    return (
        <Animated.View
            style={[
                    styles.tabbar,
                    {width: (layout.width / 1.5) * navigationState.routes.length,
                    transform: [{ translateX }]}
                  ]}
        >
            {navigationState.routes.map((route, i)=>
                (<TabLabel
                    navigationState={navigationState}
                    position={position}
                    index={i}
                    key={i}>
                    {route.key}
                </TabLabel>)
            )}
        </Animated.View>
    );
}

export default class TabName extends React.Component {
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
                    Monday: Monday,
                    Tuesday: Tuesday,
                    Wednesday: Wednesday,
                    Thursday: Thursday,
                    Friday: Friday
                    })
                }
                onIndexChange={(index) => this.setState({index})}
                initialLayout={{ width: Dimensions.get('window').width }}
                style={styles.container}
            />
        );
    }
}

