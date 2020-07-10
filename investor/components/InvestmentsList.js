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

import {
  Component,
} from 'react';
import React, {useState, useEffect} from 'react';

export class ListAllInvestments extends Component{
constructor (props){
  super(props);
  this.state = {
    items:[],
    loading: true,
    id: 24278261,
    // Cambiar id por props.idUser y pasarlo en App.js <ListAllInvestments idUser=XXXXXX>
  }
  this.listup();
}

async listup() {
  let newList = []
  const res = await fetch('https://lendpi-gateway.herokuapp.com/api-gateway/all/historial_inversiones/' + this.state.id);
  const clean = await res.json();

  for (let row in clean.listTotalInvest){
    newList.push(clean.listTotalInvest[row]);
  }
  console.log(newList);
  this.setState({
    items: newList,
    loading: false});
}

render(){
  const { modalVisible } = this.state;

    if(this.state.loading){
      return(
      <View style={styles.container}>
        <ActivityIndicator size="large" animating/>
      </View>
    )
    } else {
      return(
    <View style={styles.container}>
      <FlatList
        data={this.state.items}
        renderItem={
          ({item}) => <View style={styles.item}>
                        <Text style={styles.text}> Fecha: </Text>
                        <View style={styles.internalview}><Text style={styles.text}> {item.fecha} </Text></View>
                        <Text style={styles.text}> ID Solicitud: </Text>
                        <View style={styles.internalview}><Text style={styles.text}> {item.id_solicitud} </Text></View>
                        <Text style={styles.text}> Monto Invertido: </Text>
                        <View style={styles.internalview}><Text style={styles.text}> {item.monto_invertido} </Text></View>
                        <Text style={styles.text}> Ganancia Esperada: </Text>
                        <View style={styles.internalview}><Text style={styles.text}> {item.modelo} </Text></View>
                      </View>
          }
        keyExtractor={(item, index) => item.id_user}
        />
      <View style={styles.resume}>
        <Text style={styles.title}> Total de Retorno a Inversiones: </Text>
        <View style={styles.itemTotal}>
          <Text style={styles.title}> 500000000 </Text>
        </View>
      </View>
    </View>
            )
  }
};
}

const styles = StyleSheet.create({
  container: {
    margin: 10,
    height: 600,
  },
  item: {
  backgroundColor: '#e8feff',
  padding: 20,
  marginVertical: 8,
  marginHorizontal: 16,
  },
  itemTotal: {
  backgroundColor: '#c4ffcd',
  padding: 20,
  marginVertical: 8,
  marginHorizontal: 16,
  borderRadius:10
  },
  title: {
    fontSize: 27,
  },
  text:{
    textAlignVertical: 'center',
    textAlign: 'center',
    fontWeight: 'bold',
    height: 30,
  },
  internalview:{
    backgroundColor: 'lightgrey',
    borderRadius: 20,
    marginVertical: 5,
  },
  resume: {
    marginTop: 50,
  },
});
