import { View, ScrollView, Button, StyleSheet, Image, Text, TouchableOpacity, Alert } from 'react-native';
import * as Animatable from 'react-native-animatable';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const HomeScreen = ({navigation}) => {
  const urlPhotoUser = 'https://lh3.googleusercontent.com/a-/AOh14GgHJIySggFeLFc4LPmnDSVY4FHX2dd-TYz3o-ODGH0=s96-c';
  const nameUser = 'Julián Sandoval';

  const checkSolicitud = async () => {
    const idUser = 1098707946;
    const urlSolicitudUser = 'https://database-lendpi.herokuapp.com/solicitudes/solicitud/';
    const response = await fetch(urlSolicitudUser + idUser);
    const data = await response.json();
    if (data.solicitud.length < 1) {
      navigation.navigate('SolicitudScreen');
    } else {
      Alert.alert(
        "ACCESO DENEGADO",
        "No tiene ninguna solicitud en proceso, puede realizar una solicitud en la opción de arriba Solicitar Financiación",
        [
          { text: "OK" }
        ],
        { cancelable: false }
      );
    };
  };

  const checkEstado = async () => {
    const idUser = 1098707946;
    const urlSolicitudUser = 'https://database-lendpi.herokuapp.com/solicitudes/solicitud/';
    const response = await fetch(urlSolicitudUser + idUser);
    const data = await response.json();
    if (data.solicitud.length === 1) {
      navigation.navigate('EstadoScreen');
    } else {
      Alert.alert(
        "ACCESO DENEGADO",
        "Ya tienes una solicitud en proceso, hasta que esta solicitud no finalice no puede realizar una nueva solocitud",
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
    )
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
    borderColor: '#E0E0E0'
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
  }
});

export default HomeScreen;
