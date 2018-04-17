import React from "react";
import { StatusBar, Image, Alert, StyleSheet, TextInput } from "react-native";
import {
  Button, Thumbnail, List, ListItem,
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
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { increment, decrement, addComment } from '../actions/index.js';

class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visibleTextInput: false,
      comment: {idUser:'1',comment:'',time:'0:00 am'}
    }
    this.save=this.save.bind(this);
  }
  setVisible() {
    this.setState({ visibleTextInput: !this.state.visibleTextInput })
  }
  _renderTextInput = () => (
    <CardItem bordered style={{ height: 50, paddingBottom: 0 }}>
      <TextInput style={{ width: '85%' }}
        onChangeText={(text) => {
          this.setState({ comment:{...this.state.comment, comment:text} });
        }}>
      </TextInput>
      <Right style={{ width: 50 }}>
        <Button
          transparent
          style={{ height: 40, width: 40 }}
          onPress={this.save}>
          <Icon style={{ marginLeft: 12 }} name='paper-plane' />
        </Button>
      </Right>
    </CardItem>
  )
  save(){
    if(this.state.comment.comment!='') 
    {
      this.props.addComment(this.state.comment);
      this.setState({comment:{...this.state.comment,comment:''}});
    }
  }

  render() {
    // console.log('comments:' + this.props.comments);
    // console.log('id:' + this.state.comment.idUser);
    // console.log('comment:' + this.state.comment.comment);
    // console.log('time:' + this.state.comment.time);
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
                style={{ height: 200, width: '100%' }} />
            </CardItem>
            <CardItem bordered style={{ height: 50 }}>
              <Left>
                <Button dark transparent iconLeft
                  onPress={() => this.props.increment()}>
                  <Icon active name="rose" />
                  <Text>{this.props.count} Likes</Text>
                </Button>
              </Left>
              <Right>
                <Button transparent dark iconLeft
                  onPress={() => this.setVisible()}>
                  <Icon name="chatbubbles" />
                  <Text>Comments</Text>
                </Button>
              </Right>
            </CardItem>
            {this.state.visibleTextInput ? this._renderTextInput() : null}
            <CardItem bordered style={{ paddingLeft: 0 }}>
              <Container style={{ height: "100%" }}>
                {/* <ListItem avatar style={styles.listitem} dataSource={this.props.comments.comments}>
                    <Left >
                      <Thumbnail source={this.props.profileReducers.picture === '' ?
                        require('../Images/avatar.png') : { uri: this.props.profileReducers.picture }} />
                    </Left>
                    <Body style={styles.itembody}>
                      <Text>{this.props.profileReducers.name}</Text>
                      <Text note>Your picture so beautiful :D</Text>
                    </Body>
                    <Right style={{ paddingRight: 0, paddingTop: 0 }}>
                      <Text note>3:43 pm</Text>
                    </Right>
                  </ListItem> */}
                <List dataArray={this.props.comments}
                  renderRow={
                    (comment) => {
                      return (
                        <ListItem avatar style={styles.listitem}>
                          <Left >
                            <Thumbnail source={this.props.profileReducers.picture === '' ?
                              require('../Images/avatar.png') : { uri: this.props.profileReducers.picture }} />
                          </Left>
                          <Body style={styles.itembody}>
                            <Text>{this.props.profileReducers.name}</Text>
                            <Text note>{comment.comment}</Text>
                          </Body>
                          <Right style={{ paddingRight: 0, paddingTop: 0 }}>
                            <Text note>{comment.time}</Text>
                          </Right>
                        </ListItem>
                      )
                    }
                  }>

                </List>
              </Container>
            </CardItem>
          </Card>

        </Content>
      </Container>
    );
  }
}

function mapStateToProps(state) {
  return {
    count: state.count,
    profileReducers: state.profileReducers,
    comments: state.comments
  };
}
function matchDispatchToProps(dispatch) {
  return bindActionCreators({ increment, decrement, addComment }, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(HomeScreen);

const styles = StyleSheet.create(
  {
    listitem: {
      marginLeft: 5
    },
    itembody:
      {
        marginLeft: 5
      }
  }
)