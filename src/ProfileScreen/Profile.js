import React from "react";
import { AppRegistry, Alert, Image } from "react-native";

import {
  Text, Row, Col, Grid, ListItem, Radio,
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

class Profile extends React.Component {
  componentDidMount() {
    if (this.props.navigation.state.params !== undefined) {
      Alert.alert("USER found", this.props.navigation.state.params.name);
    }
  }
  render() {
    let profileReducers = this.props.profileReducers;
    return (
      <Container>
        <Content padder>
          <Grid>
            <Row style={{ height: 50, margin: 10 }}>
              <Col style={{ width: '30%' }}>
                <Text style={{ textAlign: 'right' }}>Name: </Text>
              </Col>
              <Col>
                <Text>{profileReducers.name}</Text>
              </Col>
            </Row>
            <Row style={{ height: 50, margin: 10 }}>
              <Col style={{ width: '30%' }}>
                <Text style={{ textAlign: 'right' }}>Email: </Text>
              </Col>
              <Col>
                <Text>{profileReducers.email}</Text>
              </Col>
            </Row>
            <Row style={{ height: 50, margin: 10 }}>
              <Col style={{ width: '30%' }}>
                <Text style={{ textAlign: 'right' }}>Date: </Text>
              </Col>
              <Col>
                <Text>{profileReducers.date}</Text>
              </Col>
            </Row>
            <Row style={{ height: 50, margin: 10 }}>
              <Col style={{ width: '30%' }}>
                <Text style={{ textAlign: 'right' }}>Gender: </Text>
              </Col>
              <Col style={{ width: '35%' }}>
                <Row>
                  <Radio selected={profileReducers.gender===0} />
                  <Text>Male</Text>
                </Row>
              </Col>
              <Col style={{ width: '35%' }}>
                <Row>
                  <Radio selected={profileReducers.gender===1} />
                  <Text>Female</Text>
                </Row>
              </Col>
            </Row>
            <Row style={{ height: 'auto', margin: 10 }}>
              <Col style={{ width: '30%' }}>
                <Text style={{ textAlign: 'right' }}>Picture: </Text>
              </Col>
              <Col>
                <Image
                  square
                  style={{
                    height: 100,
                    width: 100
                  }}
                  source={
                    require('../Images/avatar.png')
                  }
                />
              </Col>
            </Row>
          </Grid>
          <Button
            full
            rounded
            success
            style={{ marginTop: 10 }}
            onPress={() => this.props.navigation.navigate("EditScreenOne")}
          >
            <Text>Edit Profile</Text>
            <Icon name="create" />
          </Button>
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
export default connect(mapStateToProps)(Profile);