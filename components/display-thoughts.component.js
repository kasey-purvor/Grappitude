import React,  { Component } from 'react';
import { Text, View } from 'react-native';
import axios from "axios";

export default class DisplayThoughts extends Component {
   constructor(props) {
    super(props);
    this.state = {
      thoughts: []
    }
  }

  // get thoughts from DB
  getThoughts = () => {
    axios.get('http://localhost:5000/thoughts').
    then( (res) => {
      const data = res.data; //arr of hashes
      this.setState({ thoughts: data });
      console.log(this.state.thoughts);
      console.log('Thoughts received!');
    }).
    catch( () => {
      alert('Error retrieving data'); //update for production
    });
    
  }
  // convert JSON to thought posts
  listThoughts = () => {
    
    if (!this.state.thoughts.length) return null;
    const thoughtItems = this.state.thoughts.map((thoughtRecord) => 
      <li> {thoughtRecord["thought"]} </li>
    );

    return thoughtItems;
  }
  // listThoughts = (thoughts) => {
  //   if (!thoughts.length) return null;
  //   const thoughtItems = thoughts.map((thoughtRecord) => 
  //     <li> {thoughtRecord["thought"]} </li>
  //   );

  //   return thoughtItems;
  // }


  // render thought posts
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
        }}> 
              {this.getThoughts()}
              { this.listThoughts()}
              {/* { this.listThoughts(this.getThoughts())} */}
        </Text>
     </View>
    );
  }
}
