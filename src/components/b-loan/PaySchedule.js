import React, { useContext } from 'react';
import { Text, FlatList } from 'react-native';
import moment from 'moment';

import { useTheme, LoanContext } from 'context';
import { ARRANGEMENT_FEE, COMPLETION_FEE } from 'constants/LoanConstants';
import { Row, Container, BottomFade, FadingEnds } from 'commons';

export const PaySchedule = () => {
  const { colors } = useTheme();
  const { state: { total, deposit, monthlyPay, period, deliveryDate, } } = useContext(LoanContext);
  const payScheduleHeader = { id: 'No', date: 'Period', pay: 'Payment', due: 'Amount Due' };
  const paySchedule = [];
  let amountDue = total - deposit + COMPLETION_FEE + ARRANGEMENT_FEE;

  for (let i = 0; i < period; i++) {
    if (i === 0) {
      paySchedule.push({
        id: i + 1,
        date: moment(deliveryDate).add(i + 1, 'M').format('01 / MM / YYYY'),
        pay: monthlyPay + ARRANGEMENT_FEE + ' *',
        due: amountDue - (monthlyPay + ARRANGEMENT_FEE),
      });
      amountDue -= (monthlyPay + ARRANGEMENT_FEE)
    } else if (i === period - 1) {
      paySchedule.push({
        id: i + 1,
        date: moment(deliveryDate).add(i + 1, 'M').format('01 / MM / YYYY'),
        pay: amountDue + ' *',
        due: '0',
        //due: amountDue - (monthlyPay + COMPLETION_FEE),
      });
      amountDue -= (monthlyPay + COMPLETION_FEE)
    } else {
      paySchedule.push({
        id: i + 1,
        date: moment(deliveryDate).add(i + 1, 'M').format('01 / MM / YYYY'),
        pay: monthlyPay,
        due: amountDue - monthlyPay,
      });
      amountDue -= monthlyPay
    }
  };

  return (
    <Container style={{ marginTop: 0 }} >
      <FadingEnds tint={colors.base}>
        <Row data={payScheduleHeader}
          rowStyle={{ borderBottomWidth: 0.0, marginTop: '2%', borderBottomColor: colors.primary }}
          textStyle={{
            fontFamily: 'SFProDisplay-Bold',
            color: colors.primary,
          }} />
        <FlatList
          showsVerticalScrollIndicator={false}
          data={paySchedule}
          renderItem={({ item }) => <Row data={item} />}
          keyExtractor={item => item.id}
        />
        <BottomFade tint={colors.background}
          style={{
            alignSelf: 'flex-start',
            marginTop: -20,
          }}
        >
          <Text style={{
            paddingTop: 20,
            fontFamily: 'SFProDisplay-Light',
            fontSize: 11,
            textAlign: 'left',
            color: colors.text + '55',
            marginLeft: '5%',
            zIndex: 5,
            marginBottom: '2%',
          }} >
            {'* Arrangment and completion fees are included'}
          </Text >
        </BottomFade>
      </FadingEnds>
    </Container >
  )
};
