import React,  { Component } from 'react';
import { View } from 'react-native';
import styles from './progress-bar.component.style';
import axios from "axios";

const ProgressBar = ({ progressBarWidth }) => {

  return (
    <View style={[styles.filler, {width: progressBarWidth}]}/>
  )
}

export default ProgressBar




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
