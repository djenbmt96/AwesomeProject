import React, { Component } from 'react';
import { Text, TouchableHighlight, TouchableOpacity, View, StyleSheet } from 'react-native';
import Modal from "react-native-modal";
import { Button, Icon, Content, StyleProvider, List, ListItem } from 'native-base';
import Type from '../Enum';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
class MyModal extends Component {
  constructor(props) {
    super(props);
    this.getData = this.getData.bind(this);
    this.state = { countries: [] };
  }
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
  getData() {
    fetch(Type.DO_MAIN + "user/getCountries?token=" + this.props.profileReducers.token)
      .then(response => response.json())
      .then(data => {
        this.setState({ countries: data.Data });
        console.log("messages: ", data.Message);
        console.log("Success: ", data.Success);
      })
      .catch((error) => {
        console.log('error:', error);
      })
  }

  render() {
    return (
      <View>
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
          <Button
            full
            rounded
            primary
            style={{ marginTop: 10 }}
            onPress={this.getData}
          >
            <Text style={{ color: 'white' }}>Get DATA</Text>
            <Icon name="aperture" />
          </Button>

        </View>
        <List
          dataArray={this.state.countries}
          renderRow={data => {
            return (
              <ListItem>
                <Text>{data.Name}</Text>
              </ListItem>
            );
          }}
        />
      </View>
    );
  }
}

function mapStateToProps(state) {
  return {
    profileReducers: state.profileReducers
  };
}
// const matchDispatchToProps = (dispatch) => {
//   return bindActionCreators({
//       token,
//   }, dispatch);
// }
export default connect(mapStateToProps)(MyModal);

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
