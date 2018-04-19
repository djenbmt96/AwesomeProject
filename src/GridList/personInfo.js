import React from "react";
import { AppRegistry, Alert, Image, View,ScrollView } from "react-native";
import MyModal from '../Modal/Modal.js';
import { StackNavigator } from "react-navigation";
import styles from '../styles/custom.js'
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

class PersonInfo extends React.Component {
    render() {
        let person=this.props.person;
        return (
            <ScrollView style={styles.modal}>
                <View>
                    <View style={styles.headerWrapper}>
                        <Text style={styles.header}>
                            {person.id}
                        </Text>
                        <Image
                            source={{ uri: person.image }}
                            style={styles.thumbnailInfo}
                        />
                    </View>
                    <Text style={styles.text}>{person.description}</Text>
                    <Text style={styles.title}>{'Who Played Him:'}</Text>
                    <Text style={styles.text}>{person.name}</Text>
                    <Text style={styles.title}>{'When:'}</Text>
                    <Text style={styles.text}>{person.when}</Text>
                    <Text style={styles.title}>{'Memorable Gadget/Item of Clothing:'}</Text>
                    <Text style={styles.text}>{person.gadget}</Text>
                    <Text style={styles.title}>{'Reason for Regeneration:'}</Text>
                    <Text style={styles.text}>{person.regeneration}</Text>
                    <Text style={styles.title}>{'Three Recommended Stories:'}</Text>
                    <Text style={styles.text}>{person.stories}</Text>
                </View>
            </ScrollView>
        );
    }
}
export default PersonInfo;