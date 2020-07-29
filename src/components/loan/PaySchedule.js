// import React, { useContext } from 'react';
// import { View, Text, FlatList } from 'react-native';
// import moment from 'moment';

// import { useTheme } from '../../context/ThemeContext';
// import { Context as LoanContext } from '../../context/LoanContext';
// import { ARRANGEMENT_FEE, COMPLETION_FEE } from '../../constants/LoanConstants';
// import Row from '../ui/table/Row';

// const PaySchedule = () => {
//   const { colors } = useTheme();
//   const { state: { total, deposit, monthlyPay, period, deliveryDate, } } = useContext(LoanContext);
//   const payScheduleHeader = { id: 'No', date: 'Period', pay: 'Payment', due: 'Amount Due' };
//   const paySchedule = [];
//   let amountDue = total - deposit + COMPLETION_FEE + ARRANGEMENT_FEE;

//   for (let i = 0; i < period; i++) {
//     if (i === 0) {
//       paySchedule.push({
//         id: i + 1,
//         date: moment(deliveryDate).add(i + 1, 'M').format('01 / MM / YYYY'),
//         pay: monthlyPay + ARRANGEMENT_FEE + ' *',
//         due: amountDue - (monthlyPay + ARRANGEMENT_FEE),
//       });
//       amountDue -= (monthlyPay + ARRANGEMENT_FEE)
//     } else if (i === period - 1) {
//       paySchedule.push({
//         id: i + 1,
//         date: moment(deliveryDate).add(i + 1, 'M').format('01 / MM / YYYY'),
//         pay: amountDue + ' *',
//         due: '0',
//         //due: amountDue - (monthlyPay + COMPLETION_FEE),
//       });
//       amountDue -= (monthlyPay + COMPLETION_FEE)
//     } else {
//       paySchedule.push({
//         id: i + 1,
//         date: moment(deliveryDate).add(i + 1, 'M').format('01 / MM / YYYY'),
//         pay: monthlyPay,
//         due: amountDue - monthlyPay,
//       });
//       amountDue -= monthlyPay
//     }
//   };

//   return (
//     <View style={{
//       flex: 2,
//       width: '100%',
//       padding: 20,
//       //paddingBottom: 10,
//       backgroundColor: colors.base,
//       borderRadius: 40,
//       overflow: 'hidden'

//     }}>
//       <Row data={payScheduleHeader}
//         rowStyle={{ borderBottomWidth: 0.0, borderBottomColor: colors.primary }}
//         textStyle={{
//           fontFamily: 'SFProDisplay-Bold',
//           color: colors.primary,
//         }} />
//       <View style={{}}>
//         <FlatList
//           showsVerticalScrollIndicator={false}
//           data={paySchedule}
//           renderItem={({ item }) => <Row data={item} />}
//           keyExtractor={item => item.id}
//         />

//         < Text style={{
//           fontFamily: 'SFProDisplay-Light',
//           fontSize: 11,
//           margin: 5,
//           textAlign: 'left',
//           color: colors.text + '55'
//         }} >
//           {'* Arrangment and completion fees are included \n Terms and  conditions apply'}</Text >
//       </View>
//     </View>)
// }
// export default PaySchedule;

