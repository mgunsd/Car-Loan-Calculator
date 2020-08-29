import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import { useTheme } from 'context';
import { ProfileScreen, ThemesScreen, CreditsScreen, SettingsScreen } from 'screens';

const Drawer = createDrawerNavigator();
export default DrawerMenu = () => {
  const { colors, dark } = useTheme();
  return (
    <Drawer.Navigator
      drawerType='back'
      drawerContentOptions={{
        activeTintColor: colors.light1,
        activeBackgroundColor: colors.card,
        itemStyle: { marginVertical: 10, width: '90%' },
        labelStyle: {
          color: colors.text,
          fontFamily: 'SFProDisplay-Bold',
          //fontSize: 17,
          //lineHeight: 22,
          letterSpacing: 0.60,
        }
      }}
      drawerStyle={{
        backgroundColor: colors.base,
        width: 240,
      }}
    //overlayColor="transparent"
    >
      <Drawer.Screen name='Settings' component={SettingsScreen}
        options={{
          animationTypeForReplace: 'pop',
          //animationTypeForReplace: state.isSignout ? 'pop' : 'push',
        }}

      />
      <Drawer.Screen name='Profile' component={ProfileScreen} />
      <Drawer.Screen name='Themes' component={ThemesScreen} />
      <Drawer.Screen name='Credits' component={CreditsScreen} />
    </Drawer.Navigator >
  )
};
