import React from 'react'
import { View, Text, Image } from 'react-native'
import DisplayThoughts from '../components/display-thoughts.component'
import styles from '../components/design.component.style';

const ViewThoughtsScreen = () => {
  return (
    <View>
      <Image source={require("../assets/header.png")} style={styles.image}/>
      <DisplayThoughts />
    </View>
  )
}

export default ViewThoughtsScreen
