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
import { Avatar, Button, Card, Title, Modal, Portal, Provider } from 'react-native-paper';

export class Invest extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalVisibleInvest: true,
      amount: null,
      idSolicitud: this.props.selectedItem.id_solicitud,
      montoInvertido: null,
      idInvestor: props.idInvestor,
      idWorker: this.props.selectedItem.id_user,
    };
  }

  _setModalVisible(visible) {
    this.setState({isModalVisibleInvest: visible});
  }

  _hideMyModal = () => {
    this.setState({isModalVisibleInvest: false});
  };

  saveAmount(num) {
    this.setState({amount: num});
  }

  async payup(amount) {
    const res = await fetch(
      'https://lendpi-gateway.herokuapp.com/api-gateway/new-investment',
      {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          id_solicitud: this.state.idSolicitud,
          monto_invertido: parseInt(this.state.amount),
          id_investor: this.state.idInvestor,
          id_worker: this.state.idWorker,
        }),
      },
    );
    Alert.alert('INVERSION REALIZADA!.');
  }

  render() {
    return (
      <Provider>
      <Portal>
      <Modal
        transparent={false}
        visible={this.state.isModalVisibleInvest}
        onRequestClose={() => {
          this._hideMyModal();
        }}
        contentContainerStyle={styles.modal}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text> Valor Total Requerido: </Text>
            <View style={styles.internalModalView}>
              <Text style={styles.text}>
                {' '}
                {this.props.selectedItem.valor_financiacion}{' '}
              </Text>
            </View>
            <Text> Acumulado Hasta El Momento: </Text>
            <View style={styles.internalModalView}>
              <Text style={styles.text}>
                {' '}
                {this.props.selectedItem.total_acumulado}{' '}
              </Text>
            </View>

            <View style={styles.paymentField}>
              <Text style={styles.text}> Ingrese cantidad a transferir: </Text>
              <TextInput
                placeholder="Cantidad"
                onChangeText={(amount) => this.saveAmount(amount)}>
                {' '}
              </TextInput>
            </View>
            <Button
              icon="bank"
              mode="contained"
              onPress={() => {
                this.payup(this.state.amount);
                this._hideMyModal();
                this.props.hideModal();
              }}
              style={styles.button}>
              REALIZAR TRANSFERENCIA
            </Button>

            <Button
              icon="close-box-outline"
              mode="contained"
              onPress={() => {
                this._hideMyModal();
              }}
              style={styles.button}>
              CERRAR
            </Button>
          </View>
        </View>
      </Modal>
    </Portal>
  </Provider>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 5,
    backgroundColor: '#FA5C61',
    margin: 10,
  },
  modal:{
    height: 800,
  },
  text: {
    textAlignVertical: 'center',
    textAlign: 'center',
    fontWeight: 'bold',
    height: 30,
    fontSize: 19,
  },
  internalModalView: {
    backgroundColor: '#e3ffe7',
    marginVertical: 5,
    paddingLeft:10,
  },
  TransferButtonStyle: {
    marginTop: 10,
    paddingTop: 20,
    paddingBottom: 20,
    marginTop: 40,
    marginLeft: 30,
    marginRight: 30,
    backgroundColor: '#00BCD4',
    borderRadius: 30,
  },
  SubmitButtonStyle: {
    marginTop: 5,
    paddingTop: 5,
    paddingBottom: 5,
    marginLeft: 120,
    marginRight: 100,
    marginTop: 50,
    width: 100,
    backgroundColor: 'grey',
    borderRadius: 15,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 5,
    padding: 20,
    elevation: 0.5,
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  paymentField: {
    backgroundColor: '#99f794',
    padding: 20,
    marginTop: 100,
    borderRadius: 20,
    marginBottom: 100,
  },
});
