import React from 'react'
import { Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useTheme } from 'src/context/ThemeContext';

export const PrimaryButton = ({
  text,
  onPress,
  style,
}) => {
  const { colors } = useTheme();
  return (
    <TouchableOpacity
      style={{
        ...styles.customButton,
        backgroundColor: colors.primary,
        borderColor: colors.primary,
        ...style
      }}
      onPress={onPress}
    >
      <Text
        style={{
          ...styles.buttonText,
          color: colors.buttonText
        }}
      >{text}</Text>
    </TouchableOpacity>
  )
};

const styles = StyleSheet.create({
  customButton: {
    height: 50,
    width: 300,
    borderRadius: 25,
    borderStyle: 'solid',
    borderWidth: 2,
    alignSelf: 'center',
    margin: 5,
  },
  buttonText: {
    fontFamily: 'SFProDisplay-Medium',
    fontSize: 17,
    letterSpacing: 0.6,
    flex: 1,
    textAlign: 'center',
    lineHeight: 40
  }
})


