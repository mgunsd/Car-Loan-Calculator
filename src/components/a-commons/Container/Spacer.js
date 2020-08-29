import React from 'react'
import { StyleSheet, View, useWindowDimensions } from 'react-native';
//import Constants from 'expo-constants';

export const Spacer = props => {
  return (<View
    style={{
      ...styles.spacer,
      ...props.style
    }}>
    {props.children}</View>)
};

const styles = StyleSheet.create({
  spacer: {
    margin: 15
  },
})