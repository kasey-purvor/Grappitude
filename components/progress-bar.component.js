import React,  { Component } from 'react';
import { View } from 'react-native';
import styles from './design.component.style';
import axios from "axios";

export default class ProgressBar extends Component {
   constructor(props) {
    super(props);
    this.state = {
      width: '0%'

    }
  }

  componentDidMount() {
    this.getThoughtsLength()
    // this.updateProgressBar()
  }

  getThoughtsLength = () => {
    axios.get('http://localhost:5000/thoughts')
    .then((response) => {
      const data = response.data;
      console.log(data)
      console.log(data.length)
      const length = data.length
      const array = Array.from(String(length), Number)
      console.log(array)
      var num = array[1]
      var output = num * 10
       this.setState({ width: `${output}%` });


      });
  }

  

  // updateProgressBar = (num) => {
  //   let arrOfNums = num => Number(num); //integer into arrays
  //   var intArr = Array.from(String(length), arrOfNums); 
  //   var num = intArr[1]
  //   console.log(num)
  //   var output = num * 10
  //   this.setState({ width: `${output}%` });
  // }


  render() {
    return (

      <View 
      style={[styles.filler, {width: this.state.width}]}>
      
  
     </View>)}
  
}




// customStyle.width = `${updateProgressBar()}%`
  

// if date.length is 1, 11, 21, 31, 41 => width percentage should be 10%
// if data.length is 2, 22, 32, 42 => width percentage should be 20%





// render() {
//   return (
//     <View
//     style={{
//       marginTop: 40,
//       margin: 15
//     }}>
//       <Text
//       style={{
//         textAlign: 'center',
//         marginTop: 20
//       }}> 
//             {this.getThoughts()}
//             { this.listThoughts()}
//             {/* { this.listThoughts(this.getThoughts())} */}
//       </Text>
//    </View>
//   );
// }
// }



// const styles = StyleSheet.create({
//     bar: {
//       marginTop: 20,
//       height: 40,
//       width: '100%',
//       borderRadius: 10,
//       borderWidth: 5,
//       borderColor: '#B9DEA4'
//     },
  
//     filler: {
//       backgroundColor: '#CFCFCF',
//       height: 30,
//       width: '50%',
//       borderWidth: 15,
//       borderRadius: 5,
//       borderColor: '#CFCFCF'
//     }
// })
