import React, { useContext } from 'react';
import { Card, Title } from 'react-native-paper';
import LinearGradient from 'react-native-linear-gradient';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { ScrollView, Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';

import { AuthContext } from '../components/context';

const HomeScreen = ({navigation}) => {
  const { getDataUser } = useContext(AuthContext);
  const urlPhotoUser = getDataUser().userPhoto;
  const nameUser = getDataUser().userName;

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image
        style={styles.tinyLogo}
        source={{ uri: urlPhotoUser }}
      />
      <Text style={styles.textHi}>Hola,</Text>
      <Text style={styles.textPhoto}>{nameUser}</Text>
      <Card style={styles.card}>
        <Card.Content>
          <Title style={styles.cardTitle}>Tu saldo</Title>
          <View style={{
            flexDirection: 'row',
            marginTop: 15,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
            <MaterialIcons
              name="favorite"
              size={24}
              style={{
                color: "#FA5C61",
                marginRight: 10,
              }}
            />
            <Text style={{ fontSize: 20 }}>180.000</Text>
          </View>
        </Card.Content>
      </Card>
      <TouchableOpacity onPress={()=>navigation.navigate('ProductosScreen')}>
        <LinearGradient
          colors={['white', 'white']}
          style={styles.lend}
        >
          <MaterialIcons
            name="favorite"
            color="#FA5C61"
            size={24}
          />
          <Text style={styles.textButtom}>Invertir</Text>
        </LinearGradient>
      </TouchableOpacity>
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
  textHi: {
    alignSelf: 'center',
    color: '#FA5C61',
    marginTop: 10,
  },
  textPhoto: {
    color: '#FA5C61',
    alignSelf: 'center',
    fontWeight: 'bold',
    fontSize: 21,
  },
  card: {
    marginTop: 30,
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
    borderRadius: 20,
  },
  cardTitle: {
    fontSize: 16,
  },
  lend: {
    width: 170,
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    flexDirection: 'column',
    marginTop: 50,
    borderWidth: 1,
    borderColor: '#E0E0E0',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
  },
  textButtom: {
    color: '#FA5C61',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default HomeScreen;
