import React, { Component, useState } from 'react';
import { FlatList, Text, Button, TouchableOpacity, TextInput, View, StyleSheet, Image } from 'react-native';
import axios from "axios";

import styles from '../components/design.component.style';

import AboutMe from "./about-me.screen";
import CreateThought from "../components/create-thought.component";
import InspireMe   from "../components/inspire-me.component";
import ProgressBar from "../components/progress-bar.component";
import Level from "../components/level.component";
import DisplayThoughts from "../components/display-thoughts.component";
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
  const [progressBarWidth, setProgressBarWidth] = useState(0)
  const [healthLevel, setHealthLevel] = useState(0)
  const navigation = useNavigation()

  const getThoughtsLength = () => {
    axios.get('http://localhost:5000/thoughts')
    .then((response) => {
      const data = response.data;
      const length = data.length;
      const level = Math.floor(data.length / 10);
      if (length === 0) {
        var output = 0
      } else if (length % 10 === 0 && length != 0) {
        var output = 100
      } else {
      var output = (length % 10) * 10;
      };
      setProgressBarWidth(`${output}%`)
      setHealthLevel(`${level}`)
    });
  }

  const afterThoughtCreated = (data) => {
    // We choose to do nothing with the data argument
    // But I'm leaving it as a reminder that we *can*
    getThoughtsLength()
  }

  return (
      <View>
      {getThoughtsLength()}
        <Image source={require("../assets/header.png")} style={styles.image}/>
        <TouchableOpacity onPress={() => navigation.navigate("About Grappitude")}><Text>- About this app -</Text></TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("My Thoughts")}><Text>- View my thoughts -</Text></TouchableOpacity>
        <CreateThought afterThoughtCreated={afterThoughtCreated}/>
        <Level healthLevel={healthLevel}/>
        <ProgressBar progressBarWidth={progressBarWidth}/>
        <InspireMe />
      </View>
  )
}

export default HomeScreen;
