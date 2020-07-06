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
} from 'react-native';

import {Component} from 'react';
import React, {useState, useEffect} from 'react';
import {Invest} from './modalPayup';
import { Avatar, Button, Card, Title, Modal, Portal, Provider } from 'react-native-paper';

export class MyModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalVisible: true,
      isModalVisibleInvest: false,
      selectedItem: props.selectedItem,
      amount: null,
    };
    this.getCurrentAmount();
  }

  _setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

  _showInvest = (item) => this.setState({isModalVisibleInvest: true});

  async getCurrentAmount() {
    const res = await fetch(
      'https://database-lendpi.herokuapp.com/solicitudes/solicitud/' +
        this.props.selectedItem.id_user,
    );
    const clean = await res.json();
    this.setState({amount: clean.solicitud[0].total_acumulado});
  }

  render() {
    return (
      <Provider>
      <Portal>
      <Modal
        transparency={true}
        visible={this.state.isModalVisible}
        onDismiss={() => {
          this.props.hideModal();
        }}
        contentContainerStyle={styles.modal}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.textTitle}> Nombre: </Text>
            <View style={styles.internalModalView}>
              <Text style={styles.textInternal}> {this.props.selectedItem.name} </Text>
            </View>
            <Text style={styles.textTitle}> Marca: </Text>
            <View style={styles.internalModalView}>
              <Text style={styles.textInternal}> {this.props.selectedItem.marca} </Text>
            </View>
            <Text style={styles.textTitle}> Modelo: </Text>
            <View style={styles.internalModalView}>
              <Text style={styles.textInternal}>
                {' '}
                {this.props.selectedItem.modelo}{' '}
              </Text>
            </View>
            <Text style={styles.textTitle}> Year: </Text>
            <View style={styles.internalModalView}>
              <Text style={styles.textInternal}>
                {' '}
                {this.props.selectedItem.year_model}{' '}
              </Text>
            </View>
            <Text style={styles.textTitle}> Meses a financiar: </Text>
            <View style={styles.internalModalView}>
              <Text style={styles.textInternal}>
                {' '}
                {this.props.selectedItem.tiempo_financiacion}{' '}
              </Text>
            </View>
            <Text style={styles.textTitle}> Valor Total Requerido: </Text>
            <View style={styles.internalModalView}>
              <Text style={styles.textInternal}>
                {' '}
                {this.props.selectedItem.valor_financiacion}{' '}
              </Text>
            </View>
            <Text style={styles.textTitle}> Acumulado Hasta El Momento: </Text>
            <View style={styles.internalModalView}>
              <Text style={styles.textInternal}> {this.state.amount} </Text>
            </View>

            <Button
              icon="currency-usd"
              mode="contained"
              onPress={() => {
                this._showInvest(this.state.selectedItem);
              }}
              style={styles.button}>
              INVERTIR
            </Button>

            <Button
              icon="close-box-outline"
              mode="contained"
              onPress={() => {
                this.props.hideModal();
              }}
              style={styles.button}>
              CERRAR
            </Button>

          </View>
          {this.state.isModalVisibleInvest && (
            <Invest
              selectedItem={this.props.selectedItem}
              modalVisible={this.props.isModalVisible}
              hideModal={this.props.hideModal}
            />
          )}
        </View>
      </Modal>
      </Portal>
    </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    margin: 50,
  },
  modal: {
    height: 650,
  },
  button: {
    marginTop:20,
  },
  textInternal: {
    textAlignVertical: 'center',
    textAlign: 'center',
    fontWeight: 'bold',
    height: 30,
    fontSize: 19,
  },
  internalModalView: {
    backgroundColor: '#fcfcfc',
    marginVertical: 5,
    paddingLeft:10,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 10,
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 5,
  },
  textTitle: {
    marginTop:10,
  }
});
