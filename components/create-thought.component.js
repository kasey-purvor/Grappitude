import React,  { Component } from 'react';
import { Text, Button, TextInput, View, StyleSheet } from 'react-native';
import axios from "axios";

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
    const newthought = {
      thought: this.state.thought,
    }
    console.log(newthought);
    axios.post('http://localhost:5000/thoughts/add', newthought)
      .then(res => console.log(res.data));
    window.location = '/';
  }

  // render form and submit button here

  render() {
   return (
     <View
     style={{
       marginTop: 40,
       margin: 15
     }}>
       <Text
       style={{
         textAlign: 'center',
         marginTop: 20
       }}> What are you grateful for today?</Text>
       <TextInput
         style={{
           height: 40,
           textAlign: 'center',
           marginRight: 75,
           width: 200,
           borderColor: '#B9DEA4',
           borderWidth: 3,
           marginTop: 10,
           marginLeft: 75
         }}
         placeholder="Type your thought here"
         value={this.state.thought}
         onChangeText={this.onChangeThought}
       />
       <Button
         title="Submit"
         color='black'
         onPress={this.onSubmit}
         />
     </View>
   );
 }
}
