import React, { useContext, useEffect } from 'react';
import { StyleSheet, Image, TouchableOpacity, Text, Modal, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useTheme, LoanContext } from 'context';
import moment from 'moment';
import { toFloat, toPounds } from 'utils/numberFormat';
import { BlurView } from 'expo-blur';

import { Screen, Container, Spacer, Title1, Heading, Label, Card, PrimaryButton } from 'commons';
// import { ARRANGEMENT_FEE, COMPLETION_FEE } from '../../constants/LoanConstants';

export const MonthlyPayCard = ({ close }) => {
  const { state: { total, deposit, monthlyPay, period, deliveryDate }, reset, setMonthlyPay } = useContext(LoanContext);
  const { colors, dark } = useTheme();
  const navigation = useNavigation();


  useEffect(() => {
    let monthlyPay = Math.round((total - deposit) / period);
    console.log(monthlyPay);
    setMonthlyPay(monthlyPay);
  }, [total, deposit, period]);

  return (
    <Screen style={{ backgroundColor: 'transparent' }}>
      <BlurView intensity={95} tint='dark' style={styles.Screen}>
        <Card style={{ ...styles.Card, paddingTop: 60 }} >
          <Image
            style={{ ...styles.image, }}
            source={require('assets/images/car.png')}
          />
          <Label>Estimated montly payment is </Label>
          <Spacer>
            <Title1> £ {toPounds(monthlyPay)} </Title1>
          </Spacer>
          <Label>for a £ {toPounds(total - deposit)} loan </Label>
          <Spacer>
            <PrimaryButton text='Show available cars' onPress={() => { navigation.navigate('Car'), close() }} />
          </Spacer>
          <Label>terms and  conditions apply </Label>
        </Card>
        <Card style={styles.Card} >
          <TouchableOpacity
            style={{
              ...styles.lowerButtons,
              borderColor: colors.primary,
            }}
            onPress={() => { navigation.navigate('Schedule'), close() }}>
            <Text style={{
              ...styles.buttonText,
              color: colors.primary,
            }}>Go to pay schedule</Text>
          </TouchableOpacity>
          {/* <TouchableOpacity
            style={{
              ...styles.lowerButtons,
              borderTopWidth: 1,
              //backgroundColor: colors.primary,
              borderColor: colors.placeholder,
            }}
            onPress={reset}>
            <Text style={{
              ...styles.buttonText,
              color: colors.primary,
            }}>Save calculation</Text>
          </TouchableOpacity> */}
          <TouchableOpacity
            style={{
              ...styles.lowerButtons,
              borderTopWidth: 0.5,
              borderTopColor: colors.placeholder + '25',
            }}
            onPress={() => { reset, close() }}>
            <Text style={{
              ...styles.buttonText,
              color: colors.secondary,
            }}>Reset</Text>
          </TouchableOpacity>
        </Card>
      </BlurView>
    </Screen>
  )
}
const styles = StyleSheet.create({

  Screen: {
    flex: 1,
    width: '100%',
    //height: '50%',
    //marginTop: 90,
    //alignItems: 'flex-start',
    //alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    //borderRadius: 40,
  },
  image: {
    width: '100%',
    resizeMode: 'contain',
    marginVertical: 10,
    //marginHorizontal: 10,
    position: 'absolute',
    //alignItems: 'center',
    alignSelf: 'center',
    top: -120,
    //zIndex: 1,
  },
  Card: {
    //flex: 1,
    padding: 10,
    width: '90%',
    alignItems: 'center',
    marginVertical: 10,
  },
  lowerButtons: {
    height: 55,
    width: '100%',

    //alignSelf: 'center',
  },
  buttonText: {
    fontFamily: 'SFProDisplay-Medium',
    fontSize: 17,
    letterSpacing: 0.6,
    flex: 1,
    textAlign: 'center',
    lineHeight: 50
  },
})