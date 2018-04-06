import React, { Component } from "react";
import { View } from "react-native";
import { Container, Content, Picker, Button, Text } from "native-base";
import HomeScreen from "./src/HomeScreen/index.js";

import allReducers from './src/reducers/index.js';
import {createStore} from 'redux';
import {Provider} from 'react-redux';

const store = createStore(allReducers);
export default class AwesomeApp extends Component {
  render() {
    return (
    <Provider store= {store}>
      <HomeScreen />
    </Provider>);
  }
}
