import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useTheme } from 'context';

export const Cell = ({ value, style, textStyle }) => {
  const { colors } = useTheme();

  return (
    <View style={{ ...styles.cellStyle, borderColor: colors.borderColor, ...style }} >
      <Text style={{ ...styles.cellTextStyle, color: colors.text, ...textStyle }}>{value}</Text>
    </View >
  )
}

const styles = StyleSheet.create({
  cellStyle: {
    padding: 5,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 0.5,
  },
  cellTextStyle: {
    fontFamily: 'SFProDisplay-Light',
    fontSize: 13,
    textAlign: 'center',
  },
})
