import React from "react";
import { AppRegistry, Alert, DatePickerAndroid, TextInput } from "react-native";
import MyDatePicker from '../DatePicker.js';
import {
  Text, Form, Item, Label, Input, Radio, Col, Row, Toast,
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
import { edit } from '../actions/index.js';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class EditScreenOne extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      profile: { name: this.props.profileReducers.name, email: this.props.profileReducers.email },
      emailValid:true
    };
  };
  static navigationOptions = ({ navigation }) => ({
    header: (
      <Header>
        <Left>
          <Button transparent onPress={() => navigation.goBack()}>
            <Icon name="arrow-back" />
          </Button>
        </Left>
        <Body>
          <Title>EditScreenOne</Title>
        </Body>
        <Right />
      </Header>
    )
  });
  validate(text, type) {
    alph = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/
    switch (type) {
      case 'email': {
        if (alph.test(text)) {
          this.setState({emailValid:true})
        } else {
          this.setState({emailValid:false})
        }
        break;
      }
    }
  }

  render() {
    const { handleSubmit, reset } = this.props;
    console.log('Date: ' + this.props.date);
    return (
      <Container>
        <Content padder>
          <Form>
            <Item fixedLabel>
              <Col style={{ width: '30%', top: 15 }}>
                <Label>Name:</Label>
              </Col>
              <Col>
                <Input 
                ref={(el) => { this.name = el; }}
                  onChangeText={(name) => {
                    this.setState({ profile: { ...this.state.profile, name: name } });
                  }}
                  value={this.state.profile.name} />
              </Col>

            </Item>
            <Item fixedLabel error={!this.state.emailValid}>
              <Col style={{ width: '30%', top: 15 }}>
                <Label>Email:{this.props.profileReducer}</Label>
              </Col>
              <Col>
                <Input ref={(el) => { this.email = el; }}
                  onChangeText={(email) => {this.setState({ profile: { ...this.state.profile, email: email } });
                  this.validate(email, 'email');}}
                  value={this.state.profile.email} />
              </Col>
            </Item>
            <Item fixedLabel last>
              <Label>Date:</Label>
              <MyDatePicker />
            </Item>
            <Item fixedLabel last style={{ height: 50 }}>
              <Label>Gender</Label>
              <Col style={{ width: '35%' }}>
                <Row style={{ top: 15 }}>
                  <Radio selected={true} />
                  <Text>Male</Text>
                </Row>
              </Col>
              <Col style={{ width: '35%' }}>
                <Row style={{ top: 15 }}>
                  <Radio selected={false} />
                  <Text>Female</Text>
                </Row>
              </Col>
            </Item>
            <Item fixedLabel last>
              <Label>Picture</Label>
              <Input />
            </Item>
          </Form>
          <Button
            disabled={!this.state.emailValid}
            full
            rounded
            info={this.state.emailValid}
            style={{ marginTop: 10 }}
            onPress={() => {
              this.props.edit(this.state.profile);
              this.props.navigation.navigate("Profile");
            }}
          >
            <Icon name="checkmark" />
            <Text>Save</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    profileReducers: state.profileReducers
  };
}

const matchDispatchToProps = (dispatch) => {
  return bindActionCreators({
    edit,
  }, dispatch);
}
export default connect(mapStateToProps, matchDispatchToProps)(EditScreenOne);