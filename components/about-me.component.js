import React,  { Component } from 'react';
import { Text, Button, TextInput, View, StyleSheet } from 'react-native';


export default class AboutMe extends Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(e) {
    e.preventDefault();
    alert('This is info about our app')
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
