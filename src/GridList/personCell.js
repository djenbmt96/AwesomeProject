import React from "react";
import { AppRegistry, Alert, Image, View, TouchableHighlight } from "react-native";
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
import styles from '../styles/custom';

class personCell extends React.Component {
    constructor(props){
        super(props);
    }
    render() {
        let person = this.props.person;
        return (
            <View style={styles.cell}>
                <Card>
                    <CardItem cardBody button onPress={()=>{this.props.showPerson(person)}}>
                        <Image source={{uri:person.image}} style={styles.thumbnail} />
                    </CardItem>
                    <CardItem footer button onPress={()=>{this.props.showPerson(person)}}>
                        <Text>{person.name}</Text>
                    </CardItem>
                </Card>
            </View>
        )
    }
}

export default personCell