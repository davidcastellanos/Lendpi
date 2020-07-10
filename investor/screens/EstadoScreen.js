import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import { AmountSolicitud } from '../components/amountSolicitud';
import { ScrollView, StyleSheet, Text, TouchableOpacity } from 'react-native';

const EstadoScreen = ({navigation}) => {
  return (
    <ScrollView  contentContainerStyle={styles.container}>
      <AmountSolicitud />
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <LinearGradient
          colors={['#FF9295', '#FA5C61']}
          style={styles.button}
        >
          <Text style={styles.text}>INICIO</Text>
        </LinearGradient>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
      width: 120,
      height: 40,
      justifyContent: 'center',
      alignItems: 'center',
      alignSelf: 'center',
      marginTop: 50,
      borderRadius: 10,
      flexDirection: 'row',
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
  },
});


export default EstadoScreen;
