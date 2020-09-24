import React from 'react';
import { View, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useTheme } from 'context';
import { Label, InputContainer } from 'commons';
export const InputCard = ({
  label,
  iconName,
  children,
}) => {
  const { colors } = useTheme();
  return (
    <View style={styles.outerStyle}>
      <Label style={styles.labelStyle}>{label}</Label>
      <InputContainer>
        <MaterialCommunityIcons name={iconName}
          style={{
            ...styles.iconStyle,
            color: colors.primary,
            backgroundColor: colors.background,
          }} />
        <View style={{ ...styles.innerStyle, }}>
          {children}
        </View>
      </InputContainer>
    </View>
  )
}

const styles = StyleSheet.create({
  outerStyle: {
    marginVertical: 5,
  },
  labelStyle: {
    marginVertical: 5,
    paddingLeft: 20,
    fontSize: 13,
    textAlign: 'left',
    //width: '90%',
  },
  iconStyle: {
    fontSize: 21,
    padding: 10,
    marginLeft: 5,
  },
  innerStyle: {
    flex: 1,
    justifyContent: 'center',
  },
})