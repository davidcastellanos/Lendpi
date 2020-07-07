import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const ProductosScreen = ( {navigation} ) => {

    return (
      <View style={styles.container}>
        <Text style={styles.title}>Productos</Text>
        <TouchableOpacity onPress={()=>navigation.navigate('DetailsScreen')}>
          <LinearGradient
            colors={['white', 'white']}
            style={styles.lend}
            >
            <MaterialIcons
              name="favorite"
              color="#FA5C61"
              size={24}
            />
            <Text style={styles.textButtom}>Motos</Text>
          </LinearGradient>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>navigation.navigate('DetailsScreen')}>
          <LinearGradient
            colors={['white', 'white']}
            style={styles.lend}
          >
          <MaterialIcons
            name="favorite"
            color="#FA5C61"
            size={24}
          />
          <Text style={styles.textButtom}>Bicicletas</Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
    );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    fontSize: 30,
    color: "#FA5C61",
    fontWeight: "bold",
    marginTop: -30,
    marginBottom: 60,
  },
  lend: {
    width: 250,
    height: 90,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    flexDirection: 'column',
    marginTop: 50,
    marginBottom: 30,
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
    fontSize: 24,
  },
});

export default ProductosScreen;
