import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import {PayYourDebt} from "../components/PayYourDebt";

const ExploreScreen = () => {
    return (
      <PayYourDebt />
    );
};

export default ExploreScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
});
