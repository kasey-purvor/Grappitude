import React from 'react'
import { View, Text } from 'react-native'
import DisplayThoughts from '../components/display-thoughts.component'

const ViewThoughtsScreen = () => {
  return (
    <View
      style={{
      alignSelf: "center",
      padding: 20
      }}>
      <DisplayThoughts />
    </View>
  )
}

export default ViewThoughtsScreen
