import React from 'react';
import { Text, View, Image, StyleSheet, Linking } from 'react-native';
import myText from './../about.js'
import styles from '../components/design.component.style';


const AboutMeScreen = () => {
   return (

     <View style={styles.aboutmeview}>
       <Image source={require("../assets/header.png")} style={styles.image}/>

     <Text style={styles.aboutmetext}>{myText}</Text>
     <Text style={styles.creditstitle}>Creators:</Text>
     <Text style={styles.aboutmecredits}
      onPress={() => Linking.openURL('https://github.com/AdamP2000')}>
        Adam Phillips
      </Text>
      <Text style={styles.aboutmecredits}
       onPress={() => Linking.openURL('https://github.com/Laura-Keen')}>
         Laura Keen
       </Text>
       <Text style={styles.aboutmecredits}
        onPress={() => Linking.openURL('https://github.com/eds-101')}>
          Edeman George
        </Text>
        <Text style={styles.aboutmecredits}
         onPress={() => Linking.openURL('https://github.com/kasey-purvor')}>
           Kasey Purvor
         </Text>
         <Text style={styles.aboutmecredits}
          onPress={() => Linking.openURL('https://github.com/JLBrigham')}>
            Joanna Brigham
          </Text>
          <Text style={styles.aboutmecredits}
           onPress={() => Linking.openURL('https://github.com/ianmcnicholas')}>
             Ian McNicholas
           </Text>
     </View>
   );
}

export default AboutMeScreen
