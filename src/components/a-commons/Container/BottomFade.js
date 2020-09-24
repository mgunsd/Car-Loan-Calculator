import React from 'react';
import { View, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export const BottomFade = ({ style, children, tint }) => {
  return (
    <View style={{ ...styles.view, ...style }}>
      <LinearGradient
        colors={[tint + '00', tint + '40', tint]}
        start={[0, 0]}
        end={[0, 1]}
        style={styles.bottom}
      />
      {children}
    </View>
  )
}

const styles = StyleSheet.create({
  view: {
    position: 'relative',
    backgroundColor: 'transparent',
  },
  bottom: {
    flex: 1,
    position: 'absolute',
    top: 0,
    width: '100%',
    height: '50%',
    zIndex: 0,
  }
});