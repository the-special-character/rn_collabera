import {SafeAreaView, Text, View, StyleSheet} from 'react-native';
import React from 'react';

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: 'yellow',
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
    // alignContent: 'center',
    justifyContent: 'center',
    // alignItems: 'center',
  },
  boxSize: {
    height: 100,
    width: 100,
  },
  boxColor: {
    backgroundColor: 'red',
  },
  text: {
    fontSize: 18,
    fontWeight: '500',
    color: '#fff',
  },
});

const App = () => {
  return (
    // Instead of div you have to use View
    // You have to write every text in Text Component
    <SafeAreaView style={styles.wrapper}>
      {[...Array(5).keys()].map(x => (
        <View style={[styles.boxSize, styles.boxColor]}>
          <Text style={styles.text}>Item {x + 1}</Text>
        </View>
      ))}
      <View style={[styles.boxSize]}></View>
    </SafeAreaView>
  );
};

export default App;
