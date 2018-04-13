import React, { Component } from 'react';
import { Text, TouchableHighlight, TouchableOpacity, View, StyleSheet } from 'react-native';
import Modal from "react-native-modal";
import { Button, Icon, Content,StyleProvider  } from 'native-base';
class MyModal extends Component {
  state = {
    visibleModal: false,
  };

  setModalVisible(visible) {
    this.setState({ visibleModal: visible });
  }
  _renderButton = (text, onPress) => (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.button}>
        <Text>{text}</Text>
      </View>
    </TouchableOpacity>
  );

  _renderModalContent = () => (
    <View style={styles.modalContent}>
      <Text>Hello!</Text>
      {this._renderButton("Close", () => this.setState({ visibleModal: null }))}
    </View>
  );

  render() {
    return (
      <View style={{ margin: 10 }}>
        <Button
          full
          rounded
          primary
          style={{ marginTop: 10 }}
          onPress={() => this.setModalVisible(1)}
        >
          <Text style={{ color: 'white' }}>Show Modal</Text>
          <Icon name="aperture" />
        </Button>
        <Modal isVisible={this.state.visibleModal === 1}>
          {this._renderModalContent()}
        </Modal>
      </View>
    );
  }
}
export default MyModal;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  button: {
    backgroundColor: "lightblue",
    padding: 12,
    margin: 16,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
    borderColor: "rgba(0, 0, 0, 0.1)"

  },
  modalContent: {
    backgroundColor: "white",
    padding: 22,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
    borderColor: "rgba(0, 0, 0, 0.1)"
  },
  bottomModal: {
    justifyContent: "flex-end",
    margin: 0
  }
});
