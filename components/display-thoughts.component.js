import React,  { Component } from 'react';
import { FlatList, Text, View } from 'react-native';
import axios from "axios";
import styles from './design.component.style';

export default class DisplayThoughts extends Component {
   constructor(props) {
    super(props);
    this.state = {
      thoughts: []
    }
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

  timeCheck = (timeString) => {
    if(timeString === "23") {
      return "00"
    } else {
      if(Number(timeString) < 10) {
        return `0${(Number(timeString) + 1).toString()}`
      } else {
      return (Number(timeString) + 1).toString()
    }
  }
}

  render() {

    return (
      <View
      style={styles.thoughtsbackground}>
        <Text>
              {this.getThoughts()}
              <View>
              <FlatList
                data={this.state.thoughts.slice().reverse()}
                renderItem={({item}) =>
                <Text style={styles.thoughtstext}>
                {item["thought"]}{"\n"}
                {"\n"}
                <Text style={styles.date}>{item["createdAt"].slice(8,10)}
                {item["createdAt"].slice(4,8)}
                {item["createdAt"].slice(0,4)} 
                {/* {item["createdAt"].slice(11,16)} */}
                </Text>
                <Text style={styles.dot}>{"\n"} .</Text></Text>}
                keyExtractor={(item, index) => {return index.toString()}}
              />
              </View>
        </Text>
     </View>
    );
  }
}
