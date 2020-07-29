import React, { useContext, useEffect } from 'react';
import { StatusBar } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { IntroScreen, AuthScreen } from 'src/screens';
import BottomTabs from './BottomTabs';
import { useTheme } from 'src/context/ThemeContext';
import { Context as AuthContext } from 'src/context/AuthContext.js';

const Stack = createStackNavigator();
export default AuthStack = () => {
  const { dark } = useTheme();
  const { state, localAuth } = useContext(AuthContext);

  useEffect(() => {
    localAuth();
  }, []);

  return (<>
    <StatusBar barStyle={dark ? 'light-content' : 'dark-content'} />
    <Stack.Navigator initialRouteName='Intro' headerMode='none' mode='modal' >
      {state.token == null ? (<>
        <Stack.Screen
          name='Intro'
          component={IntroScreen}
        />
        <Stack.Screen
          name='Auth'
          component={AuthScreen}
        />
      </>) : (<>
        <Stack.Screen
          name='Main'
          component={BottomTabs}
        />
      </>)}
    </Stack.Navigator>
  </>
  )
};