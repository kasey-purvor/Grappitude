import React, { Component } from 'react';
import { Text, Button, TextInput, View, StyleSheet } from 'react-native';

import CreateThought from "./components/create-thought.component";
import DisplayThoughts from "./components/display-thoughts.component";

const App = () => {
  return (
    <View>

      <CreateThought />,
      <DisplayThoughts />

    </View>
  )
}

export default App;
