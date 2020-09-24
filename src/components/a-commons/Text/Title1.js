import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { useTheme } from 'context';

export const Title1 = props => {
  const { colors } = useTheme();
  return (<Text
    {...props}
    style={{
      ...styles.title1,
      color: colors.primary,
      ...props.style,
    }}>
    {props.children}</Text>)
};

const styles = StyleSheet.create({
  title1: {
    fontFamily: 'SFProDisplay-Bold',
    fontSize: 34,
    lineHeight: 41,
    letterSpacing: 0.36,
  }
});