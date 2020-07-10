import React from 'react';
import { View } from 'react-native';
import { ListAllInvestments } from "../components/InvestmentsList";


const ProfileScreen = () => {
    return (
      <View>
        <ListAllInvestments />
      </View>
    );
};

export default ProfileScreen;
