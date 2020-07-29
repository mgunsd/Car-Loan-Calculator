import React from 'react';
import { KeyboardAvoidingView, StyleSheet, Platform } from 'react-native';

export const KeyboardAvoiding = props => {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS == 'ios' ? "padding" : "height"}
      style={{
        ...styles.keyboardAvoiding,
        ...props.style
      }}>
      {props.children}
    </KeyboardAvoidingView>
  )
};
const styles = StyleSheet.create({
  keyboardAvoiding: {
    flex: 1,
  }
});