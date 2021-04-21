import React,  { Component } from 'react';
import { View, Text } from 'react-native';
import styles from './design.component.style';
import axios from "axios";

const Level = ({ healthLevel }) => {

    return (
      <View>
        <Text
        style={styles.gratlevel}>
          Gratitude Level:{healthLevel}
        </Text>
      </View>
    )
}
export default Level
