import React, { useContext } from 'react';
import { AuthContext } from 'context';
import { AuthForm, Container, Screen, KeyboardAvoiding } from 'components';

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