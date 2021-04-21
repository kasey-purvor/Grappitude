import React,  { Component } from 'react';
import { Text, Button, TextInput, View, StyleSheet } from 'react-native';
import axios from "axios";
import styles from './design.component.style';
export default class CreateThought extends Component {
  constructor(props) {
    super(props);
    this.onChangeThought = this.onChangeThought.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.state = {
      thought: '',
    }
  }
  onChangeThought(thought) {
    this.setState({
      thought: thought
    });
  }
  onSubmit(e) {
    e.preventDefault();


  return fetch('https://type.fit/api/quotes')
    .then((response) => response.json())
    .then((json) => {
      const positiveQuote = json[(Math.floor(Math.random()*json.length))];
      const positiveText = positiveQuote.text
      const positiveAuthor = positiveQuote.author

      alert(`${positiveText}` + ` - ${positiveAuthor}`)
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
