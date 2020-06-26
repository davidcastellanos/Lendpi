import { TextInput, View, ScrollView, Button, StyleSheet } from 'react-native';
import * as Animatable from 'react-native-animatable';
import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';

const HomeScreen = ({navigation}) => {
  const { register, handleSubmit, setValue } = useForm();
  const onSubmit = async data => {
    await fetch('https://lendpi-gateway.herokuapp.com/api-gateway/new-solicitud', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      id_user: 1098707946,
      tipo_producto: data.producto,
      marca: data.marca,
      modelo: data.modelo,
      year_model: data.year_model,
      tiempo_financiacion: data.lend_time,
      valor_financiacion: data.lend_value
    })
  })
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
      <View>
        <Animatable.Image
            animation="bounceIn"
            duraton="1500"
            source={require('../assets/img2.png')}
            style={styles.logo}
            resizeMode="stretch"
        />
      </View>

      <TextInput
        placeholder="Producto"
        style={styles.input}
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
        style={styles.input}
        autoCapitalize="none"
        onChangeText={text => setValue('lend_value', text)}
      />

      <Button
        title='confirmar'
        onPress={handleSubmit(onSubmit)}>
        Confirmar
      </Button>

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
    height: 40,
    width: 300,
    borderColor: 'gray',
    borderWidth: 1,
    marginTop: 20,
  },
});

export default HomeScreen;
