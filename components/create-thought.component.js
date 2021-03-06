import React,  { Component } from 'react';
import { Text, Button, TextInput, View, Alert } from 'react-native';
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
      Alert.alert("Your thought has been submitted")
      this.state.thought = ""
  }

  render() {
   return (
     <View style={styles.mainview}>
       <Text
       style={styles.titlequestion}>
          What are you grateful for today?</Text>
       <TextInput
         style={styles.thoughtinput}
         placeholder="Type your thought here"
         value={this.state.thought}
         onChangeText={this.onChangeThought}
       />
       <View style={styles.buttonview}>
         <Button
         title="Submit"
         color='#6EC0D4'
         onPress={this.onSubmit}
         />
         </View>
     </View>
   );
 }
}
