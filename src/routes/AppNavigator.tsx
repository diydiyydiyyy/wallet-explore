// src/navigators/AppNavigator.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Password from '../screen/Password';
import Home from '../screen/Home';
import Mnemonic from '../screen/Mnemonic';
import Address from '../screen/Address';

const Stack = createStackNavigator();

const AppNavigator = () => (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Address" component={Address} options={{headerShown: false}} />
      <Stack.Screen name="Mnemonic" component={Mnemonic} options={{headerShown: false}} />
      <Stack.Screen name="Password" component={Password} options={{headerShown: false}} />
      <Stack.Screen name="Two" component={Home} options={{headerShown: false}} />
      {/* Tambahkan screen lain di sini jika diperlukan */}
    </Stack.Navigator>
  </NavigationContainer>
);

export default AppNavigator;
