import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import myText from './../about.js'

const AboutMeScreen = () => {
   return (
     <View style={{
       padding: 20
     }}>
     <Text>{myText}</Text>
     </View>
   );
}

export default AboutMeScreen
