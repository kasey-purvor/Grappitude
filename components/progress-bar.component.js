import React,  { Component } from 'react';
import { View, Text } from 'react-native';
import styles from './design.component.style';
import axios from "axios";


const ProgressBar = ({ progressBarWidth }) => {

  return (  
      <View><View style={[styles.filler, {width: progressBarWidth}]}/>
      <View style={styles.bar}/>
      </View>
  )

}

export default ProgressBar