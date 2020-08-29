import React from 'react';
import { StyleSheet, View } from 'react-native';
import { useTheme } from 'context';

export const InputContainer = props => {
  const { colors } = useTheme();

  return (
    <View
      style={{
        ...styles.card,
        backgroundColor: colors.background,
        borderColor: colors.card,
        ...props.style
      }}>
      {props.children}
    </View>
  )
};

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    overflow: 'hidden',
    width: '90%',
    borderRadius: 40,
  }
});