import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { useTheme } from 'context';

export const DoubleButton = ({
  styleLeft,
  leftPress,
  textLeft,
  styleRight,
  rightPress,
  textRight,
  style }) => {
  const { colors } = useTheme();
  return (
    <View style={{ ...styles.doubleButton, ...style }}>
      <TouchableOpacity
        style={{
          ...styles.left,
          borderColor: colors.primary,
          ...styleLeft
        }}
        onPress={leftPress}
      >
        <Text
          style={{
            ...styles.text,
            color: colors.text
          }}
        >{textLeft}</Text>
      </TouchableOpacity>


      <TouchableOpacity
        style={{
          ...styles.right,
          backgroundColor: colors.primary,
          borderColor: colors.primary,
          ...styleRight
        }}
        onPress={rightPress}
      >
        <Text
          style={{
            ...styles.text,
            color: colors.buttonText
          }}
        >{textRight}</Text>
      </TouchableOpacity>

    </View>
  )
}
const styles = StyleSheet.create({
  doubleButton: {
    flexDirection: 'row',
    height: 40,
    width: 300,
    marginVertical: 5,
  },
  left: {
    padding: 6,
    width: '50%',
    alignItems: 'center',
    justifyContent: 'center',
    borderTopLeftRadius: 28,
    borderBottomLeftRadius: 28,
    borderWidth: 1,
  },
  right: {
    padding: 6,
    width: '50%',
    alignItems: 'center',
    justifyContent: 'center',
    //borderRadius: 28,
    //marginLeft: -14,
    borderTopRightRadius: 28,
    borderBottomRightRadius: 28,
    borderWidth: 1,
  },
  text: {
    fontFamily: 'SFProDisplay-Medium',
    fontSize: 15,
    letterSpacing: 0.6,
    flex: 1,
    textAlign: 'center',
    lineHeight: 26
  },
})