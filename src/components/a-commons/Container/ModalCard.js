import React from 'react';
import { StyleSheet, View, useWindowDimensions } from 'react-native';
import { useTheme } from 'context';

export const ModalCard = props => {
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
        backgroundColor: colors.background,
        shadowColor: colors.base,

        ...props.style
      }}>
      {props.children}
    </View>
  )
};

const styles = StyleSheet.create({
  card: {
    width: '90%',
    borderRadius: 30,
  }
})
