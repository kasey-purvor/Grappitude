import React from 'react';
import { View } from 'react-native';
import styles from './progress-bar.component.style';
import axios from "axios";

const customStyle = {
  width: '0%'
}

var percentageWidth

axios.get('http://localhost:5000/thoughts')
.then((response) => {
  const data = response.data;
  console.log(data)
  console.log(data.length)
  var length = data.length

  let myFunc = num => Number(num);

  var intArr = Array.from(String(length), myFunc);

  var num = intArr[1]
  percentageWidth = num * 10
 
  
  console.log(percentageWidth)
})

customStyle.width = `${percentageWidth}%`
  

// if date.length is 1, 11, 21, 31, 41 => width percentage should be 10%
// if data.length is 2, 22, 32, 42 => width percentage should be 20%

function ProgressBar() {

    return (
      // for some reason cant get both bar and filler to show 
      <View style={[styles.filler, customStyle]}/>
    )}

export default ProgressBar


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
