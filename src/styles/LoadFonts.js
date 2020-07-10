import React from 'react';
import { useFonts } from '@use-expo/font';
import { AppLoading } from 'expo';

export default LoadFonts = props => {
  let [fontsLoaded] = useFonts({
    'NewYorkMedium-Medium': require('../assets/fonts/NewYorkMedium-Medium.otf'),
    'NewYorkMedium-Medium': require('../assets/fonts/NewYorkMedium-Regular.otf'),
    'NewYorkMedium-Medium': require('../assets/fonts/NewYorkMedium-Semibold.otf'),
    'SFProDisplay-Light': require('../assets/fonts/SFProDisplay-Light.otf'),
    'SFProDisplay-Regular': require('../assets/fonts/SFProDisplay-Regular.otf'),
    'SFProDisplay-Medium': require('../assets/fonts/SFProDisplay-Medium.otf'),
    'SFProDisplay-Bold': require('../assets/fonts/SFProDisplay-Bold.otf'),
  });
  return (!fontsLoaded) ? <AppLoading /> : props.children;
};
