import React from 'react';
import { StyleSheet, Image } from 'react-native';
import { useTheme } from 'context';

import {
  Screen,
  PrimaryButton,
  Heading,
  Title1,
} from 'components';

export const IntroScreen = ({ navigation }) => {
  const { dark, colors } = useTheme();
  const image = dark ? require('assets/images/cardark.png') :
    require('assets/images/carlight.png');
  return (
    <Screen>
      <Image
        source={image}
        style={{ ...styles.image }}
      />
      <Title1 style={styles.title}>Welcome</Title1>
      <Heading style={styles.heading}>
        Choose how to pay{'\n'}Drive it today
      </Heading >
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
    top: 140,
  },
  heading: {
    position: 'absolute',
    top: '45%',
    fontFamily: 'SFProDisplay-Light',
    fontSize: 24,
    letterSpacing: 0.6,
    textAlign: 'center',
    lineHeight: 40
  },
  button: {
    position: 'absolute',
    bottom: '15%',
  }
});