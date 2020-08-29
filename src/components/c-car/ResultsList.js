import React from 'react';
import { FlatList } from 'react-native';
import { Label, FadingEnds, } from 'commons';
import { ResultsItem } from './ResultsItem';
import { useTheme } from 'context';

export const ResultsList = ({ results, navigation }) => {
  const { colors } = useTheme();
  return (
    <FadingEnds tint={colors.base}>
      {!results.length
        ? <Label>No resulsts Found!</Label>
        : <FlatList
          showsVerticalScrollIndicator={false}
          data={results}
          keyExtractor={result => result.stockReference}
          renderItem={({ item }) => <ResultsItem result={item} />}
        />
      }
    </FadingEnds>
  )
};