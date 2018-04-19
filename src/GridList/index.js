import React from "react";
import { AppRegistry, Alert, Image, View, ListView, TouchableOpacity } from "react-native";
import { StackNavigator } from "react-navigation";
import {
    Text, Row, Col, Grid, ListItem, Radio, List,
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
import PersonCell from './personCell.js';
import styles from '../styles/custom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PersonInfo from './personInfo.js';
import Modal from 'react-native-modal';
import { getPerson, showPeople } from '../actions/index.js';

class People extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
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
                        <Title>List People</Title>
                    </Body>
                    <Right />
                </Header>
                <Content>
                    <List contentContainerStyle={styles.grid}
                        dataArray={this.props.people}
                        renderRow={
                            (person) => {
                                return (
                                    <PersonCell person={person} showPerson={this.props.getPerson} />
                                )
                            }
                        }>
                    </List>
                    <Modal isVisible={this.props.showPerson} transparent={true}>
                        <View style={styles.modalContent}>
                            <PersonInfo person={this.props.person}/>
                            <TouchableOpacity onPress={this.props.showPeople}>
                                <View style={styles.buttonCloseModal}>
                                    <Text>Close</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </Modal>
                </Content>

            </Container>
        );
    }
}

function mapStateToProps(state) {
    return {
        people: state.people.people,
        showPerson: state.people.showPerson,
        person: state.people.person
    };
}
function matchDispatchToProps(dispatch) {
    return bindActionCreators({ getPerson, showPeople }, dispatch)
}
export default connect(mapStateToProps, matchDispatchToProps)(People);