import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { Color, FontSize, scale } from '../config/style';

interface ErrorComponentProps {
  message: string;
}

export function ErrorComponent({ message }: ErrorComponentProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.message}>{message}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Color.grayColor,
    width: '100%',
    padding: scale(10),
    borderRadius: scale(15),
    marginBottom: scale(14),
  },
  message: {
    color: Color.redColor,
    fontSize: FontSize.small,
    textAlign: 'center',
  },
});
