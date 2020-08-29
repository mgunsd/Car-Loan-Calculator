import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { useTheme } from 'context';


const styles = StyleSheet.create({
  rowStyle: {
    //flex: 1,
    flexDirection: 'row',
    width: '100%',
    //justifyContent: 'flex-end',
    height: 22,
    //width: 200,
    //alignContent: 'center',
    //alignItems: 'center',
    //justifyContent: 'space-around',
    marginVertical: 2,
  },
  cellStyle: {
    //padding: ,
    width: 80,
    //flex: 1,
    //alignItems: 'center',
    justifyContent: 'center',
    //borderBottomWidth: 1,
    //borderColor: '#c7c7cc33',

  },
  valueStyle: {
    flex: 1,
    fontFamily: 'SFProDisplay-Light',
    fontSize: 13,
    lineHeight: 22,
    textAlign: 'left',
  },

  keyStyle: {
    flex: 1,
    fontFamily: 'SFProDisplay-Light',
    fontSize: 13,
    lineHeight: 22,
    textAlign: 'left',
    marginRight: 5,
  },



})

export const KeyValue = ({ label, value, textStyle, rowStyle }) => {
  const { colors } = useTheme();
  return (
    <View style={{ ...styles.rowStyle, ...rowStyle }}>
      <View style={{ ...styles.cellStyle, borderColor: colors.placeholder }} >
        <Text style={{ ...styles.keyStyle, color: colors.text }}>{label}</Text>
      </View >
      <View style={{ ...styles.cellStyle, borderColor: colors.placeholder }} >
        <Text style={{ ...styles.valueStyle, color: colors.primary }}>{value}</Text>
      </View >

    </View>
  )
}
