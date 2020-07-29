import React from 'react';
import { Image, StyleSheet } from 'react-native';
import { Card, Label } from 'src/components';

const CARPLACEHOLDER = require('src/assets/images/carPlaceholder.png');
export const ResultsItem = ({ result }) => {
  return (
    <Card style={styles.container}>
      <Image style={styles.image}
        source={!result.photos[0] ? CARPLACEHOLDER : { uri: result.photos[0] }} />
      <Label style={styles.name}>{result.title.name}</Label>
      <Label>
        Montly Payment : £ {result.salesInfo.pricing.monthlyPayment}
      </Label>
      <Label>
        Total Payment : £ {result.salesInfo.pricing.cashPrice}
      </Label>
    </Card>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    margin: 15,
  },
  image: {
    width: 320,
    height: 210,
    borderRadius: 5,
    marginBottom: 5,
    //resizeMode: 'contain',
  },
  name: {
    fontFamily: 'SFProDisplay-Bold'
  }
});