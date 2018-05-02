import React, { Component } from "react";
import { View } from "react-native";
import { Container, Content, Picker, Button, Text, Root } from "native-base";
import HomeScreen from "./HomeScreen/index.js";
import allReducers from './reducers/index.js';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { Field, reduxForm } from 'redux-form';

const store = createStore(allReducers);
export default class Home extends Component {
  render() {
    return (
      <Provider store={store}>
        <Root>
          <HomeScreen />
        </Root>
      </Provider>)
  }
}
