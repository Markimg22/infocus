import React from 'react';
import { TextInput, TextInputProps, StyleSheet } from 'react-native';

export function Input(props: TextInputProps) {
  return <TextInput style={styles.input} {...props} />;
}

const styles = StyleSheet.create({
  input: {
    backgroundColor: '#fff',
    color: '#282631',
    borderRadius: 15,
    fontSize: 20,
    padding: 18,
    marginBottom: 14,
  },
});
