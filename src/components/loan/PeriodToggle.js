import React from 'react';
import { StyleSheet } from 'react-native';
import { SegmentedControl } from '../ui';
import { useTheme } from 'src/context/ThemeContext';
export const PeriodToggle = ({ period, setPeriod }) => {
  const { colors } = useTheme();
  return (
    <SegmentedControl
      backgroundColor={colors.background}
      tintColor={colors.card}
      textColor={colors.text}
      activeTextColor={colors.primary}
      style={styles.segmentStyle}
      values={['1', '2', '3']}
      fontSize={21}
      selectedIndex={(period / 12) - 1}
      onChange={e => setPeriod(e.nativeEvent.selectedSegmentIndex)}
    />
  )
};

const styles = StyleSheet.create({
  segmentStyle: {
    //marginLeft: -22,
    flex: 1,
    //alignItems: 'center',
    //justifyContent: 'center',
    margin: 2,
    borderRadius: 25,
  },
})
