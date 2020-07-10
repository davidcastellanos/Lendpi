import React, { Component } from 'react';
import { Card, Title } from 'react-native-paper';
import { StyleSheet, Text, View } from 'react-native';

export class DetalleDeuda extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userId: props.userId,
      tipo_producto: null,
      modelo: null,
      valor_financiacion: 0,
      tiempo_financiacion: 0,
    };
    this.detalleSolicitud();
  }

  async detalleSolicitud() {
    const urlSolicitudUser = 'https://database-lendpi.herokuapp.com/solicitudes/solicitud/';
    const response = await fetch(urlSolicitudUser + this.state.userId);
    const data = await response.json();
    this.setState({
      tipo_producto: data.solicitud[0].tipo_producto,
      modelo: data.solicitud[0].modelo,
      valor_financiacion: data.solicitud[0].valor_financiacion,
      tiempo_financiacion: data.solicitud[0].tiempo_financiacion,
    });
  }

  render() {
    return (
      <View>
        <Text style={styles.title}>Detalle de la Deuda</Text>
        <Card style={styles.card}>
          <Card.Content>
            <Title style={styles.titlecard}>Producto</Title>
            <Text style={styles.amount}>{this.state.tipo_producto}</Text>
          </Card.Content>
        </Card>
        <Card style={styles.card}>
          <Card.Content>
            <Title>Modelo</Title>
            <Text style={styles.amount}>{this.state.modelo}</Text>
          </Card.Content>
        </Card>
        <Card style={styles.card}>
          <Card.Content>
            <Title>Valor a Financiar</Title>
            <Text style={styles.amount}>$ {this.state.valor_financiacion}</Text>
          </Card.Content>
        </Card>
        <Card style={styles.cardlast}>
          <Card.Content>
            <Title>Tiempo de Financiación</Title>
            <Text style={styles.amount}>{this.state.tiempo_financiacion} Meses</Text>
          </Card.Content>
        </Card>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  title: {
    color: '#FA5C61',
    fontWeight: 'bold',
    fontSize: 28,
    marginBottom: 10,
    alignSelf: 'center',
    marginTop: 25,
  },
  card: {
    marginTop: 20,
    width: 250,
    height: 90,
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
  cardlast: {
    marginTop: 20,
    marginBottom: 30,
    width: 250,
    height: 90,
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
  titlecard: {

  },
  amount: {
    alignSelf: 'center',
    fontSize: 20,
  },
});
