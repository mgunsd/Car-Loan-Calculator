import React from 'react';
import { StyleSheet, View } from 'react-native';
import { useTheme } from 'src/context/ThemeContext';

export const Screen = props => {
  const { colors } = useTheme();
  return (
    <View
      style={{
        ...styles.screen,
        backgroundColor: colors.base,
        ...props.style
      }}>
      {props.children}
    </View>
  )
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
});