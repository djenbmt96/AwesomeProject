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
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import { increment, decrement } from '../actions/index.js';

class HomeScreen extends React.Component {
  render() {
    console.log(this.props.count);
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
                <Icon active name="rose" />
                <Text>{this.props.count} Likes</Text>
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
            onPress={() => this.props.increment()}
          >
            <Icon name='thumbs-up'/>
            <Text>Press here to like</Text>
          </Button>
          <Button iconLeft
            full
            rounded
            primary
            style={{ marginTop: 10 }}
            onPress={() => this.props.decrement()}
          >
            <Icon name='thumbs-down'/>
            <Text>Press here to dislike</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}

function mapStateToProps(state){
  return{
    count : state.count
  };
}
function matchDispatchToProps(dispatch){
  return bindActionCreators({increment: increment, decrement: decrement}, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(HomeScreen);