import React from 'react'
import { StyleSheet, Text } from 'react-native';
import { useTheme } from 'src/context/ThemeContext';

export const Label = props => {
  const { colors } = useTheme();
  return (<Text
    {...props}
    style={{
      ...styles.label,
      color: colors.text,
      ...props.style,
    }}>
    {props.children}</Text>)
};

const styles = StyleSheet.create({
  label: {
    fontFamily: 'SFProDisplay-Regular',
    fontSize: 17,
    lineHeight: 22,
    letterSpacing: 0.60,
  }
})
