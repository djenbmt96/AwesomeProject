import React, { Component } from "react";
import { View } from "react-native";
import { Container, Content, Picker, Button, Text, Root } from "native-base";
import HomeScreen from "./src/HomeScreen/index.js";
import Home from "./src/HomeScreen/index.js"
import Login from './src/Login/index.js';
import allReducers from './src/reducers/index.js';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { Field, reduxForm } from 'redux-form';

const store = createStore(allReducers);
import { StackNavigator} from "react-navigation";


const AwesomeApp = StackNavigator(
  {
    Login: { screen: Login },
    HomeScreen: { screen: Home }
  },
  {
    initialRouteName: "Login",
    headerMode: 'none'
  }
);


const prevGetStateForAction = AwesomeApp.router.getStateForAction;

AwesomeApp.router.getStateForAction = (action, state) => {
  // Do not allow to go back from Home
  if (action.type === 'Navigation/BACK' && state && state.routes[state.index].routeName === 'Login') {
    return null;
  }

  // Do not allow to go back to Login
  if (action.type === 'Navigation/BACK' && state) {
    const newRoutes = state.routes.filter(r => r.routeName !== 'Login');
    const newIndex = newRoutes.length - 1;
    return prevGetStateForAction(action, { index: newIndex, routes: newRoutes });
  }
  return prevGetStateForAction(action, state);
};

export default AwesomeApp;
// export default class AwesomeApp extends Component {
//   render() {
//     return (
//       // <Provider store={store}>
//       //   <Root>
//       //     <HomeScreen />
//       //   </Root>
//       // </Provider>)
//       <Login/>)
//   }
// }
