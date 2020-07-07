import React from 'react';
import {ListAllSolicitudes} from "../components/SolicitudesList";

import{ AuthContext } from '../components/context';

const DetailsScreen = ({navigation}) => {
  const { getDataUser } = React.useContext(AuthContext);
  const userEmail = getDataUser().userEmail;

  return (
    <ListAllSolicitudes email={userEmail} />
  );
};

export default DetailsScreen;
