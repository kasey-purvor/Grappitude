import React,  { Component } from 'react';
import { Text, Button, TextInput, View, StyleSheet } from 'react-native';
import axios from "axios";

 export default class ProgressBarExample extends Component {  
  constructor(props) {
    super(props)
    
    this.state = {
      percentage: 50
    }
    
    this.nextStep = this.nextStep.bind(this)
  }
  
  nextStep() {
    if(this.state.percentage === 100) return 
    this.setState(prevState => ({ percentage: prevState.percentage + 20 }))
  }
  
  render() {
    return (
      <div>
        
        <h2> A React Progress Bar </h2>
        <ProgressBar percentage={this.state.percentage} />
        
        <div style={{ marginTop: '20px' }}>  
          <button 
            onClick={this.nextStep}
           >
            Next Step
          </button>  
        </div>   
        
        <div style={{marginTop: '10px', color: 'blue', marginBottom: '15px'}} onClick={() => this.setState({ percentage: 0 })}>
          Reset
        </div>
      </div>
    )
  }  
}

const ProgressBar = (props) => {
  return (
      <div className="progress-bar">
        <Filler percentage={props.percentage} />
      </div>
    )
}

const Filler = (props) => {
  return <div className="filler" style={{ width: `${props.percentage}%` }} />
}






// export default class ProgressBar extends Component {
//  constructor(props) {
//    super(props)

//    this.state = {
//      percentage: 50
   
//  } }

// render() {

 
// return {
//   <View>
//     < Bar percentage={this.state.percentage} />
// </View>

// }}
// }

// const Bar = (props) => {
//   return (
//     <div className="bar">
//       <Filler percentage={props.percentage} />
//     </div>
//   )
// }
// const Filler = (props) => {
//   return <div className="filler" style={{ width: `${props.percentage}%` }} />
// }



// // render(){
// //     return (
// //     <View style={styles.Bar}>
// // <View style={styles.filler} />
// // </View>
// // )
// // }}


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
//   })

