import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export const ScrollBlur = ({ children, tint, tintt }) => {
  return (
    <>
      <LinearGradient
        colors={[tintt, tintt + '40', tintt + '00']}
        start={[0, 0]}
        end={[0, 1]}
        style={styles.top}
      />
      <ScrollView contentContainerStyle={styles.scroll}>
        {children}
      </ScrollView>
      <LinearGradient
        colors={[tint + '00', tint + '40', tint]}
        start={[0, 0]}
        end={[0, 1]}
        style={styles.bottom}
      />
    </>
  );
};

const styles = StyleSheet.create({
  scroll: {
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