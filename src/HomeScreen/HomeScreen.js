import React from "react";
import { StatusBar,Image,Alert } from "react-native";
import {
  Button,
  Text,
  Container,
  Card,
  CardItem,
  Body,
  Content,
  Header,
  Title,
  Left,
  Icon,
  Right
} from "native-base";

export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {like: 0};
  }
  _likeUp(){
    Alert.alert('You liked!');
  };
  _likeDown(){
    Alert.alert('You dislike!');
  }
  render() {
    let likes =this.state.like;
    return (
      <Container>
        <Header>
          <Left>
            <Button
              transparent
              onPress={() => this.props.navigation.navigate("DrawerOpen")}
            >
              <Icon name="menu" />
            </Button>
          </Left>
          <Body>
            <Title>HomeScreen</Title>
          </Body>
          <Right />
        </Header>
        <Content padder>
          <Card>
            <CardItem>
              <Left>
                <Icon name="images" />
                <Body>
                  <Text>This is my photo</Text>
                  <Text note>05-Apr-2018</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem cardBody>
              <Image source={require('../Images/countryside.jpg')}
                style={{height:200,width:'100%'}}/>
            </CardItem>
            <CardItem>
              <Left>
                <Icon active name="thumbs-up" />
                <Text>{likes} Likes</Text>
              </Left>
              <Right>
                <Button transparent iconRight dark>
                  <Text note>9h ago</Text>
                  <Icon name="clock"/>
                </Button>
              </Right>
            </CardItem>
          </Card>
          <Button iconLeft
            full
            rounded
            primary
            style={{ marginTop: 10 }}
            onPress={this._likeUp}
          >
            <Icon name='rose'/>
            <Text>Press here to like</Text>
          </Button>
          <Button iconLeft
            full
            rounded
            primary
            style={{ marginTop: 10 }}
            onPress={this._likeDown}
          >
            <Icon name='thumbs-down'/>
            <Text>Press here to dislike</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}
