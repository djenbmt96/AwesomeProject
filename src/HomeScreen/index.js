import React, { Component } from "react";
import HomeScreen from "./HomeScreen.js";
import ProfileScreen from "../ProfileScreen/index.js";
import SideBar from "../SideBar/SideBar.js";
import Modal from "../Modal/index.js";
import { DrawerNavigator } from "react-navigation";

const HomeScreenRouter = DrawerNavigator(
  {
    Home: { screen: HomeScreen },
    Modal: {screen: Modal},
    ProfileScreen: { screen: ProfileScreen }
  },
  {
    contentComponent: props => <SideBar {...props} />
  }
);
export default HomeScreenRouter;
