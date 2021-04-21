import React,  { Component } from 'react';
import { FlatList, ScrollView, Text, View } from 'react-native';
import styles from './design.component.style';
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

  updateDate = (date) => {
    return new Date (date); // outputs: Thu Apr 15 2021 16:39:32 GMT+0100 (British Summer Time)
    // let date = new Date ("2021-04-15T15:39:32.113Z");
    // return date.toLocaleString('en-GB', { timeZone: 'UTC' })

  }

  render() {
    
    return (
      <View>

        {/* <ScrollView> */}
          { this.state.thoughts.slice().reverse().map(
            item => (
              <View key={item._id}>
                <Text style={ styles.thoughtsText }> {item.thought}</Text>
                <Text style={ styles.thoughtsText }> {item.createdAt}</Text>
              </View>
            ))
          }
          {/* { this.state.thoughts.slice().reverse().map(
            item => (
              <View key={item._id}>
                <Text style={ styles.thoughtsText }> {item.thought}</Text>
                <Text style={ styles.thoughtsText }> {item.createdAt}</Text>
              </View>
            ))
          } */}
        {/* </ScrollView> */}

      </View>
    );
  }
}