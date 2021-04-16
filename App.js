import React, { Component } from 'react';
import { Text, Button, TextInput, View, StyleSheet } from 'react-native';

import CreateThought from "./components/create-thought.component";
import ProgressBar from "./components/progress-bar.component";

const App = () => {
  return (
    < View>
    <CreateThought />
    <ProgressBar />
    </View>

  )
}

export default App;
