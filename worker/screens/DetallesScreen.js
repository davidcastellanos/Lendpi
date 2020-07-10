import React from 'react';
import { DetalleDeuda } from '../components/detalleDeuda';
import { ScrollView } from 'react-native';

import { AuthContext } from '../components/context';

const DetallesScreen = ({navigation}) => {
  const { getDataUser } = React.useContext(AuthContext);
  const userId = getDataUser().userId;

    return (
      <ScrollView>
        <DetalleDeuda userId={userId}/>
      </ScrollView>
    );
};

export default DetallesScreen;
