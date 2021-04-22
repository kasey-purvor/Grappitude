import React, { Component } from 'react';
import { FlatList, Text, Button, TextInput, View, StyleSheet, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useFonts } from '@expo-google-fonts/comfortaa';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


import HomeScreen from "./screens/home.screen";
import ViewThoughtsScreen from "./screens/view-thoughts.screen"
import AboutMeScreen from "./screens/about-me.screen"

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="My Thoughts" component={ViewThoughtsScreen} />
      <Tab.Screen name="About" component={AboutMeScreen} />
    </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;
