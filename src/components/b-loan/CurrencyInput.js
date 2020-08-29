import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import { useTheme } from 'context';
import { toFloat, toPounds } from 'utils/numberFormat';
import { Slider } from 'commons';

export const CurrencyInput = ({ value, onSubmit, min, max }) => {
  const { colors, dark } = useTheme();
  const [inputValue, setInputValue] = useState(value)
  const [disabled, setSlider] = useState(false)

  useEffect(() => {
    setInputValue(value);
    console.log('useeffect :');
    console.log(value);

  }, []);

  const handleInput = (e) => {
    const ns = toFloat(e.nativeEvent.text);
    onSubmit(ns);
  }

  const handleSlider = (e) => {
    console.log(e);
    //const ns = toFloat(e.nativeEvent.text);
    onSubmit(e);
  }

  return (<View style={styles.wrapper}>
    <TextInput
      style={{ ...styles.inputStyle, color: colors.text }}
      editable
      onFocus={() => setSlider(true)}
      //value={inputValue}
      value={toPounds(inputValue)}
      onChangeText={setInputValue}
      //clearTextOnFocus={true}
      onEndEditing={handleInput}
      keyboardType='numeric'
      keyboardAppearance={dark ? 'dark' : 'light'}
      maxLength={9}
    //onBlur={onSubmit}
    //onSubmitEditing={e => onSubmit(e)}
    //returnKeyType='done'
    />

    <Slider
      disabled={disabled}
      step={50}
      value={inputValue}
      minimumValue={min}
      maximumValue={max}
      onValueChange={setInputValue}
      onSlidingComplete={handleSlider}

      style={styles.slider}
      minimumTrackTintColor={colors.background}
      maximumTrackTintColor={colors.card}
      thumbStyle={{ ...styles.thumb, backgroundColor: colors.background }}
      trackStyle={styles.track}
      thumbImage={require('assets/images/drag.png')}
    />

  </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  slider: {
    //marginLeft: 10,
    //marginRight: 10,
    width: '60%',
    height: 50,
    zIndex: 1,

  },

  thumb: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 50,
    height: 50,
    borderTopRightRadius: 25,
    borderBottomRightRadius: 25,

  },
  track: {
    height: 50,
    borderRadius: 25,
  },

  inputStyle: {
    //flex: 1,
    fontFamily: 'SFProDisplay-Bold',
    width: '40%',
    fontSize: 21,
    height: 50,
    //backgroundColor: 'red',
    ///minimumFontScale: '0.5',

  },
});