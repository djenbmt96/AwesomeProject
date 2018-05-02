import React from "react";
import { AppRegistry, Image, StatusBar } from "react-native";

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  Button,
  Text,
  Container,
  List,
  ListItem,
  Content,
  Icon, Left
} from "native-base";
const routes = [
  { name: "Home", icon: "home" },
  { name: "Profile", icon: "person" },
  { name: "Modal", icon: "color-wand" },
  { name: "People", icon: "people" },
];
class SideBar extends React.Component {
  render() {
    return (
      <Container>
        <Content>
          <Image
            source={this.props.profileReducers.cover === '' ?
              require('../Images/background.png') : { uri: this.props.profileReducers.cover }
            }
            style={{
              height: 120,
              width: "100%",
              alignSelf: "stretch",
              position: "absolute"
            }}
          />
          <Image
            square
            style={{
              height: 70,
              width: 70,
              position: "absolute",
              alignSelf: "center",
              top: 20,
              borderRadius: 50
            }}
            source={this.props.profileReducers.picture === '' ?
              require('../Images/avatar.png') : { uri: this.props.profileReducers.picture }
            }
          />
          <List
            dataArray={routes}
            contentContainerStyle={{ marginTop: 120 }}
            renderRow={data => {
              return (
                <ListItem
                  button
                  onPress={() => this.props.navigation.navigate(data.name)}
                >
                  <Left>
                    <Icon name={data.icon} />
                    <Text>{data.name}</Text>
                  </Left>
                </ListItem>
              );
            }}
          />
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
export default connect(mapStateToProps)(SideBar);