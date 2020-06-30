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
import {Invest} from './modalPayup';

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
      <Modal
        animationType="slide"
        transparent={false}
        visible={this.state.isModalVisible}
        onRequestClose={() => {
          this.props.hideModal();
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.text}> Nombre: </Text>
            <View style={styles.internalModalView}>
              <Text style={styles.text}> {this.props.selectedItem.name} </Text>
            </View>
            <Text style={styles.text}> Marca: </Text>
            <View style={styles.internalModalView}>
              <Text style={styles.text}> {this.props.selectedItem.marca} </Text>
            </View>
            <Text style={styles.text}> Modelo: </Text>
            <View style={styles.internalModalView}>
              <Text style={styles.text}>
                {' '}
                {this.props.selectedItem.modelo}{' '}
              </Text>
            </View>
            <Text style={styles.text}> Year: </Text>
            <View style={styles.internalModalView}>
              <Text style={styles.text}>
                {' '}
                {this.props.selectedItem.year_model}{' '}
              </Text>
            </View>
            <Text style={styles.text}> Meses a financiar: </Text>
            <View style={styles.internalModalView}>
              <Text style={styles.text}>
                {' '}
                {this.props.selectedItem.tiempo_financiacion}{' '}
              </Text>
            </View>
            <Text style={styles.text}> Valor Total Requerido: </Text>
            <View style={styles.internalModalView}>
              <Text style={styles.text}>
                {' '}
                {this.props.selectedItem.valor_financiacion}{' '}
              </Text>
            </View>
            <Text style={styles.text}> Acumulado Hasta El Momento: </Text>
            <View style={styles.internalModalView}>
              <Text style={styles.text}> {this.state.amount} </Text>
            </View>
            <TouchableOpacity
              style={styles.SubmitButtonStyle}
              onPress={() => {
                this._showInvest(this.state.selectedItem);
              }}>
              <Text style={styles.textStyle}>INVERTIR</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.SubmitButtonStyle}
              onPress={() => {
                this.props.hideModal();
              }}>
              <Text style={styles.textStyle}>CERRAR</Text>
            </TouchableOpacity>
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
    );
  }
}

const styles = StyleSheet.create({
  container: {
    margin: 50,
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
