import {
  View,
  TextInput,
  Alert,
  StyleSheet,
  FlatList,
  Text,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  ActivityIndicator,
  Modal,
} from 'react-native';

import { useContext } from "react";
import { Component } from 'react';
import React, { useState, useEffect } from 'react';
import {MyModal} from './modalSolicitud';
import { AuthContext } from '../components/context';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';

export class ListAllSolicitudes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      loading: true,
      isModalVisible: false,
      selectedItem: null,
      id: null,
    };
    this.getIdInvestor();
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

  async getIdInvestor() {
    const urlIdInvestor = 'https://lendpi-gateway.herokuapp.com/api-gateway/investor/id/';
    const data = await fetch(urlIdInvestor + this.props.email);
    const res = await data.json();
    const idInvestor = res.uuid[0];
    this.setState({
      id: idInvestor,
    });
  }

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
        if (clean2.profile[0].photo != undefined) {
          clean.listaCategoria[row].photo = clean2.profile[0].photo;
        }
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
        <View >
          <FlatList
            data={this.state.items}
            renderItem={({item}) => (
                <Card style={styles.card}>
                <Card.Title title={item.name} subtitle={item.modelo} elevation='2' Theme/>
                <Card.Content>
                  <Title> Total Solicitado: {item.valor_financiacion} </Title>
                </Card.Content>
                <Card.Actions >
                  <Button
                    mode="contained"
                    style={styles.button}
                    activeOpacity={0.5}
                    onPress={() => {
                      this._onPressItem(item);
                    }}>
                    DETALLES
                  </Button>
                </Card.Actions>
                </Card>
            )}
            keyExtractor={(item, index) => item.id_user}
          />

          {this.state.isModalVisible && (

            <MyModal
              selectedItem={this.state.selectedItem}
              modalVisible={this.state.isModalVisible}
              hideModal={this._hideMyModal}
              idInvestor={this.state.id}
            />

          )}

        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  card: {
    elevation:3,
    margin: 5,
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
    borderRadius: 5,
    backgroundColor: '#FA5C61',
    margin: 10,
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
