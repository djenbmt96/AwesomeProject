import React from "react";
import { AppRegistry, Alert, DatePickerAndroid, TextInput, Image,ScrollView } from "react-native";
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
import DatePicker from 'react-native-datepicker';
import RadioForm, { RadioButton, RadioButtonInput, RadioButtonLabel } from 'react-native-simple-radio-button';
import ImagePicker from 'react-native-image-picker';

var radio_props = [
  { label: 'Male', value: 0 },
  { label: 'Female', value: 1 }
];

class EditScreenOne extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      profile: {
        name: this.props.profileReducers.name,
        email: this.props.profileReducers.email,
        date: this.props.profileReducers.date,
        gender: this.props.profileReducers.gender,
        picture: this.props.profileReducers.picture
      },
      avatarSource: '',
      emailValid: true
    };
    this.upload = this.upload.bind(this);
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
          <Title>Edit profile</Title>
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
          this.setState({ emailValid: true })
        } else {
          this.setState({ emailValid: false })
        }
        break;
      }
    }
  }
  upload() {
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
        this.setState({
          profile:{...this.state.profile, picture: source.uri}
        });
      }
    });
  }

  render() {
    console.log("name",this.state.profile.name);
    const { handleSubmit, reset } = this.props;
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
                  onChangeText={(email) => {
                    this.setState({ profile: { ...this.state.profile, email: email } });
                    this.validate(email, 'email');
                  }}
                  value={this.state.profile.email} />
              </Col>
            </Item>
            <Item fixedLabel last>
              <Label>Date:</Label>
              <DatePicker
                style={{ width: 200 }}
                date={this.state.profile.date}
                mode="date"
                androidMode="spinner"
                placeholder="select date"
                format="YYYY-MM-DD"
                minDate="1900-01-01"
                maxDate="2020-01-01"
                confirmBtnText="Confirm"
                cancelBtnText="Cancel"
                customStyles={{
                  dateIcon: {
                    position: 'absolute',
                    left: 0,
                    top: 4,
                    marginLeft: 0
                  },
                  dateInput: {
                    marginLeft: 36
                  }
                }}
                onDateChange={(date) => { this.setState({ profile: { ...this.state.profile, date: date } }) }}
              />
            </Item>
            <Item fixedLabel last style={{ height: 50 }}>
              <Col style={{ width: '30%', top: 15 }}>
                <Label>Gender</Label>
              </Col>
              <Col>
                <RadioForm
                  radio_props={radio_props}
                  initial={this.state.profile.gender}
                  formHorizontal={true}
                  labelHorizontal={true}
                  buttonColor={'#2196f3'}
                  animation={true}
                  onPress={(value) => { this.setState({ profile: { ...this.state.profile, gender: value } }) }}
                />
              </Col>

            </Item>
            <Item fixedLabel last>
              <Col style={{ width: '30%', top: 15 }}>
                <Label>Picture</Label>
              </Col>
              <Col>
                <Button block light onPress={this.upload}>
                  <Text>Upload</Text>
                </Button>
              </Col>
            </Item>
            <Item>
              <Col style={{ width: '30%' }}>
                <Label></Label>
              </Col>
              <Col>
                <Image
                  square
                  style={{
                    height: 100,
                    width: 100
                  }}
                  source={this.state.profile.picture ==='' ?
                  require('../Images/avatar.png') : {uri:this.state.profile.picture}}
                />
              </Col>
            </Item>
          <Button
            disabled={!this.state.emailValid || this.state.profile.name==''}
            full
            rounded
            info={this.state.emailValid && this.state.profile.name!=''}
            style={{ marginTop: 10 }}
            onPress={() => {
              this.props.edit(this.state.profile);
              this.props.navigation.goBack();
            }}
          >
            <Icon name="checkmark" />
            <Text>Save</Text>
          </Button>
          </Form>
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