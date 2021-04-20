import React,  { Component } from 'react';
import { Text, Button, TextInput, View } from 'react-native';
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
    const newthought = {
      thought: this.state.thought,
    }
    console.log(newthought);
    axios.post('http://localhost:5000/thoughts/add', newthought)
      .then(res => {
        const { afterThoughtCreated } = this.props

        if(afterThoughtCreated){
          afterThoughtCreated(res.data)
        }
      });
      this.state.thought = ""
  }

  render() {
   return (
     <View style={styles.mainview}>
       <Text
       style={styles.welcome}>
          What are you grateful for today?</Text>
       <TextInput
         style={styles.textinput}
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
