import React from 'react';
import { View, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export const FadingEnds = ({ children, tint }) => {
  return (
    <View style={styles.view}>
      <LinearGradient
        colors={[tint, tint + '40', tint + '00']}
        start={[0, 0]}
        end={[0, 1]}
        style={styles.top}
      />
      {children}
      <LinearGradient
        colors={[tint + '00', tint + '40', tint]}
        start={[0, 0]}
        end={[0, 1]}
        style={styles.bottom}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  top: {
    flex: 1,
    position: 'absolute',
    top: 0,
    width: '100%',
    height: '5%',
    zIndex: 1,
  },
  bottom: {
    flex: 1,
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: '5%',
    zIndex: 1,
  }
});