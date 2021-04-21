import React, { Component } from 'react';
import { FlatList, Text, Button, TextInput, View, StyleSheet, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from "./screens/home.screen";
import ViewThoughtsScreen from "./screens/view-thoughts.screen"
import AboutMeScreen from "./screens/about-me.screen"

const Stack = createStackNavigator();

const App = () => {
  return (

    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="About Grappitude" component={AboutMeScreen} />
        <Stack.Screen name="My Thoughts" component={ViewThoughtsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
