import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';

import CardSet from './components/CardSet';

import CardsData from './Data';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hello Movies!</Text>
      <CardSet items={CardsData}></CardSet>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: StatusBar.currentHeight
  },
});
