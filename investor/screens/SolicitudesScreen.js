import React from 'react';
import { FAB } from 'react-native-paper';
import { View, StyleSheet } from 'react-native';
import{ AuthContext } from '../components/context';
import { ListAllSolicitudes } from "../components/SolicitudesList";

const SolicitudessScreen = ({ navigation }) => {
  const { getDataUser } = React.useContext(AuthContext);
  const userEmail = getDataUser().userEmail;

  return (
    <View>
      <ListAllSolicitudes email={userEmail} />
      <FAB
        style={styles.fab}
        icon="arrow-left"
        onPress={()=>navigation.navigate('ProductosScreen')}
        color='#FFF'
      />
    </View>
  );
};

const styles = StyleSheet.create({
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
    backgroundColor: '#FA5C61',
  },
})

export default SolicitudessScreen;
