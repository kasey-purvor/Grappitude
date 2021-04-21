import React,  { Component } from 'react';
import { Text, Button, TextInput, View, StyleSheet, Alert } from 'react-native';
import axios from "axios";
import styles from './design.component.style';
export default class CreateThought extends Component {

  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(e) {
    e.preventDefault();


  return fetch('https://type.fit/api/quotes')
    .then((response) => response.json())
    .then((json) => {
      const positiveQuote = json[(Math.floor(Math.random()*json.length))];
      const positiveText = positiveQuote.text
      const positiveAuthor = positiveQuote.author

      Alert.alert(`${positiveText}` + ` - ${positiveAuthor}`)
    })
    .catch((error) => {
      console.error(error);
    });

  }

  render() {
   return (
     <View style={styles.buttonview}>
       <Button
         title="Inspire Me"
         onPress={this.onSubmit}
         color='#6EC0D4'
         />
     </View>
   );
 }
}
