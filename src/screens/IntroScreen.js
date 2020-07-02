import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import {
  Screen,
  Container,
  Card,
  PrimaryButton,
  Heading,
  Label,
  Title1,
} from 'src/components';


export const IntroScreen = () => {
  return (
    <Screen>
      <Container>
        <Title1>This is a Title</Title1>
        <Card style={styles.card}>

          <Heading>Responsive Heading</Heading>
          <PrimaryButton
            onPress={() => { }}
            text='responsive button'
          />
          <PrimaryButton
            onPress={() => { }}
            text='another button'
          />
          <PrimaryButton
            onPress={() => { }}
            text='one more'
          />
        </Card>
        <Label>This is a responsive label text</Label>
      </Container>
    </Screen>
  )
}
//style={styles.text}
const styles = StyleSheet.create({
  card: {
    height: '40%',
    //alignItems: 'center',
    //justifyContent: 'center',
  },
  text: {
    //fontFamily: 'NewYorkMedium-Medium',
    //fontSize: 30,
    //color: color.primary,
  }
});
