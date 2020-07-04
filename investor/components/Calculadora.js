import {View, TextInput, Alert, Button, StyleSheet, Picker} from 'react-native';

import {Component} from 'react';
import React, {useState, useEffect} from 'react';

export class Calculadora extends Component {
  constructor() {
    super();
    this.state = {
      amount: '',
      interest: '',
      time: '',
      opcion: '',
      array: [],
      pickerValue: '',
    };
​
    this.getInterestRates();
  }

  changeMarca(amount) {
    this.setState({amount});
  }
  changeModelo(interest) {
    this.setState({interest});
  }
  changeYear(time) {
    this.setState({time});
  }

  async getInterestRates() {
    const res2 = await fetch(
      'https://database-lendpi-deuda.herokuapp.com/deudas/all/intereses',
    );
    const clean2 = await res2.json();

    for (let row in clean2.listIntereses) {
      this.state.array.push(clean2.listIntereses[row]);
    }
    return this.state.array;
  }

  async buttonSubmit(opcion) {
    this.setState({
      time: await this.state.array[opcion].id_tasa,
    });

    this.setState({
      interest: await this.state.array[opcion].porcentaje,
    });

    const data =
      this.state.amount + '/' + this.state.interest + '/' + this.state.time;

    const res = await fetch(
      'https://lendpi-gateway.herokuapp.com/api-gateway/calculate/' + data,
    );

    const clean = await res.json();

    Alert.alert('Total a pagar: ' + clean.totalPayment);
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          placeholder="Cantidad"
          value={this.state.amount}
          onChangeText={(amount) => this.changeMarca(amount)}
        />

        <Picker
          selectedValue={this.state.pickerValue && this.state.opcion}
          onValueChange={(itemValue, itemIndex) => {
            this.setState({opcion: itemValue, pickerValue: itemValue});
          }}>
          <Picker.Item
            label="¿En qué tiempo deseas pagar el préstamo?"
            value="NONE"
          />
          <Picker.Item label="6 meses" value="0" />
          <Picker.Item label="12 meses" value="1" />
          <Picker.Item label="18 meses" value="2" />
          <Picker.Item label="24 meses" value="3" />
          <Picker.Item label="30 meses" value="4" />
        </Picker>

        <Button
          title="CALCULAR"
          onPress={() => this.buttonSubmit(this.state.opcion)}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    margin: 50,
  },
});
