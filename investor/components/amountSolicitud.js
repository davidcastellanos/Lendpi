import React, { Component } from 'react';
import { Card, Title } from 'react-native-paper';
import { StyleSheet, Text, View } from 'react-native';

export class AmountSolicitud extends Component {
  constructor(props) {
    super(props);
    this.state = {
      valor_financiacion: 0,
      total_acumulado: 0,
    };
    this.stateSolicitud();
  }

  async stateSolicitud() {
    const idUser = 1098707946;
    const urlSolicitudUser = 'https://database-lendpi.herokuapp.com/solicitudes/solicitud/';
    const response = await fetch(urlSolicitudUser + idUser);
    const data = await response.json();
    this.setState({
      valor_financiacion: data.solicitud[0].valor_financiacion,
      total_acumulado: data.solicitud[0].total_acumulado,
    });
  }

  render() {
    return (
      <View>
          <Text style={styles.title}>Estado de la solicitud</Text>
          <Card style={styles.card}>
            <Card.Content>
              <Title>Monto Solicitado</Title>
              <Text style={styles.amount}>{this.state.valor_financiacion}</Text>
            </Card.Content>
          </Card>
          <Card style={styles.card}>
            <Card.Content>
              <Title>Total Recibido</Title>
              <Text style={styles.amount}>{this.state.total_acumulado}</Text>
            </Card.Content>
          </Card>
      </View>
    )
  }
};

const styles = StyleSheet.create({
  title: {
    color: '#FA5C61',
    fontWeight: 'bold',
    fontSize: 28,
    marginBottom: 30,
  },
  card: {
    marginTop: 50,
    width: 250,
    height: 120,
    alignSelf: 'center',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
  },
  amount: {
    marginTop: 20,
    alignSelf: 'center',
    fontSize: 20,
  }
});
