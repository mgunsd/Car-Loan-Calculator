import React, { useContext } from 'react';
import { ThemeContext } from 'src/context/ThemeContext';
import { Screen, Heading, Container, PrimaryButton, Title1, Spacer } from 'src/components';

export const ThemesScreen = () => {
  const { setTheme } = useContext(ThemeContext);
  return (
    <Screen>
      <Container>
        <Title1>Themes Screen</Title1>
        <Spacer>
          <PrimaryButton text='Dark Theme' onPress={() => setTheme('dark')} />
        </Spacer>
        <Spacer>
          <PrimaryButton text='Light Theme' onPress={() => setTheme('light')} />
        </Spacer>
        <Title1 style={{ fontFamily: 'SFProDisplay-Bold', margin: 15 }}>Typogaphy</Title1>
        <Heading style={{ fontFamily: 'SFProDisplay-Light', }}>SFProDisplay Light</Heading>
        <Heading style={{ fontFamily: 'SFProDisplay-Regular', }}>SFProDisplay Regular</Heading>
        <Heading style={{ fontFamily: 'SFProDisplay-Medium', }}>SFProDisplay Medium</Heading>
        <Heading style={{ fontFamily: 'SFProDisplay-Bold', }}>SFProDisplay Bold</Heading>
        <Heading style={{ fontFamily: 'NewYorkMedium-Regular', }}>New York Medium</Heading>
        <Heading style={{ fontFamily: 'NewYorkMedium-Medium', }}>New York Regular</Heading>
      </Container>
    </Screen>
  )
};
