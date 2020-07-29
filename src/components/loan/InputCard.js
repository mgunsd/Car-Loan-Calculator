import React from 'react';
import { View, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useTheme } from 'src/context/ThemeContext';
import { Label, Card, Slider, } from 'src/components';
export const InputCard = ({
  label,
  iconName,
  children,
}) => {
  //const icon = < MaterialCommunityIcons name="drag" size={24} color="black" />
  const { colors } = useTheme();
  return (
    <View style={styles.outerStyle}>
      <Label style={styles.labelStyle}>{label}</Label>
      <Card style={{
        ...styles.cardStyle,
        backgroundColor: colors.background,
        borderColor: colors.card,
      }} >
        <MaterialCommunityIcons name={iconName}
          style={{
            ...styles.iconStyle,
            color: colors.primary,
            backgroundColor: colors.background,
          }} />
        {/* <View style={{
          ...styles.lineStyle,
          borderLeftColor: colors.primary + '50',
          backgroundColor: colors.background
        }} /> */}
        <View style={{ ...styles.innerStyle, }}>
          {children}
        </View>
      </Card>
    </View>
  )
}

const styles = StyleSheet.create({
  // slider: {
  //   marginTop: -40,
  //   marginRight: -50,
  //   width: 150,
  //   height: 20,
  //   zIndex: 1,

  // },

  // thumb: {
  //   width: 50,
  //   height: 60,
  //   //backgroundColor: 'red',
  //   //borderRadius: 30,

  // },
  // track: {
  //   height: 60,
  //   borderRadius: 30,

  // },


  outerStyle: {
    flex: 1,
    marginVertical: 5,
    //alignSelf: 'center',
    //justifyContent: 'center',
    //width: '85%'
  },
  labelStyle: {
    marginVertical: 5,
    paddingLeft: 20,
    fontSize: 13,
    textAlign: 'left',
    width: '85%',
  },
  cardStyle: {
    flex: 1,
    flexDirection: 'row',
    height: 50,
    alignItems: 'center',
    //justifyContent: 'center',
    borderWidth: 2,
    overflow: 'hidden',
  },
  iconStyle: {
    fontSize: 21,
    padding: 10,
    marginLeft: 5,
  },
  lineStyle: {
    height: '100%',
    width: 50,
    borderLeftWidth: 1,
    borderRadius: 25,
  },
  innerStyle: {
    flex: 1,
    justifyContent: 'center',
  },
})

