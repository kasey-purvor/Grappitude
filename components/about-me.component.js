import React,  { Component } from 'react';
import { Alert, Text, Button, TextInput, TouchableOpacity, View, StyleSheet } from 'react-native';
import myText from './../about.js'
import styles from './design.component.style';
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
     <View style={{
       marginTop: 40,
       margin: 15
     }}>
       <TouchableOpacity
         title="About"
         color='green'
         onPress={this.onSubmit}><Text>About</Text>
        </TouchableOpacity>
     </View>
   );
 }
}
