import React from 'react';
import Login from './screen/Login';

const App = () => {
  console.log('Hello world');

  return <Login />;

  // return (
  //   // Instead of div you have to use View
  //   // You have to write every text in Text Component
  //   <SafeAreaView style={styles.wrapper}>
  //     {[...Array(5).keys()].map(x => (
  //       <View key={x} style={[styles.boxSize, styles.boxColor]}>
  //         <Text
  //           style={styles.text}
  //           maxFontSizeMultiplier={1}
  //           numberOfLines={2}
  //           selectable
  //           onPress={({}) => {
  //             Alert.alert('hello world');
  //           }}>
  //           Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa,
  //           quibusdam commodi enim inventore totam qui accusantium fugiat neque
  //           ipsam dolores aliquid saepe consequatur? Voluptatum iure quod
  //           voluptate? Odio, cupiditate numquam?
  //         </Text>
  //       </View>
  //     ))}
  //     <View style={[styles.boxSize]}></View>
  //   </SafeAreaView>
  // );
};

export default App;
