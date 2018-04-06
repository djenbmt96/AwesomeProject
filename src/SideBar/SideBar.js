import React from "react";
import { AppRegistry, Image, StatusBar } from "react-native";
import {
  Button,
  Text,
  Container,
  List,
  ListItem,
  Content,
  Icon
} from "native-base";
const routes = ["Home", "Profile"];
export default class SideBar extends React.Component {
  render() {
    return (
      <Container>
        <Content>
          <Image
            source={
              require('../Images/background.png')
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
            source={
              require('../Images/avatar.png')
            }
          />
          <List
            dataArray={routes}
            contentContainerStyle={{ marginTop: 120 }}
            renderRow={data => {
              return (
                <ListItem
                  button
                  onPress={() => this.props.navigation.navigate(data)}
                >
                  <Text>{data}</Text>
                </ListItem>
              );
            }}
          />
        </Content>
      </Container>
    );
  }
}
