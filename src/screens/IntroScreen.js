import React from 'react';
import { StyleSheet, Image } from 'react-native';
import { useTheme } from 'src/context/ThemeContext';

import {
  Screen,
  PrimaryButton,
  Heading,
  Title1,
} from 'src/components';

export const IntroScreen = () => {
  const { dark, colors } = useTheme();
  const image = dark ? require('../assets/images/cardark.png') :
    require('../assets/images/carlight.png');
  return (
    <Screen>
      <Image
        source={image}
        style={{ ...styles.image }}
      />

      <Title1 style={styles.title}>Welcome</Title1>
      <Heading>Choose how to pay</Heading>
      <Heading>Drive it today</Heading>

      <PrimaryButton
        style={styles.button}
        text="Let's Begin   􀆓"
        onPress={() => navigation.navigate('Auth')}
      />
    </Screen >
  )
};

const styles = StyleSheet.create({
  image: {
    position: 'absolute',
    top: 0,
    width: '100%',
    height: undefined,
    aspectRatio: 350 / 449,
    resizeMode: 'cover',
  },
  title: {
    position: 'absolute',
    top: '20%',
  },
  button: {
    position: 'absolute',
    bottom: '15%',
  }
});