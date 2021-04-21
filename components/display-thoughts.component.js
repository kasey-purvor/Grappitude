import React,  { Component } from 'react';
import { FlatList, ScrollView, Text, View } from 'react-native';
import styles from './design.component.style';
import sampleData from './sampleData'
import axios from "axios";

export default class DisplayThoughts extends Component {
   constructor(props) {
    super(props);
    this.state = {
      thoughts: []
    }
  }

  componentDidMount = () => {
    this.getThoughts()
  }

  getThoughts = () => {
    axios.get('http://localhost:5000/thoughts').
    then( (res) => {
      const data = res.data;
      this.setState({ thoughts: data });
    }).
    catch( () => {
      alert('Error retrieving data');
    });
  }


  // viewThoughts = (data) => {
  //   if (!data.length) return null;

  //   const dataItems = this.state.thoughts.map((thoughtRecord) => 
  //   <li> {thoughtRecord["thought"]} {thoughtRecord["createdAt"] }; </li>
  //   );
    
  //   console.log( thoughtItems);
  // }
  
  render() {
    
    return (
      <View
      style={ styles.thoughtsStyle }>

        <ScrollView>
          { this.state.thoughts.slice().reverse().map(
            item => (
              <View key={item._id}>
                <Text> {item.thought}</Text>
                <Text> {item.createdAt}</Text>
              </View>
            ))
          }
        </ScrollView>

      </View>
    );
  }
}