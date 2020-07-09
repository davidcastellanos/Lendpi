import React, { Component } from 'react';
import { DataTable } from 'react-native-paper';
import { ScrollView, Text, Image, View, StyleSheet } from 'react-native';

export class HistorialInversiones extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fecha: [],
      id_worker: [],
      name_workers: [],
      monto_invertido: [],
      email: props.email,
    };
    this.hisInvestor();
  }

  async hisInvestor() {
    //Obtener el uuid del investor
    let urlIdInvestor = 'https://lendpi-gateway.herokuapp.com/api-gateway/investor/id/';
    let dataId = await fetch(urlIdInvestor + this.props.email);
    let res = await dataId.json();
    let idInvestor = res.uuid[0];
    //Obtener todo el historial de inversiones del investor
    let urlHistorialInvestor = 'https://lendpi-gateway.herokuapp.com/api-gateway/all/historial_inversiones/';
    let urlPerfilWorker = 'https://lendpi-gateway.herokuapp.com/api-gateway/worker-profile/';
    let response = await fetch(urlHistorialInvestor + idInvestor);
    let data = await response.json();

    //Guarda las últimas 3 inversiones
    if (data.listTotalInvest.length == 0) {
      this.setState({
        fecha: [
          '',
          '',
          '',
        ],
        id_worker: [
          '',
          '',
          '',
        ],
        monto_invertido: [
          '',
          '',
          '',
        ]
      });
    } else if (data.listTotalInvest.length == 1) {
      this.setState({
        fecha: [
          data.listTotalInvest[data.listTotalInvest.length - 1].fecha.slice(0,10),
          '',
          '',
        ],
        id_worker: [
          data.listTotalInvest[data.listTotalInvest.length - 1].id_worker,
          '',
          '',
        ],
        monto_invertido: [
          data.listTotalInvest[data.listTotalInvest.length - 1].monto_invertido,
          '',
          '',
        ]
      });
    } else if (data.listTotalInvest.length == 2) {
      this.setState({
        fecha: [
          data.listTotalInvest[data.listTotalInvest.length - 1].fecha.slice(0,10),
          data.listTotalInvest[data.listTotalInvest.length - 2].fecha.slice(0,10),
          '',
        ],
        id_worker: [
          data.listTotalInvest[data.listTotalInvest.length - 1].id_worker,
          data.listTotalInvest[data.listTotalInvest.length - 2].id_worker,
          '',
        ],
        monto_invertido: [
          data.listTotalInvest[data.listTotalInvest.length - 1].monto_invertido,
          data.listTotalInvest[data.listTotalInvest.length - 2].monto_invertido,
          '',
        ]
      });
    } else {
      this.setState({
        fecha: [
          data.listTotalInvest[data.listTotalInvest.length - 1].fecha.slice(0,10),
          data.listTotalInvest[data.listTotalInvest.length - 2].fecha.slice(0,10),
          data.listTotalInvest[data.listTotalInvest.length - 3].fecha.slice(0,10),
        ],
        id_worker: [
          data.listTotalInvest[data.listTotalInvest.length - 1].id_worker,
          data.listTotalInvest[data.listTotalInvest.length - 2].id_worker,
          data.listTotalInvest[data.listTotalInvest.length - 3].id_worker,
        ],
        monto_invertido: [
          data.listTotalInvest[data.listTotalInvest.length - 1].monto_invertido,
          data.listTotalInvest[data.listTotalInvest.length - 2].monto_invertido,
          data.listTotalInvest[data.listTotalInvest.length - 3].monto_invertido,
        ]
      });
    }
    //Obtener el nombre de los últimos 3 workers de las últimas inversiones
    for (let itr = 0; itr <= 2; itr++) {
      if (this.state.id_worker[itr] != '') {
        const response = await fetch(urlPerfilWorker + this.state.id_worker[itr]);
        const data = await response.json();
        this.setState({
          name_workers: this.state.name_workers.concat([data.profile[0].first_name + ' ' + data.profile[0].last_name])
        });
      }
    };
  }

  render() {
    return (
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>Historial</Text>
        <Image
          source={require('../assets/historial_inversiones.png')}
          style={styles.image}
          onPress={() => {this.state.hisInvestor()}}
        />
        <DataTable style={styles.datatable}>

          <DataTable.Header>
            <DataTable.Title>Fecha</DataTable.Title>
            <DataTable.Title>Worker</DataTable.Title>
            <DataTable.Title numeric>Cantidad</DataTable.Title>
          </DataTable.Header>

          <DataTable.Row>
            <DataTable.Cell>{this.state.fecha[0]}</DataTable.Cell>
            <DataTable.Cell>{this.state.name_workers[0]}</DataTable.Cell>
            <DataTable.Cell numeric>$ {this.state.monto_invertido[0]}</DataTable.Cell>
          </DataTable.Row>

          <DataTable.Row>
            <DataTable.Cell>{this.state.fecha[1]}</DataTable.Cell>
            <DataTable.Cell>{this.state.name_workers[1]}</DataTable.Cell>
            <DataTable.Cell numeric>$ {this.state.monto_invertido[1]}</DataTable.Cell>
          </DataTable.Row>

          <DataTable.Row>
            <DataTable.Cell>{this.state.fecha[2]}</DataTable.Cell>
            <DataTable.Cell>{this.state.name_workers[2]}</DataTable.Cell>
            <DataTable.Cell numeric>$ {this.state.monto_invertido[2]}</DataTable.Cell>
          </DataTable.Row>

        </DataTable>
      </ScrollView>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  title: {
    fontSize: 30,
    color: "#FA5C61",
    fontWeight: "bold",
    marginTop: 10,
    marginBottom: 10,
  },
  image: {
    height: 250,
    width: 330,
  },
  datatable: {
    width: 300,
    borderWidth: 1,
    borderColor: '#E0E0E0',
    marginTop: 30,
  }
});
