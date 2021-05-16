import React from 'react';
import { TextInput, TextInputProps, StyleSheet } from 'react-native';

import { Color, FontSize, scale } from '../config/style';

export function Input(props: TextInputProps) {
  return <TextInput style={styles.input} {...props} />;
}

const styles = StyleSheet.create({
  input: {
    backgroundColor: Color.primaryColor,
    color: Color.contrastColor,
    borderRadius: scale(15),
    fontSize: FontSize.medium,
    padding: scale(18),
    marginBottom: scale(14),
  },
});
