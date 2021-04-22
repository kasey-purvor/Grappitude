import React, { Component } from 'react';
import { FlatList, Text, Button, TextInput, View, StyleSheet, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useFonts, Comfortaa_300Light } from '@expo-google-fonts/comfortaa';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


import HomeScreen from "./screens/home.screen";
import ViewThoughtsScreen from "./screens/view-thoughts.screen"
import AboutMeScreen from "./screens/about-me.screen"

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const App = () => {
  let [fontsLoaded] = useFonts({
    Comfortaa_300Light,
  });
  return (
    <NavigationContainer>
    <Tab.Navigator
    tabBarOptions={{
      tabStyle: {
        backgroundColor: '#549BAD',
        height: 100
      },
      labelStyle: {
        fontSize: 20,
        height: 80
      },
      inactiveTintColor:  '#ECEAC4',
      activeTintColor: '#F7C9B6'
    }}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="My Thoughts" component={ViewThoughtsScreen} />
      <Tab.Screen name="About" component={AboutMeScreen} />
    </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;
