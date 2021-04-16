import React,  { Component } from 'react';
import { Text, Button, TextInput, View, StyleSheet } from 'react-native';
import axios from "axios";


export default class ProgressBar extends Component {

render(){
    return (
    <View style={styles.progressBar}>
<View style={styles.filler} />
</View>
)
}}


const styles = StyleSheet.create({
    progressBar: {
      marginTop: 20,
      height: 40,
      width: '100%',
      borderRadius: 10,
      borderWidth: 5,
      borderColor: '#B9DEA4'
    },
  
    filler: {
      backgroundColor: '#CFCFCF',
      height: 30,
      width: '50%',
      borderWidth: 15,
      borderRadius: 5,
      borderColor: '#CFCFCF'
    }
  })
