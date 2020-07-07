import React from 'react';
import { HistorialInversiones } from "../components/HistorialInversiones";

import{ AuthContext } from '../components/context';

const InversionesScreen = ({navigation}) => {
  const { getDataUser } = React.useContext(AuthContext);
  const userEmail = getDataUser().userEmail;

    return (
      <HistorialInversiones email={userEmail} />
    );
};

export default InversionesScreen;
