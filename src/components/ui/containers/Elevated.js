import React from 'react';
import { StyleSheet, View, useWindowDimensions } from 'react-native';
import { useTheme } from 'src/context/ThemeContext';

export const Elevated = props => {
  const { width, height, fontScale, scale } = useWindowDimensions();
  const { colors } = useTheme();

  return (
    <View style={{
      ...styles.container,
      width: width
    }}>
      <View style={{
        ...styles.light,
        backgroundColor: colors.card
      }} />
      <View style={{
        ...styles.dark,
        backgroundColor: colors.base
      }} />
      <View style={{
        ...styles.inner,
        backgroundColor: colors.background,
        borderColor: colors.top
      }}>
        {props.children}
      </View>
    </View >
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '90%',
    marginTop: 50,
    marginBottom: 50,
  },
  inner: {
    borderWidth: 0.5,
    padding: 20,
    position: 'absolute',
    left: 3,
    right: 4,
    top: 3,
    bottom: 4,
    borderRadius: 36,
  },

  light: {
    position: 'absolute',
    left: 0,
    right: 5,
    top: 0,
    bottom: 5,
    backgroundColor: 'white',
    borderRadius: 40,
  },

  dark: {
    position: 'absolute',
    left: 5.5,
    right: 0,
    top: 5.5,
    bottom: 0,
    backgroundColor: 'black',
    borderRadius: 40,
  },
})
