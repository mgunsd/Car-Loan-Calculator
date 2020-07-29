import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export const ScheduleScreen = () => {
  return (
    <View>
      <Text>Credit Screen</Text>
    </View>
  )
}

const styles = StyleSheet.create({})



// import React from 'react';
// import { StyleSheet, View } from 'react-native';
// import { Screen, Container, Label, Heading, CustomHeader } from '../components/ui';
// import PaySchedule from '../components/loan/PaySchedule';
// import { LoanSummaryCard } from '../components/loan/LoanSummaryCard';
// import { LinearGradient } from 'expo-linear-gradient';
// import { useTheme } from '../context/ThemeContext';

// export const ScheduleScreen = () => {
//   const { colors } = useTheme();
//   return (
//     <Screen style={{ flex: 1 }}>
//       <CustomHeader
//         title='Schedule Screen' />

//       <PaySchedule />

//       <LoanSummaryCard />
//     </Screen >
//   )
// };

// const styles = StyleSheet.create({
//   chart: {
//     marginTop: 0,
//     width: '100%',
//     paddingBottom: 20,
//     //flex: 1,
//     borderRadius: 30,
//     alignItems: 'flex-start',
//     alignItems: 'center',
//     justifyContent: 'center',
//     zIndex: 1,
//   },
//   sum: {
//     marginTop: -20,
//     width: '100%',
//     flex: 1,
//   }
// })
