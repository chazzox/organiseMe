// this is the defualt adding page, when coming from dashboard view it loads the homework add version
import React, { Component } from 'react';
import {
    Text,
    Button,
    View,
    StyleSheet,
    TouchableOpacity,
    TextInput
} from 'react-native';
import { StackActions, NavigationActions } from 'react-navigation';

class SignIn extends Component {
    constructor(props) {
        super(props);
        this.state = { emailValue: '' };
        this.state = { passValue: '' };
        this.emailREGEX = new RegExp('/([ab]){2,}/');
        this.passREGEX = new RegExp('/([a-z]){2,}/');
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={{ marginBottom: 80 }}>
                    <Text style={styles.titleText}>Email</Text>
                    <TextInput
                        style={styles.touchStyle}
                        placeholder="Type here to enter your email!"
                        placeholderTextColor="lightgrey"
                        onChangeText={emailValue => {
                            this.setState({ emailValue });
                        }}
                        value={this.state.emailValue}
                    />
                </View>
                <View style={{ marginBottom: 80 }}>
                    <Text style={styles.titleText}>Password</Text>
                    <TextInput
                        placeholderTextColor="lightgrey"
                        placeholder={'Enter here'}
                        style={styles.touchStyle}
                        onChangeText={passValue => {
                            this.setState({ passValue });
                        }}
                        value={this.state.passValue}
                        secureTextEntry={true}
                    />
                </View>
                <TouchableOpacity
                    onPress={() => {
                        console.log(this.state.emailValue);
                        console.log(this.state.passValue);
                        console.log(
                            fetch('http://localhost:5000/api/users/login', {
                                method: 'POST',
                                headers: {
                                    Accept: 'application/json',
                                    'Content-Type':
                                        'application/x-www-form-urlencoded'
                                },
                                body: JSON.stringify({
                                    email: 'h7ddddd@lskdfj.com',
                                    password: 'bruh-moment'
                                })
                            })
                                .then(response => response.json())
                                .then(responseJson => {
                                    return responseJson.movies;
                                })
                                .catch(error => {
                                    console.error(error);
                                })
                        );
                    }}
                >
                    <Text
                        style={[
                            styles.titleText,
                            { marginTop: 40, marginBottom: 40 }
                        ]}
                    >
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
