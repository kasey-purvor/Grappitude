import React,  { Component } from 'react';
import { Alert, Text, Button, TextInput, View, StyleSheet } from 'react-native';
import myText from './../about.js'

export default class AboutMe extends Component {
  constructor(props) {
    super(props); 
  }
  
  onSubmit(e) {
    e.preventDefault();
    Alert.alert(
      'About Grappitude', 
      myText
    )
    ;
  }

  render() {
   return (
     <View
     style={{
       marginTop: 40,
       margin: 15
     }}>
       <Button
         title="About"
         color='green'
         onPress={this.onSubmit}
         />
     </View>
   );
 }
}
