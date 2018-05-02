import React, { Component } from 'react';
import styles from '../styles/custom.js'
import { Image, View, TouchableHighlight, TouchableOpacity, StyleSheet, Keyboard } from 'react-native';
import Type from '../Enum.js'
import Modal from "react-native-modal";
import { Container, Header, Content, Form, Item, Input, CardItem, Button, Text, Icon } from 'native-base';
import { StackNavigator } from "react-navigation";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {token} from "../actions/index.js"

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = { username: '', password: '', visibleModal: 0, error_description: '', token: '' };
        this.saveIdentityAndRedirect=this.saveIdentityAndRedirect.bind(this);
    }
    login = this.login.bind(this);
    login() {
        let details = {
            'username': this.state.username,
            'password': this.state.password,
            'grant_type': 'password'
        };
        let formBody = [];
        for (let property in details) {
            let encodedKey = encodeURIComponent(property);
            let encodedValue = encodeURIComponent(details[property]);
            formBody.push(encodedKey + "=" + encodedValue);
        }
        formBody = formBody.join("&");
        fetch(Type.DO_MAIN + 'token', {
            method: 'POST',
            headers: {
                'Authorization': 'Bearer token',
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: formBody,
        })
            .then((response) => response.json())
            .then((data) => {
                if (data.error != undefined) {
                    console.log('fail');
                    this.setState({ visibleModal: 1, error_description: data.error_description });
                } else if (data.IsLoggedIn) {
                    this.setState({
                        visibleModal: 2,
                        error_description: "You already logged in. Do want to login again?",
                        token: data.access_token
                    })
                }
                else {
                    console.log('success');
                    this.setState({ token: data.access_token });
                    this.saveIdentityAndRedirect();
                };
            })
            .catch((error) => {
                console.log('error:', error);
                this.setState({ visibleModal: 1, error_description: "Connection fail!" });
            })
            .done();
    }
    saveIdentityAndRedirect(){
        this.props.token(this.state.token);
        this.props.navigation.navigate("HomeScreen");
        Keyboard.dismiss();
    }
    _renderButton = (text, onPress) => (
        <TouchableOpacity onPress={onPress}>
            <View style={styles.buttonCloseModal1}>
                <Text>{text}</Text>
            </View>
        </TouchableOpacity>
    );
    _renderModalContent = (text) => (
        <View style={styles.modalContent1}>
            <Text>{text}</Text>
            <View style={{ flexDirection: 'row' }}>
                {this._renderButton("Close", () => this.setState({ visibleModal: null }))}
                {this.state.visibleModal == 2 ? this._renderButton("Continue", () => {
                    this.setState({ visibleModal: null });
                    this.saveIdentityAndRedirect();
                }) : null}
            </View>
        </View>
    );
    render() {
        return (
            <Container>
                <Content style={{ backgroundColor: "#FFF" }}>
                    <View style={styles.coverContainer}>
                        <CardItem style={styles.imageCover}>
                            <Image source={require('../Images/backgroundLoginV1.png')}
                                style={styles.coverImage} />
                        </CardItem>
                    </View>
                    <Form>
                        <Item>
                            <Input placeholder="Username"
                                ref={(el => { this.username = el; })}
                                onChangeText={(username) => { this.setState({ username: username }) }}
                                value={this.state.username} />
                        </Item>
                        <Item last>
                            <Input placeholder="Password"
                                secureTextEntry={true}
                                ref={(el => { this.password = el; })}
                                onChangeText={(password) => { this.setState({ password: password }) }}
                                value={this.state.password} />
                        </Item>
                    </Form>
                    <Button
                        full
                        rounded
                        success
                        style={{ margin: 10 }}
                        onPress={this.login}
                    >
                        <Icon name="arrow-forward" />
                        <Text>Login</Text>
                    </Button>
                    <Modal isVisible={this.state.visibleModal === 1}>
                        {this._renderModalContent(this.state.error_description)}
                    </Modal>
                    <Modal isVisible={this.state.visibleModal === 2}>
                        {this._renderModalContent(this.state.error_description)}
                    </Modal>
                </Content>
            </Container>
        );
    }
}


function mapStateToProps(state) {
    return {
        profileReducers: state.profileReducers
    };
}
const matchDispatchToProps = (dispatch) => {
    return bindActionCreators({
        token,
    }, dispatch);
}
export default connect(mapStateToProps, matchDispatchToProps)(Login);