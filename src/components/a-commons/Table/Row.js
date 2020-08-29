import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Cell } from './Cell';

export const Row = ({ data, textStyle, rowStyle }) => {
  return (
    <View style={{ ...styles.rowStyle, ...rowStyle }}>
      <Cell value={data.id}
        style={{
          flex: 1,
          borderTopLeftRadius: 10,
          borderBottomLeftRadius: 10,
        }}
        textStyle={{
          fontFamily: 'SFProDisplay-Bold',
          ...textStyle,
        }}
      />
      <Cell value={data.date}
        style={{ flex: 5, }}
        textStyle={textStyle} />
      <Cell value={`£ ${data.pay}`}
        style={{ flex: 5, }}
        textStyle={textStyle} />
      <Cell value={`£ ${data.due}`}
        style={{
          flex: 5,
          borderTopRightRadius: 10,
          borderBottomRightRadius: 10,
        }}
        textStyle={textStyle} />
    </View>
  )
}

export default Row;

const styles = StyleSheet.create({
  rowStyle: {
    flexDirection: 'row',
    height: 30,
    width: '90%',
    alignSelf: 'center',
    justifyContent: 'space-around',
    marginVertical: 2,
  },
})