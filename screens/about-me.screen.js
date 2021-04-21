import React from 'react';
import { Text, View, StyleSheet, Linking } from 'react-native';
import myText from './../about.js'

const AboutMeScreen = () => {
   return (
     <View style={{
       padding: 20
     }}>
     <Text>{myText}</Text>
     <Text style={{color: 'blue'}}
      onPress={() => Linking.openURL('https://github.com/AdamP2000')}>
        Adam Phillips
      </Text>
      <Text style={{color: 'blue'}}
       onPress={() => Linking.openURL('https://github.com/Laura-Keen')}>
         Laura Keen
       </Text>
       <Text style={{color: 'blue'}}
        onPress={() => Linking.openURL('https://github.com/eds-101')}>
          Edeman George
        </Text>
        <Text style={{color: 'blue'}}
         onPress={() => Linking.openURL('https://github.com/kasey-purvor')}>
           Kasey Purvor
         </Text>
         <Text style={{color: 'blue'}}
          onPress={() => Linking.openURL('https://github.com/JLBrigham')}>
            Joanna Brigham
          </Text>
          <Text style={{color: 'blue'}}
           onPress={() => Linking.openURL('https://github.com/ianmcnicholas')}>
             Ian McNicholas
           </Text>
     </View>
   );
}

export default AboutMeScreen
