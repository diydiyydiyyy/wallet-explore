// src/navigators/AppNavigator.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Password from '../screen/Password';
import Home from '../screen/Home';

const Stack = createStackNavigator();

const AppNavigator = () => (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Password" component={Password} options={{headerShown: false}} />
      <Stack.Screen name="Home" component={Home} options={{headerShown: false}} />
      {/* Tambahkan screen lain di sini jika diperlukan */}
    </Stack.Navigator>
  </NavigationContainer>
);

export default AppNavigator;
