import React from 'react'
import { StyleSheet, Text } from 'react-native';
import { useTheme } from 'src/context/ThemeContext';

export const Link = props => {
  const { colors } = useTheme();
  //const navigation = useNavigation();
  return (<Text
    onPress={props.onPress}
    {...props}
    style={{
      ...styles.link,
      color: colors.text,
      ...props.style,
    }}>
    {props.children}</Text>)
};

const styles = StyleSheet.create({
  link: {
    fontFamily: 'SFProDisplay-Regular',
    fontSize: 17,
    lineHeight: 22,
    letterSpacing: 0.60,
  }
})
