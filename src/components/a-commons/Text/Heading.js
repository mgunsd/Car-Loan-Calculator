import React from 'react'
import { StyleSheet, Text } from 'react-native';
import { useTheme } from 'context';

export const Heading = props => {
  const { colors } = useTheme();
  return (<Text
    {...props}
    style={{
      ...styles.heading,
      color: colors.text,
      ...props.style,
    }}>
    {props.children}</Text>)
};

const styles = StyleSheet.create({
  heading: {
    fontFamily: 'SFProDisplay-Bold',
    fontSize: 28,
    lineHeight: 34,
    letterSpacing: 0.36,
  }
})
