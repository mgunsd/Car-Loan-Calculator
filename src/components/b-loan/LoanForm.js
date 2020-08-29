import React, { useContext, useState, useEffect } from 'react';
import { View, Modal, Text, StyleSheet, KeyboardAvoidingView, ScrollView, Vibration, Alert, TextInput } from 'react-native';
//import { Spacer, Heading, Label, Link, PrimaryButton } from 'src/components';
import { ScrollBlur, Spacer, Heading, Label, LinkText, PrimaryButton, AltButton } from 'commons';

//import { Screen, Button, Container, Title, Label, ScrView } from '../ui';
import { MonthlyPayCard } from './MonthlyPayCard';
import { ModalDatePicker } from './ModalDatePicker'
import { InputCard, CurrencyInput, PeriodToggle } from 'loan';
import { useTheme, LoanContext } from 'context';
import { ARRANGEMENT_FEE, COMPLETION_FEE, DEPOSIT_PERCENT } from 'constants/LoanConstants';

export const LoanForm = () => {
  const { state: { total, deposit, monthlyPay, period, deliveryDate },
    setTotal, setDeposit, setMonthlyPay, setPeriod, setDeliveryDate } = useContext(LoanContext);
  const [isVisible, setVisible] = useState(false);
  const { colors } = useTheme();

  const checkDeposit = (value) => {
    const errMessage = `Deposit amout should be at least 15% of the vehicle price : £ ${total * DEPOSIT_PERCENT}`;
    (value < total * DEPOSIT_PERCENT || value === NaN) ?
      showError(errMessage) : setDeposit(value)
  };

  // const checkTotal = (value) => {
  //   const errMessage = `Vehicle price should be more then deposit amount : £ ${deposit}`;
  //   (value < deposit || value === NaN) ?
  //     showError(errMessage) : setDeposit(value)
  // };

  const showError = (errMessage) => {
    Vibration.vibrate();
    Alert.alert(
      'Please try again',
      errMessage,
      [{ text: "OK", onPress: () => setDeposit(total * DEPOSIT_PERCENT) }],
      { cancelable: false }
    );
  }

  return (
    <ScrollBlur style={{
      justifyContent: 'center', maxWidth: 600
    }} tint={colors.base} tintt={colors.card}>
      <InputCard
        label='Vehicle Price'
        iconName='currency-gbp'
        children={<CurrencyInput
          value={total}
          onSubmit={setTotal}
          min={deposit}
          max={100000}
        />}
      />
      <InputCard
        label='Deposit'
        iconName='currency-gbp'
        children={<CurrencyInput
          value={deposit}
          onSubmit={checkDeposit}
          min={total * DEPOSIT_PERCENT}
          max={total} />}
      />
      <InputCard
        label='Loan Period (years)'
        iconName='calendar-multiple'
        children={<PeriodToggle
          period={period}
          setPeriod={setPeriod} />} />

      <InputCard
        label='Delivery Date'
        iconName='calendar-multiple'
        children={<ModalDatePicker
          deliveryDate={deliveryDate}
          setDeliveryDate={setDeliveryDate} />}
      />

      {!isVisible && <PrimaryButton text='Calculate' style={{ marginVertical: 35, width: '90%', height: 50, }} onPress={() => setVisible(true)} />}


      <Modal
        animationType='fade'
        transparent={true}
        visible={isVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
        }}>

        <MonthlyPayCard
          close={() => setVisible(false)}
        />

      </Modal>


    </ScrollBlur>




    //     <ScrollView
    //       showsVerticalScrollIndicator={false}
    //       style={{}} >
    //       <InputCard
    //         label='Vehicle Price'
    //         iconName='currency-gbp'
    //         children={<CurrencyInput
    //           value={total}
    //           onSubmit={setTotal}
    //           min={deposit}
    //           max={100000}
    //         />}
    //       />
    //       {/* <InputCard
    //         label='Deposit'
    //         iconName='currency-gbp'
    //         children={<CurrencyInput
    //           value={deposit}
    //           onSubmit={checkDeposit}
    //           min={total * DEPOSIT_PERCENT}
    //           max={total} />}
    //       /> */}
    //       {/* <InputCard
    //         label='Loan Period (years)'
    //         iconName='calendar-multiple'
    //         children={<PeriodToggle
    //           period={period}
    //           setPeriod={setPeriod} />} />

    //       <InputCard
    //         label='Delivery Date'
    //         iconName='calendar-multiple'
    //         children={<ModalDatePicker
    //           deliveryDate={deliveryDate}
    //           setDeliveryDate={setDeliveryDate} />}
    //       /> */}



    //       {/* <Modal
    //         animationType='fade'
    //         transparent={true}
    //         visible={isVisible}
    //         onRequestClose={() => {
    //           Alert.alert("Modal has been closed.");
    //         }}>

    //         <MonthlyPayCard
    //           close={() => setVisible(false)}
    //         />

    //       </Modal> */}

    //     </ScrollView>

  )
};