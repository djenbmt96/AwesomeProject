import React from "react";
import { AppRegistry, Alert, Image, View } from "react-native";
import MyModal from '../Modal/Modal.js';
import { StackNavigator } from "react-navigation";
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

class Modal extends React.Component {
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
                        <Title>Modal</Title>
                    </Body>
                    <Right />
                </Header>
                <Content>
                    <MyModal>
                    </MyModal>
                </Content>
            </Container>
        );
    }
}
export default Modal;