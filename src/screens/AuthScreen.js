import React, { useContext } from 'react';
import { Context as AuthContext } from 'src/context/AuthContext.js';
import { AuthForm, Heading, Container, Screen, KeyboardAvoiding } from 'src/components';

export const AuthScreen = () => {
  const { state, remoteAuth, remoteOAuth } = useContext(AuthContext);

  return (
    <KeyboardAvoiding style={{ flex: 1 }}>
      <Screen>
        <Container>
          <AuthForm
            errorMessage={state.errorMessage}
            onSubmit={remoteAuth}
            oAuth={remoteOAuth}
          />
        </Container>
      </Screen>
    </KeyboardAvoiding>
  )
};