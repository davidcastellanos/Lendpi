import {
  View,
  TextInput,
  Alert,
  Button,
  StyleSheet,
  FlatList,
  Text,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  ActivityIndicator,
  Modal,
} from 'react-native';

import {Component} from 'react';
import React, {useState, useEffect} from 'react';
import {MyModal} from './modalSolicitud';

export class ListAllSolicitudes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      loading: true,
      isModalVisible: false,
      selectedItem: null,
    };
    this.listup();
  };

  _onPressItem = (item) => {
    this._showModal(item);
  };

  _hideMyModal = () => {
    this.setState({isModalVisible: false});
  };

  _setModalVisible = (visible) => {
    this.setState({isModalVisible: visible});
  };

  _showModal = (item) => {
    this.setState({isModalVisible: true, selectedItem: item});
  };

  async listup() {
    let newList = [];
    const res = await fetch(
      'https://lendpi-gateway.herokuapp.com/api-gateway/all-solicitudes/moto',
    );
    const clean = await res.json();
    for (let row in clean.listaCategoria) {
      newList.push(clean.listaCategoria[row]);
      try {
        const res2 = await fetch(
          'https://lendpi-gateway.herokuapp.com/api-gateway/worker-profile/' +
            clean.listaCategoria[row].id_user,
        );
        const clean2 = await res2.json();
        if (clean2.profile[0].first_name != undefined) {
          clean.listaCategoria[row].name = clean2.profile[0].first_name;
        } else {
          continue;
        }
      } catch (e) {
        continue;
      }
    }
    this.setState({
      items: newList,
      loading: false,
    });
  }

  render() {
    const {modalVisible} = this.state;

    if (this.state.loading){
      return (
        <View style={styles.container}>
          <ActivityIndicator size="large" animating />
        </View>
      );
    } else {
      return (
        <View style={styles.container}>
          <FlatList
            data={this.state.items}
            renderItem={({item}) => (
              <View style={styles.item}>
                <View style={styles.internalview}>
                  <Text style={styles.text}> {item.name} </Text>
                </View>
                <View style={styles.internalview}>
                  <Text style={styles.text}> {item.modelo} </Text>
                </View>
                <View style={styles.internalview}>
                  <Text style={styles.text}> {item.valor_financiacion} </Text>
                </View>
                <TouchableOpacity
                  style={styles.SubmitButtonStyle}
                  activeOpacity={0.5}
                  onPress={() => {
                    this._onPressItem(item);
                  }}>
                  <Text style={styles.text}> DETALLES </Text>
                </TouchableOpacity>
              </View>
            )}
            keyExtractor={(item, index) => item.id_user}
          />

          {this.state.isModalVisible && (

            <MyModal
              selectedItem={this.state.selectedItem}
              modalVisible={this.state.isModalVisible}
              hideModal={this._hideMyModal}
            />

          )}

        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    margin: 50,
  },
  item: {
    backgroundColor: '#99f794',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 10,
  },
  title: {
    fontSize: 32,
  },
  button: {
    width: 10,
    borderRadius: 10,
    backgroundColor: '#99f794',
    paddingLeft: 10,
    paddingRight: 10,
  },
  text: {
    textAlignVertical: 'center',
    textAlign: 'center',
    fontWeight: 'bold',
    height: 30,
  },
  internalview: {
    backgroundColor: 'lightgrey',
    borderRadius: 20,
    marginVertical: 5,
  },
  internalModalView: {
    backgroundColor: 'lightgrey',
    borderRadius: 20,
    marginVertical: 5,
  },
  SubmitButtonStyle: {
    marginTop: 10,
    paddingTop: 10,
    paddingBottom: 10,
    marginLeft: 30,
    marginRight: 30,
    backgroundColor: '#00BCD4',
    borderRadius: 30,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: '#ffc085',
    borderRadius: 20,
    padding: 20,
    shadowColor: '#000',
    elevation: 0.5,
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});
