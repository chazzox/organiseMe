// this is the defualt adding page, when coming from dashboard view it loads the homework add version
import React, { Component } from 'react';
import {
    Text,
    View,
    StyleSheet,
    TouchableOpacity,
    TextInput
} from 'react-native';

function displayUser(info) {
    if (info.success == false) {
        console.log(`bruh `);
    }
}

class SignIn extends Component {
    constructor(props) {
        super(props);
        this.state = { emailValue: '' };
        this.state = { passValue: '' };
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
                        loginResult = '';
                        console.log(`pp:${this.state.emailValue}`);
                        console.log(`pp2:${this.state.passValue}`);
                        fetch('http://81.156.117.18:5000/api/users/login', {
                            method: 'POST',
                            headers: {
                                Accept: 'application/json',
                                'Content-Type': 'application/json'
                            },
                            body: JSON.stringify({
                                email: this.state.emailValue,
                                password: this.state.passValue
                            })
                        })
                            .then(response => response.text())
                            .then(result => {
                                displayUser(result);
                            })
                            .catch(error => console.log('error', error));
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
