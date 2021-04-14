import React from 'react';
import { Text, Button, TextInput, View } from 'react-native';
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
    </View>
  );
}
export default App;