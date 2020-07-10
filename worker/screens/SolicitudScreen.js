import { TextInput, View, ScrollView, Button, StyleSheet, Text, TouchableOpacity } from 'react-native';
import * as Animatable from 'react-native-animatable';
import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import LinearGradient from 'react-native-linear-gradient';

import { AuthContext } from '../components/context';

const SolicitudScreen = ({navigation}) => {
  const { register, handleSubmit, setValue } = useForm();
  const { getDataUser } = React.useContext(AuthContext);

  const onSubmit = async data => {
    const urlIdWorker = 'https://lendpi-gateway.herokuapp.com/api-gateway/worker/id/';
    const emailWorker = getDataUser().userEmail;
    const dataId = await fetch(urlIdWorker + emailWorker)
    const res = await dataId.json();
    const idWorker = res.uuid[0];

    await fetch('https://lendpi-gateway.herokuapp.com/api-gateway/new-solicitud', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      id_user: idWorker,
      tipo_producto: data.producto,
      marca: data.marca,
      modelo: data.modelo,
      year_model: data.year_model,
      tiempo_financiacion: data.lend_time,
      valor_financiacion: data.lend_value
    })
  });
  navigation.goBack();
};

  useEffect(() => {
  register("producto");
  register("marca");
  register("modelo");
  register("year_model");
  register("lend_time");
  register("lend_value");
}, [register]);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Publica tu solicitud</Text>
      <TextInput
        placeholder="Producto"
        style={styles.inputTop}
        autoCapitalize="none"
        onChangeText={text => setValue('producto', text)}
      />
      <TextInput
        placeholder="Marca"
        style={styles.input}
        autoCapitalize="none"
        onChangeText={text => setValue('marca', text)}
      />
      <TextInput
        placeholder="Modelo"
        style={styles.input}
        autoCapitalize="none"
        onChangeText={text => setValue('modelo', text)}
      />
      <TextInput
        placeholder="Año Modelo"
        style={styles.input}
        autoCapitalize="none"
        onChangeText={text => setValue('year_model', text)}
      />
      <TextInput
        placeholder="Tiempo de Financiación"
        style={styles.input}
        autoCapitalize="none"
        onChangeText={text => setValue('lend_time', text)}
      />
      <TextInput
        placeholder="Valor a Financiar"
        style={styles.inputBottom}
        autoCapitalize="none"
        onChangeText={text => setValue('lend_value', text)}
      />
      <TouchableOpacity onPress={handleSubmit(onSubmit)}>
        <LinearGradient
          colors={['#FF9295', '#FA5C61']}
          style={styles.button}
        >
          <Text style={styles.text}>PUBLICAR</Text>
        </LinearGradient>
      </TouchableOpacity>
    </ScrollView>
    )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    height: 50,
    width: 250,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 7,
    marginTop: 30,
  },
  inputTop: {
    height: 50,
    width: 250,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 7,
  },
  inputBottom: {
    height: 50,
    width: 250,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 7,
    marginTop: 30,
    marginBottom: 30,
  },
  title: {
    color: '#FA5C61',
    fontWeight: 'bold',
    fontSize: 28,
    marginBottom: 50,
    marginTop: -20,
  },
  button: {
      width: 150,
      height: 40,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 10,
      flexDirection: 'row',
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
  }
});

export default SolicitudScreen;
