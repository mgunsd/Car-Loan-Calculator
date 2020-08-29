import React from 'react'
import { Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useTheme } from 'context';

export const Link = ({
  style,
  text,
  onPress,

}) => {
  const { colors } = useTheme();
  return (
    <TouchableOpacity
      onPress={onPress}
    >
      <Text
        style={{
          ...styles.linkStyle,
          color: colors.text,
          ...style
        }}
      >{text}</Text>
    </TouchableOpacity>
  )
};

const styles = StyleSheet.create({
  linkStyle: {
    fontFamily: 'SFProDisplay-Medium',
    fontSize: 15,
    letterSpacing: 0.6,
    flex: 1,
    textAlign: 'center',
    lineHeight: 22,
  }
})


