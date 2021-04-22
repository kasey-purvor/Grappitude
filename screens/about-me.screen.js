import React from 'react';
import { Text, View, Image, StyleSheet, Linking } from 'react-native';
import myText from './../about.js'
import styles from '../components/design.component.style';


const AboutMeScreen = () => {
   return (

     <View>
       <Image source={require("../assets/header.png")} style={styles.image}/>

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
