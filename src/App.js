import React, { Component } from 'react';
import { Text, Button, TextInput, View, StyleSheet } from 'react-native';
// import { Constants } from 'expo';
// import {ProgressBar} from "./components/progress-bar.component";

const App = () => {
  return (
    <View
    style={{
      marginTop: 40,
      margin: 15
    }}>
      <Text> What are you grateful for today?</Text>
      <TextInput
        style={{
          height: 40,
          borderColor: 'green',
          borderWidth: 2,
          marginTop: 10
        }}
        placeholder="Type in here"
      />
      <Button
        title="Submit"
        color='green'
        >
      </Button>
      {/* <ProgressBar /> */}
      <View style={styles.progressBar}>
        <View style={styles.filler} />
      </View>
    </View>
  );
}

// const ProgressBar = (props) => {
//   return (
//     <div className="progress-bar">
//       <Filler />
//     </div>
//   )
// }

// const Filler = (props) => {
//   return <div className="filler" />
// }



const styles = StyleSheet.create({
  progressBar: {
    // position: relative,
    height: 20,
    width: 350,
    borderRadius: 50,
    borderWidth: 2, 
    borderColor: '#B9DEA4'
  },
  
  filler: {
    backgroundColor: '#CFCFCF',
    height: 18,
    borderRadius: 50
  }
})

// export default class App extends Component {
//   render() {
//     return (
//       <View style={styles.progressBar}>
//         <View style={styles.filler} />
//       </View>
//     );
//   }
// }

export default App;