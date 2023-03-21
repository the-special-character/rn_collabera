import React from 'react';
import Login from './screen/Login';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {DefaultTheme, NavigationContainer} from '@react-navigation/native';
import Register from './screen/Register';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from './screen/HomeScreen';
import UploadScreen from './screen/UploadScreen';
import ScanScreen from './screen/ScanScreen';
import NotificationScreen from './screen/NotificationScreen';
import ProfileScreen from './screen/ProfileScreen';

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#F5BD0A',
    background: '#fff',
    text: '#2E3E5C',
  },
};

const RootStack = createNativeStackNavigator();
const MainTab = createBottomTabNavigator();

const AuthStack = createNativeStackNavigator();

const AuthScreens = () => {
  return (
    <AuthStack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <AuthStack.Screen name="Login" component={Login} />
      <AuthStack.Screen name="Register" component={Register} />
    </AuthStack.Navigator>
  );
};

const MainScreens = () => {
  return (
    <MainTab.Navigator>
      <MainTab.Screen name="Home" component={HomeScreen} />
      <MainTab.Screen name="Upload" component={UploadScreen} />
      <MainTab.Screen name="Scan" component={ScanScreen} />
      <MainTab.Screen name="Notification" component={NotificationScreen} />
      <MainTab.Screen name="Profile" component={ProfileScreen} />
    </MainTab.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer theme={MyTheme}>
      <RootStack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <RootStack.Screen name="auth" component={AuthScreens} />
        <RootStack.Screen name="main" component={MainScreens} />
      </RootStack.Navigator>
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
