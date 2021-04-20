import React,  { Component } from 'react';
import { View, Text } from 'react-native';
import styles from './progress-bar.component.style';
import styles from './design.component.style';
import axios from "axios";


const ProgressBar = ({ progressBarWidth }) => {

  return (
    <View style={[styles.filler, {width: progressBarWidth}]}/>
  )

}

export default ProgressBar