import React from 'react'
import { StyleSheet, View, useWindowDimensions } from 'react-native';
import { useTheme } from 'src/context/ThemeContext';

export const Card = props => {
  const { width, height, fontScale, scale } = useWindowDimensions();
  const { colors } = useTheme();

  useWindowDimensions().fontScale;
  useWindowDimensions().scale;
  useWindowDimensions().height;
  useWindowDimensions().width;

  return (
    <View
      style={{
        ...styles.card,
        //width: width * 0.9,
        backgroundColor: colors.card,
        ...props.style
      }}>
      {props.children}
    </View>
  )
};

const styles = StyleSheet.create({
  card: {
    //flex: 1,
    width: '90%',
    alignItems: 'center',
    justifyContent: 'center',
  }
})
