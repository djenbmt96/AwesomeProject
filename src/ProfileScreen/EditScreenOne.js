import React from "react";
import { AppRegistry, Alert, DatePickerAndroid, TextInput } from "react-native";
import MyDatePicker from '../DatePicker.js';
import {
  Text, Form, Item, Label, Input, Radio, Col, Row,
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

const validate = values => {
  const error = {};
  error.email = '';
  error.name = '';
  var ema = values.email;
  var nm = values.name;
  if (values.email === undefined) {
    ema = '';
  }
  if (values.name === undefined) {
    nm = '';
  }
  if (ema.length < 8 && ema !== '') {
    error.email = 'too short';
  }
  if (!ema.includes('@') && ema !== '') {
    error.email = '@ not included';
  }
  if (nm.length > 8) {
    error.name = 'max 8 characters';
  }
  return error;
};

class EditScreenOne extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: '' };
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

  renderInput({ input, label, type, meta: { touched, error, warning } }) {
    var hasError = false;
    if (error !== undefined) {
      hasError = true;
    }
    return (
      <Item error={hasError}>
        <Input {...input} />
        {hasError ? <Text style={{ color: 'red' }}>{error}</Text> : <Text />}
      </Item>
    )
  }

  render() {
    const { handleSubmit, reset } = this.props;
    console.log('state.name:' + this.state.name);
    console.log('name:' + this.props.form.name);
    return (
      <Container>
        <Content padder>
          <Form>
            <Item fixedLabel>
              <Col style={{ width: '30%', top: 15 }}>
                <Label>Name:</Label>
              </Col>
              <Col>
                {/* <Input onChangeText={this.props.Edit}/> */}
                <Input ref={(el) => { this.name = el; }}
                  onChangeText={(name) => this.setState({ name })}
                  value={this.state.name} />
              </Col>

            </Item>
            <Item fixedLabel>
              <Col style={{ width: '30%', top: 15 }}>
                <Label>Email:</Label>
              </Col>
              <Col>
                <Input onSubmitEditing={this.props.Input}/>
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
            full
            rounded
            info
            style={{ marginTop: 10 }}
            onPress={this.props.Edit}
          >
            <Icon name="checkmark" />
            <Text>Save</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}
function mapStateToProps(state){
  return{
    form : state.form
  };
}
const matchDispatchToProps = (dispatch) => ({
  Edit: text => dispatch({ type: 'Edit', name: text }),
  Input: event => dispatch({ type: 'Edit', name: event.nativeEvent.text })
})
export default connect(mapStateToProps, matchDispatchToProps)(EditScreenOne);