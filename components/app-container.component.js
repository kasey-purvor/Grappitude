import React, { Component, useState } from 'react';
import { FlatList, Text, Button, TextInput, View, StyleSheet } from 'react-native';
import axios from "axios";

import CreateThought from "./create-thought.component";
import InspireMe   from "./inspire-me.component";
import ProgressBar from "./progress-bar.component";
import DisplayThoughts from "./display-thoughts.component";

const AppContainer = () => {
  const [progressBarWidth, setProgressBarWidth] = useState(0)

  const getThoughtsLength = () => {
    axios.get('http://localhost:5000/thoughts')
    .then((response) => {
      const data = response.data;
      const length = data.length
      const array = Array.from(String(length), Number)
      const num = array[1]
      const output = num * 10

      setProgressBarWidth(`${output}%`);
    });
  }

  const afterThoughtCreated = (data) => {
    // We choose to do nothing with the data argument
    // But I'm leaving it as a reminder that we *can*
    getThoughtsLength()
  }

  return (
    <View>
    <CreateThought afterThoughtCreated={afterThoughtCreated}/>
    <ProgressBar progressBarWidth={progressBarWidth}/>
    <InspireMe />
    <View style={{
      alignSelf: "center",
      marginBottom: 40
    }}>
      <DisplayThoughts />
    </View>
    </View>
  )
}


export default AppContainer;
