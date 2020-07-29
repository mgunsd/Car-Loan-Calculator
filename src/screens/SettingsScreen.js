import React, { useContext } from 'react';
import { Screen, PrimaryButton, Container, Title1, Spacer } from 'src/components';
import { useTheme } from 'src/context/ThemeContext';
import { Context as AuthContext } from 'src/context/AuthContext';

export const SettingsScreen = () => {
  const { colors, setTheme } = useTheme();
  const { state, signout } = useContext(AuthContext);
  return (

    <Screen>
      <Container>
        <Title1>Settings Screen</Title1>
        <Spacer>
          <PrimaryButton
            text='Sign Out / Back to Intro'
            onPress={signout} />
        </Spacer>
      </Container>
    </Screen>
  )
};