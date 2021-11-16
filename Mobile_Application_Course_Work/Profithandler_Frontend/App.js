/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */

import React from 'react'
import 'react-native-gesture-handler';
import Login from './screen/Login';
import Main from './screen/Main';
import SignUp from './screen/SignUp';
import Home from './screen/Home';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';



const Stack = createStackNavigator();

const App = () => {
  return (
      <NavigationContainer>

    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Main" component={Main}/>
      <Stack.Screen name="Login" component={Login}/>
      <Stack.Screen name="SignUp" component={SignUp}/>
      <Stack.Screen name="Home" component={Home}/>


    </Stack.Navigator>


      </NavigationContainer>
  );
};

export default App;
