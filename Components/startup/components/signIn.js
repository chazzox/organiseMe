// this is the defualt adding page, when coming from dashboard view it loads the homework add version
import React, { Component } from 'react';
import {
    Text,
    View,
    StyleSheet,
    TouchableOpacity,
    TextInput
} from 'react-native';

import * as FileSystem from 'expo-file-system';

class UserInput extends Component {
    render() {
        return (
            <View style={{ marginBottom: 80 }}>
                <Text style={styles.titleText}>{this.props.title}</Text>
                <TextInput
                    placeholderTextColor='lightgrey'
                    style={styles.touchStyle}
                    {...this.props}
                />
            </View>
        );
    }
}
function displayUser(info) {
    if (info.success == true) {
        console.log('we in bois');
        console.log(info);
    } else {
        console.log('we still in bois');
    }
}
function login(obj) {
    loginResult = '';
    fetch('http://81.156.117.18:5000/api/users/login', {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            email: obj.emailValue,
            password: obj.passValue
        })
    })
        .then(response => response.text())
        .then(result => {
            console.log('recieved');
            displayUser(JSON.parse(result));
        })
        .catch(error => console.log('error', error));
}
class SignIn extends Component {
    constructor(props) {
        super(props);
        this.state = [{ emailValue: '' }, { passValue: '' }, { url: '' }];
    }
    render() {
        return (
            <View style={styles.container}>
                <UserInput
                    title='Email'
                    onChangeText={emailValue => {
                        this.setState({ emailValue });
                    }}
                    value={this.state.emailValue}
                    placeholder={'Enter Email here!'}
                />
                <UserInput
                    title='Password'
                    onChangeText={passValue => {
                        this.setState({ passValue });
                    }}
                    value={this.state.passValue}
                    secureTextEntry={true}
                    placeholder={'Enter Password here!'}
                />
                <TouchableOpacity
                    onPress={() => {
                        console.log(`pp:${this.state.emailValue}`);
                        console.log(`pp2:${this.state.passValue}`);
                        login(this.state);
                    }}>
                    <Text
                        style={[
                            styles.titleText,
                            { marginTop: 40, marginBottom: 40 }
                        ]}>
                        Login
                    </Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#292C30'
    },
    titleText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 50
    },
    touchStyle: {
        height: 40,
        fontSize: 30,
        color: 'white',
        fontWeight: 'bold'
    }
});

export default SignIn;
