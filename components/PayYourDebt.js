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

export class PayYourDebt extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      debt:null,
      amount: null,
      // amount: null,
      // idSolicitud: this.props.selectedItem.id_solicitud,
      // montoInvertido: null,
      // idInvestor: 24278261,
      // idWorker: this.props.selectedItem.id_user,
      //El id del investor hay que pasarlo como un prop una vez se tenga la sesion del usuario investor
      // recordar quitarlo asi como esta quemado en el codigo
    };
    this.loadDebt();
  }

  async loadDebt(idWorker) {
    const res = await fetch(
      'https://lendpi-gateway.herokuapp.com/api-gateway/deuda/' + '87877777'
        // Cambiar el id por el de la sesion que este iniciada, quitarlo quemado -> this.props.selectedItem.id_user
    );
    const clean = await res.json();

    this.setState({
      debt: parseInt(clean.deuda[0].pendiente),
    })
  }

  async processPayment(amount, idWorker) {
    const res = await fetch(
      'https://lendpi-gateway.herokuapp.com/api-gateway/new-debt-payment/87877777/' + parseInt(amount),
      {
        method: 'PUT'
      });
    Alert.alert('PAGO REALIZADO!.');
    this.loadDebt();
  }

  saveAmount(num) {
    this.setState({amount: num});
  }

  render() {
    return (
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.text}> Monto Restante: </Text>
            <View style={styles.internalModalView}>
              <Text style={styles.text}>
                {' '}
                {this.state.debt}
              </Text>
            </View>

            <View style={styles.paymentField}>
              <Text style={styles.text}> Ingrese cantidad a pagar: </Text>
              <TextInput
                placeholder="Cantidad"
                onChangeText={(num) => this.saveAmount(num)}>
                {' '}
              </TextInput>
            </View>
            <TouchableOpacity
              style={styles.TransferButtonStyle}
              onPress={() => {
                this.processPayment(this.state.amount);
              }}>
              <Text style={styles.textStyle}>REALIZAR PAGO</Text>
            </TouchableOpacity>
          </View>
        </View>
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
