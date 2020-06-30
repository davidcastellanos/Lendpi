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

export class Invest extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalVisibleInvest: true,
      amount: null,
      idSolicitud: this.props.selectedItem.id_solicitud,
      montoInvertido: null,
      idInvestor: 24278261,
      idWorker: this.props.selectedItem.id_user,
      //El id del investor hay que pasarlo como un prop una vez se tenga la sesion del usuario investor
      // recordar quitarlo asi como esta quemado en el codigo
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
      <Modal
        animationType="slide"
        transparent={false}
        visible={this.state.isModalVisibleInvest}
        onRequestClose={() => {
          this._hideMyModal();
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.text}> Valor Total Requerido: </Text>
            <View style={styles.internalModalView}>
              <Text style={styles.text}>
                {' '}
                {this.props.selectedItem.valor_financiacion}{' '}
              </Text>
            </View>
            <Text style={styles.text}> Acumulado Hasta El Momento: </Text>
            <View style={styles.internalModalView}>
              <Text style={styles.text}>
                {' '}
                {this.props.selectedItem.total_acumulado}{' '}
              </Text>
            </View>
​
            <View style={styles.paymentField}>
              <Text style={styles.text}> Ingrese cantidad a transferir: </Text>
              <TextInput
                placeholder="Cantidad"
                onChangeText={(amount) => this.saveAmount(amount)}>
                {' '}
              </TextInput>
            </View>
            <TouchableOpacity
              style={styles.TransferButtonStyle}
              onPress={() => {
                this.payup(this.state.amount);
                this._hideMyModal();
                this.props.hideModal();
              }}>
              <Text style={styles.textStyle}>REALIZAR TRANSFERENCIA</Text>
            </TouchableOpacity>
​
            <TouchableOpacity
              style={styles.SubmitButtonStyle}
              onPress={() => {
                this._hideMyModal();
              }}>
              <Text style={styles.textStyle}>CERRAR</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    );
  }
}

const styles = StyleSheet.create({
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
  internalModalView: {
    backgroundColor: 'lightgrey',
    borderRadius: 20,
    marginVertical: 5,
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
    borderRadius: 20,
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
  },
});
