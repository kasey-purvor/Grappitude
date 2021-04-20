import React,  { Component } from 'react';
import { View, Text } from 'react-native';
import styles from './progress-bar.component.style';
import axios from "axios";

const Level = ({ healthLevel }) => {

    return (
      <View>
        <Text
        style={{
          textAlign: 'center'
        }}>
          Gratitude Level:{healthLevel}
        </Text>
      </View>
    )
}
export default Level
