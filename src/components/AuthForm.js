import React, { useState } from 'react';
import { StyleSheet, TextInput } from 'react-native';
import { ScrollBlur, Spacer, Heading, Label, LinkText, PrimaryButton, AltButton } from './ui';
import { useTheme } from 'src/context/ThemeContext';

export const AuthForm = ({ errorMessage, onSubmit, oAuth }) => {
  const { colors } = useTheme();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [type, setType] = useState('signup');

  let headerText = 'Create an account';
  let submitButtonText = 'Sign Up';
  let linkText = 'Already have an account? Sign in';

  if (type == 'signin') {
    headerText = 'Welcome back';
    submitButtonText = 'Sign In';
    linkText = "Don't have an account? Sign up";
  };

  return (
    <ScrollBlur tint={colors.base} tintt={colors.card}>
      <Spacer />
      <Spacer>
        <Heading
          style={{
            color: colors.primary,
          }}>
          {headerText}
        </Heading>
      </Spacer>

      <TextInput
        label="Email"
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
        autoCorrect={false}
        placeholder='your@email.com'
        placeholderTextColor={colors.placeholder}
        style={{
          ...styles.inputStyle,
          color: colors.text,
          backgroundColor: colors.card,
          //borderTopColor: colors.pril,
          borderLeftColor: colors.pril,
          borderRightColor: colors.pril,
          borderColor: colors.light,
        }}
      />

      <TextInput
        secureTextEntry
        label='Password'
        value={password}
        onChangeText={setPassword}
        autoCapitalize="none"
        autoCorrect={false}
        placeholder='p4ssW0rd'
        placeholderTextColor={colors.placeholder}
        style={{
          ...styles.inputStyle,
          color: colors.text,
          backgroundColor: colors.card,
          //borderBottomColor: colors.pril,
          borderLeftColor: colors.pril,
          borderRightColor: colors.pril,
          borderColor: colors.light,
        }}
      />

      <Spacer />
      {errorMessage ? (<Spacer><Label style={styles.errorMessage}>{errorMessage}</Label></Spacer>
      ) : null}

      <PrimaryButton
        text={submitButtonText}
        onPress={() => onSubmit(type, email, password)} />

      <Label style={{ color: colors.placeholder, fontSize: 15 }}> or </Label>

      <AltButton
        text={`${submitButtonText} with Google`}
        onPress={() => oAuth('google')} />
      <Spacer />
      <LinkText onPress={() => setType(type == 'signup' ? 'signin' : 'signup')}>{linkText}</LinkText>
    </ScrollBlur>
  );
};

const styles = StyleSheet.create({
  inputStyle: {
    borderRadius: 25,
    //borderColor: 'transparent',
    borderWidth: 1,
    // borderBottomWidth: 1,
    // borderRightWidth: 1,
    // borderTopWidth: 1,
    // borderLeftWidth: 1,
    // borderTopRightRadius: 25,
    // borderTopLeftRadius: 25,
    // borderBottomRightRadius: 25,
    // borderBottomLeftRadius: 25,

    padding: 10,
    paddingLeft: 20,
    width: 300,
    height: 50,
    marginTop: 15,
  },
  errorMessage: {
    fontSize: 16,
    color: 'red',
  }
});