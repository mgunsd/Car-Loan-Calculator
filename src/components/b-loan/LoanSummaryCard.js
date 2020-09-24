import React, { useContext } from 'react';
import { StyleSheet, View } from 'react-native';
import moment from 'moment';
import { useTheme, LoanContext } from 'context';
import { useNavigation } from '@react-navigation/native';
import { Spacer, Title1, Label, } from 'commons';
import { toPounds } from 'utils/numberFormat';
import { KeyValue } from './KeyValue';
import { DoubleButton } from './DoubleButton';

export const LoanSummaryCard = () => {
  const { colors } = useTheme();
  const navigation = useNavigation();
  const { state } = useContext(LoanContext);
  const { total, deposit, monthlyPay, period, deliveryDate, } = state;
  return (
    <View style={{ ...styles.summary, backgroundColor: colors.darkbase, }}>
      <View style={{ ...styles.rows, borderBottomColor: colors.text + '25' }}>
        <View style={{ ...styles.left, }}>
          <Label>Monthly pay</Label>
          <Title1> £ {toPounds(monthlyPay)}</Title1>
          <Label style={styles.label} >for a £ {toPounds(total - deposit)} loan </Label>
        </View>
        <View style={{ ...styles.right, }} >
          <KeyValue
            label={'Vehicle price'}
            value={'£ ' + toPounds(total)} />
          <KeyValue
            label='Deposit'
            value={'£ ' + toPounds(deposit)} />
          <KeyValue
            label='Period'
            value={`${period} months`} />
          <KeyValue
            label='Delivery date'
            value={moment(deliveryDate).format('DD / MM / YYYY')} />
        </View>
      </View>
      <Spacer />
      <DoubleButton
        textLeft='􀆒  Back'
        textRight='Show cars  􀆓'
        leftPress={() => navigation.navigate('Loan')}
        rightPress={() => navigation.navigate('Car')}
      />
    </View >
  )
};

const styles = StyleSheet.create({
  label: {
    fontFamily: 'SFProDisplay-Light',
    fontSize: 13,
    lineHeight: 20,
    letterSpacing: 0.60,
  },

  button: {
    height: 40,
    width: 200,
    borderRadius: 28,
    borderStyle: 'solid',
    borderWidth: 2,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },

  summary: {
    paddingTop: 50,
    marginTop: -40,
    marginBottom: 10,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomRightRadius: 40,
    borderBottomLeftRadius: 40,
    paddingBottom: 10,
    zIndex: -2
  },
  rows: {
    flexDirection: 'row',
    paddingBottom: 5,
    borderBottomWidth: 0.3,
  },
  left: {
    alignItems: 'flex-end',
    paddingRight: 40,
    justifyContent: 'space-evenly',
  },
  right: {
    alignItems: 'flex-start',
    justifyContent: 'space-evenly',
  }
});