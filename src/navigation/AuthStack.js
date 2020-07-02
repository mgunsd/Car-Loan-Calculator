import React from 'react';
import { StatusBar } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { IntroScreen } from 'src/screens';
import { useTheme } from 'src/context/ThemeContext';


const Stack = createStackNavigator();
export default AuthStack = () => {
  const { dark } = useTheme();
  return (<>
    <StatusBar barStyle={dark ? 'light-content' : 'dark-content'} />
    <Stack.Navigator initialRouteName='Intro' headerMode='none' mode='modal' >
      <Stack.Screen
        name='Intro'
        component={IntroScreen}
      />

      {/* <Stack.Screen
        name='Main'
        component={BottomTabs}
      /> */}
    </Stack.Navigator>
  </>
  )
};



