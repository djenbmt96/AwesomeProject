import React, { Component } from "react";
import { View } from "react-native";
import { Container, Content, Picker, Button, Text, Root } from "native-base";
import HomeScreen from "./src/HomeScreen/index.js";
import Home from "./src/index.js"
import Login from './src/Login/index.js';
import allReducers from './src/reducers/index.js';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import App1 from './App1.js';

const store = createStore(allReducers);

export default class AwesomeApp extends Component {
  render() {
    return (
      <Provider store={store}>
        <Root>
          <App1/>
        </Root>
      </Provider>)
  }
}
