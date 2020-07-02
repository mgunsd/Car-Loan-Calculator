import React from 'react'
import { StyleSheet, View, useWindowDimensions } from 'react-native';
import { useTheme } from 'src/context/ThemeContext';

export const Container = props => {
  const { colors } = useTheme();
  return (
    <View
      style={{
        ...styles.container,
        backgroundColor: colors.background,
        ...props.style
      }}>
      {props.children}
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
    marginBottom: 20,
    borderRadius: 40,
  },
})
