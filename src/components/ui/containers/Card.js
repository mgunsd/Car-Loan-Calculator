import React from 'react'
import { StyleSheet, View, useWindowDimensions } from 'react-native';
import { useTheme } from 'src/context/ThemeContext';

export const Card = props => {
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
        //width: width * 0.9,
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
    //flex: 1,
    width: '90%',
    alignItems: 'center',
    justifyContent: 'center',



    shadowOffset: { width: 8, height: 8 },
    shadowOpacity: 1.0,
    shadowRadius: 8,
    elevation: 15,
    //boxShadow: 35 35 70 '#c7c7c7',  - 35 - 35 70 '#ffffff',


    marginTop: 40,
    marginBottom: 20,
    borderRadius: 40,






  }
})
