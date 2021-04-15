import React, { Component } from 'react';
import { Text, Button, TextInput, View, StyleSheet } from 'react-native';

const App = () => {
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
      }}> What are you grateful for today?</Text>
      <TextInput
        style={{
          height: 40,
          textAlign: 'center',
          marginRight: 75,
          width: 200,
          borderColor: '#B9DEA4',
          borderWidth: 3,
          marginTop: 10,
          marginLeft: 75
        }}
        placeholder="Type in here"
      />
      <Button
        title="Submit"
        color='black'
        >
      </Button>
      <View style={styles.progressBar}>
        <View style={styles.filler} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  progressBar: {
    marginTop: 20,
    height: 40,
    width: 350,
    borderRadius: 10,
    borderWidth: 5, 
    borderColor: '#B9DEA4'
  },
  
  filler: {
    backgroundColor: '#CFCFCF',
    height: 30,
    borderWidth: 15,
    borderRadius: 5,
    borderColor: '#CFCFCF'
  }
})

export default App;