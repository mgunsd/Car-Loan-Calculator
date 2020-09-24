import React, { useContext } from 'react';
import { Screen, PrimaryButton, Container, Title1, Spacer } from 'components';
import { useTheme, AuthContext } from 'context';

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