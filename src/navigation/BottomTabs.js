import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { MaterialCommunityIcons } from 'react-native-vector-icons';
import { LoanScreen, ScheduleScreen, CarScreen } from 'src/screens';
import DrawerMenu from './DrawerMenu';
import { useTheme } from 'src/context/ThemeContext';

const Tabs = createMaterialBottomTabNavigator();
export default BottomTabs = () => {
  const { colors } = useTheme();
  return (
    <Tabs.Navigator
      initialRouteName='Loan'
      activeColor={colors.primary}
      inactiveColor={colors.placeholder}
      sceneAnimationEnabled={false}
      style={{ backgroundColor: colors.base }}
      barStyle={{
        backgroundColor: colors.base,
        shadowColor: 'transparent',
        elevation: 0,
        marginBottom: 10,
      }}
    >
      <Tabs.Screen
        name='Loan'
        component={LoanScreen}
        options={{
          tabBarLabel: 'Loan',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name='bank' size={24} color={color} />
          ),
          //tabBarColor: '#252a34',
        }} />
      <Tabs.Screen
        name='Schedule'
        component={ScheduleScreen}
        options={{
          tabBarLabel: 'Schedule',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name='calendar-multiple' size={24} color={color} />
          ),
          //tabBarColor: '#08d9d6',
        }} />
      <Tabs.Screen
        name='Car'
        component={CarScreen}
        options={{
          tabBarLabel: 'Car',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name='car-multiple' size={24} color={color} />
          ),
          //tabBarColor: '#ff2e63',
        }} />
      <Tabs.Screen
        name='Settings'
        component={DrawerMenu}
        options={{
          tabBarLabel: 'Settings',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name='car-shift-pattern' size={24} color={color} />
          ),
          //tabBarColor: '#252a34',
        }} />

    </Tabs.Navigator>
  )
};
