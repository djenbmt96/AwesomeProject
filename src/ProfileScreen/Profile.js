import React from "react";
import { AppRegistry, Alert, Image, View, ImageBackground } from "react-native";

import {
  Root,
  Text, Row, Col, Grid, ListItem, Radio, ActionSheet, Item, Label, Input, Form,
  Container,
  Card,
  CardItem,
  Body,
  Content,
  Header,
  Left,
  Right,
  Icon,
  Title,
  Button,
  H1
} from "native-base";

import { StackNavigator } from "react-navigation";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import styles from '../styles/custom';
import ImagePicker from 'react-native-image-picker';
import { updateCover } from '../actions/index.js';

var BUTTONS = [
  { text: "Change your cover photo", icon: "color-palette", iconColor: "#2c8ef4" },
  { text: "Cancel", icon: "close", iconColor: "#25de5b" }
];
var CANCEL_INDEX = 1;

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isLike: false, cover: this.props.profileReducers.cover };
    this.showActionSheet = this.showActionSheet.bind(this);
  }
  componentDidMount() {
    if (this.props.navigation.state.params !== undefined) {
      Alert.alert("USER found", this.props.navigation.state.params.name);
    }
  }
  showActionSheet() {
    ActionSheet.show(
      {
        options: BUTTONS,
        cancelButtonIndex: CANCEL_INDEX,
        title: "Select one action"
      },
      buttonIndex => {
        switch (buttonIndex) {
          case 0: {
            var options = {
              title: 'Select Avatar',
              storageOptions: {
                skipBackup: true,
                path: 'images'
              }
            };
            ImagePicker.showImagePicker(options, (response) => {
              console.log('Response = ', response);

              if (response.didCancel) {
                console.log('User cancelled image picker');
              }
              else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
              }
              else {
                let source = { uri: response.uri };
                // You can also display the image using data:
                // let source = { uri: 'data:image/jpeg;base64,' + response.data };
                this.props.updateCover(source.uri);
              }
            });
            break;
          }
          default: break;
        }
      }
    )
  }
  render() {
    let profileReducers = this.props.profileReducers;
    return (
      <Container>
        <Content>
          <View style={styles.headerContainer}>
            <View style={styles.coverContainer}>
              <CardItem style={styles.imageCover}>
                <Image source={this.props.profileReducers.cover === '' ?
                  require('../Images/background.png') : { uri: this.props.profileReducers.cover }
                }
                  style={styles.coverImage} />
              </CardItem>
            </View>
            <View style={styles.profileImageContainer}>
              <Image
                source={this.props.profileReducers.picture === '' ?
                  require('../Images/avatar.png') : { uri: this.props.profileReducers.picture }
                }
                style={styles.profileImage}
              />
            </View>
            <View style={styles.coverMetaContainer}>
              <Text style={styles.coverName}>{profileReducers.data.FirstName + ' ' +profileReducers.data.LastName}</Text>
            </View>
            <View style={styles.buttonProfile}>
              <Button
                rounded
                light={!this.state.isLike}
                danger={this.state.isLike}
                onPress={() => { this.setState({ isLike: !this.state.isLike }) }}
              >
                <Icon name="heart" />
              </Button>
              <Button
                rounded
                success
                onPress={() => this.props.navigation.navigate("EditScreenOne")}
              >
                <Icon name="create" />
              </Button>
              <Button
                rounded
                light
                onPress={this.showActionSheet}
              >
                <Icon name="apps" />
              </Button>
            </View>
          </View>
          <Form>
            <Item stackedLabel>
              <Label>Email</Label>
              <Text>{profileReducers.data.Email}</Text>
            </Item>
            <Item stackedLabel last>
              <Label>Date</Label>
              <Text>{profileReducers.date}</Text>
            </Item>
            <Item stackedLabel last>
              <Label>Gender</Label>
              <Text>{profileReducers.gender==0 ? 'Male':'Female'}</Text>
            </Item>
          </Form>
        </Content>
      </Container>
    );
  }
}
Profile.navigationOptions = ({ navigation }) => {
  return {
    header: (
      <Header>
        <Left>
          <Button transparent onPress={() => navigation.navigate("DrawerOpen")}>
            <Icon name="menu" />
          </Button>
        </Left>
        <Body>
          <Title>Profile</Title>
        </Body>
        <Right />
      </Header>
    )
  };
};
function mapStateToProps(state) {
  return {
    profileReducers: state.profileReducers
  };
}
const matchDispatchToProps = (dispatch) => {
  return bindActionCreators({
    updateCover,
  }, dispatch);
}
export default connect(mapStateToProps, matchDispatchToProps)(Profile);