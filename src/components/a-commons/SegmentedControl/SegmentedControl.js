import React, { useState, useRef, useEffect } from 'react';
import { Animated, Easing, StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { useTheme } from 'context';

export const SegmentedControl = ({
  style,
  onChange,
  onValueChange,
  enabled = true,
  selectedIndex,
  activeTextColor,
  values,
  tintColor,
  textColor,
  backgroundColor,
  fontSize,
}) => {
  const { colors } = useTheme();
  const [segmentWidth, setSegmentWidth] = useState(0);
  const animation = useRef(new Animated.Value(0)).current;

  const handleChange = (index) => {
    // mocks iOS's nativeEvent
    const event = {
      nativeEvent: {
        value: values[index],
        selectedSegmentIndex: index,
      },
    };
    onChange && onChange(event);
    onValueChange && onValueChange(values[index]);
  };

  useEffect(() => {
    if (animation && segmentWidth) {
      Animated.timing(animation, {
        toValue: segmentWidth * (selectedIndex || 0),
        duration: 300,
        easing: Easing.out(Easing.quad),
        useNativeDriver: true,
      }).start();
    }
  }, [animation, segmentWidth, selectedIndex]);

  return (
    <View
      style={[
        styles.default,
        style,
        backgroundColor && { backgroundColor },
        !enabled && styles.disabled,
      ]}
      onLayout={({
        nativeEvent: {
          layout: { width },
        },
      }) => {
        const newSegmentWidth = values.length ? width / values.length : 0;
        if (newSegmentWidth !== segmentWidth) {
          animation.setValue(newSegmentWidth * (selectedIndex || 0));
          setSegmentWidth(newSegmentWidth);
        }
      }}>
      {selectedIndex != null && segmentWidth ? (
        <Animated.View
          style={[
            styles.slider,
            {
              transform: [{ translateX: animation }],
              width: segmentWidth,
              backgroundColor: tintColor || 'white',
            },
          ]}
        />
      ) : null}
      {values &&
        values.map((value, index) => {
          return (
            <SegmentedControlTab
              enabled={enabled}
              selected={selectedIndex === index}
              key={index}
              value={value}
              tintColor={tintColor}
              textColor={textColor}
              fontSize={fontSize}
              activeTextColor={activeTextColor}
              onSelect={() => {
                handleChange(index);
              }}
            />
          );
        })}
    </View>
  );
};

export const SegmentedControlTab = ({
  onSelect,
  value,
  enabled,
  selected,
  tintColor,
  textColor,
  activeTextColor,
  fontSize,
}) => {
  const getColor = () => {
    if (selected && activeTextColor) {
      return activeTextColor;
    }
    if (textColor) {
      return textColor;
    }
    if (tintColor) {
      return tintColor;
    }
    return 'black';
  };
  const color = getColor();

  return (
    <TouchableOpacity
      style={styles.container}
      disabled={!enabled}
      onPress={onSelect}>
      <View style={[styles.tab]}>
        <Text
          style={[styles.text,
          { color },
          !(fontSize == null) && { fontSize },
          selected && styles.activeText,
          ]}>
          {value}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  default: {
    overflow: 'hidden',
    position: 'relative',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignContent: 'center',
    height: 28,
    backgroundColor: '#eee',
    borderRadius: 5,
  },
  disabled: {
    opacity: 0.4,
  },
  slider: {
    position: 'absolute',
    borderRadius: 5,
    top: 1,
    bottom: 1,
    right: 1,
    left: 1,
  },
  container: { flex: 1, borderRadius: 5 },
  tab: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 2,
    borderRadius: 5,
  },
  text: {
    fontFamily: 'SFProDisplay-Bold',
    fontSize: 21,
    //lineHeight: 27,
    letterSpacing: 0.36,
  },
  activeText: {
    fontFamily: 'SFProDisplay-Bold',
    fontSize: 22,
    //lineHeight: 26,
    letterSpacing: 0.36,
    //fontWeight: '700',
  },
});