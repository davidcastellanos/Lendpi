import React from 'react';
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { View, ScrollView, Button, StyleSheet, Image, Text, TouchableOpacity, Alert } from 'react-native';

import { AuthContext } from '../components/context';

const HomeScreen = ({navigation}) => {
  const { getDataUser } = React.useContext(AuthContext);
  const urlPhotoUser = getDataUser().userPhoto;
  const nameUser = getDataUser().userName;

  const checkSolicitud = async () => {
    const idUser = getDataUser().userId;
    let urlSolicitudUser = 'https://database-lendpi.herokuapp.com/solicitudes/solicitud/';
    let response = await fetch(urlSolicitudUser + idUser);
    let data = await response.json();
    if (data.solicitud.length < 1) {
      navigation.navigate('SolicitudScreen');
    } else {
      Alert.alert(
        "ACCESO DENEGADO",
        "Ya tiene una solicitud en proceso, esta solicitud debe finalizar para poder realizar una nueva",
        [
          { text: "OK" }
        ],
        { cancelable: false }
      );
    };
  };

  const checkEstado = async () => {
    const idUser = getDataUser().userId;
    let urlSolicitudUser = 'https://database-lendpi.herokuapp.com/solicitudes/solicitud/';
    let response = await fetch(urlSolicitudUser + idUser);
    let data = await response.json();
    if (data.solicitud.length === 1) {
      navigation.navigate('EstadoScreen');
    } else {
      Alert.alert(
        "ACCESO DENEGADO",
        "No tienes ninguna solicitud en proceso, puede realizar una solicitud en la opción de arriba Solicitar Financiación",
        [
          { text: "OK" }
        ],
        { cancelable: false }
      );
    };
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View>
        <Image
          style={styles.tinyLogo}
          source={{
            uri: urlPhotoUser,
          }}
        />
        <Text style={styles.textHi}>Hola,</Text>
        <Text style={styles.textPhoto}>{ nameUser }</Text>
        <TouchableOpacity onPress={checkSolicitud}>
          <LinearGradient
            colors={['white', 'white']}
            style={styles.lend}
          >
          <MaterialIcons
            name="attach-money"
            color="#FA5C61"
            size={24}
          />
          <Text style={styles.textButton}>Solicitar Financiación</Text>
          </LinearGradient>
        </TouchableOpacity>
        <TouchableOpacity onPress={checkEstado}>
          <LinearGradient
            colors={['white', 'white']}
            style={styles.lend}
          >
          <MaterialIcons
            name="favorite"
            color="#FA5C61"
            size={24}
          />
          <Text style={styles.textButton}>Estado Solicitud</Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  tinyLogo: {
    width: 120,
    height: 120,
    flexDirection: 'column',
    marginTop: 50,
    borderTopRightRadius: 25,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 10,
    alignSelf: 'center',
  },
  lend: {
    width: 250,
    height: 90,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    flexDirection: 'column',
    marginTop: 50,
    borderWidth: 1,
    borderColor: '#E0E0E0',
  },
  textButton: {
    color: '#FA5C61',
    fontWeight: 'bold',
    fontSize: 21,
  },
  textPhoto: {
    color: '#FA5C61',
    alignSelf: 'center',
    fontWeight: 'bold',
    fontSize: 21,
  },
  textHi: {
    alignSelf: 'center',
    color: '#FA5C61',
    marginTop: 10,
  },
});

export default HomeScreen;
