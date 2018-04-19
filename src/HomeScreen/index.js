import React, { Component } from "react";
import HomeScreen from "./HomeScreen.js";
import ProfileScreen from "../ProfileScreen/index.js";
import SideBar from "../SideBar/SideBar.js";
import Modal from "../Modal/index.js";
import People from '../GridList/index';
import { DrawerNavigator } from "react-navigation";

const HomeScreenRouter = DrawerNavigator(
  {
    Home: { screen: HomeScreen },
    Modal: {screen: Modal},
    ProfileScreen: { screen: ProfileScreen },
    People: {screen: People}
  },
  {
    contentComponent: props => <SideBar {...props} />
  }
);
export default HomeScreenRouter;
