import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useTheme } from 'src/context/ThemeContext';

export const CustomHeader = ({
  headerStyle,
  headerLeft,
  childrenLeft,
  titleStyle,
  title,
  headerRight,
  childrenRight,
}) => {
  const { colors } = useTheme();
  return (
    <View style={{
      ...styles.headerStyle,
      ...headerStyle,
      backgroundColor: colors.base
    }}>
      <View style={{ ...styles.headerLeft, ...headerLeft }}>{childrenLeft}</View>
      <Text style={{
        ...styles.titleStyle,
        ...titleStyle,
        color: colors.primary,
      }}>{title}</Text>
      <View style={{ ...styles.headerRight, ...headerRight }}>{childrenRight}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerStyle: {
    //flex: 1,
    flexDirection: 'row',
    paddingTop: 36,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    height: 90,

    // shadowColor: 'black',
    // shadowOffset: { width: 0, height: 2 },
    // shadowRadius: 2,
    // shadowOpacity: 0.26,
    // elevation: 3,
  },

  titleStyle: {
    fontFamily: 'SFProDisplay-Bold',
    fontSize: 28,
    letterSpacing: 0.36,
  },
});
