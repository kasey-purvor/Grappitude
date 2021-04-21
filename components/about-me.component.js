import React,  { Component } from 'react';
import { Alert, Text, Button, TextInput, View, StyleSheet } from 'react-native';
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
     <View
     style={styles.buttonviewtwo}>
       <Button
         title="About"
         color='#6EC0D4'
         onPress={this.onSubmit}
         />
     </View>
   );
 }
}
