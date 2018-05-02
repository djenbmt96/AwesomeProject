import React, { Component } from "react";
import Profile from "./Profile.js";
import EditScreenOne from "./EditScreenOne.js";
import { StackNavigator,NavigationActions } from "react-navigation";
const ProfileScreen = StackNavigator(
  {
    Profile: { screen: Profile },
    EditScreenOne: { screen: EditScreenOne }
  },
  {
    initialRouteName: "Profile"
  }
);
const navigateOnce = (getStateForAction) => (action, state) => {
  const {type, routeName} = action;
  return (
    state &&
    type === NavigationActions.NAVIGATE &&
    routeName === state.routes[state.routes.length - 1].routeName
  ) ? null : getStateForAction(action, state);
};
ProfileScreen.router.getStateForAction=navigateOnce(ProfileScreen.router.getStateForAction);
export default ProfileScreen;
