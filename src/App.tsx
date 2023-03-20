import React from 'react';
import Login from './screen/Login';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {DefaultTheme, NavigationContainer} from '@react-navigation/native';
import Register from './screen/Register';

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#F5BD0A',
    background: '#fff',
    text: '#2E3E5C',
  },
};

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer theme={MyTheme}>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen name="Register" component={Register} />
      </Stack.Navigator>
    </NavigationContainer>
  );

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
