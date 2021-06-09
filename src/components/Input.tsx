import React from 'react';
import { TextInput, TextInputProps, StyleSheet, View } from 'react-native';

import { Color, FontSize, scale } from '../config/style';

interface InputProps extends TextInputProps {
  rightComponent?: any;
}

export function Input(props: InputProps) {
  return (
    <>
      {props.rightComponent ? (
        <View>
          <TextInput
            style={[
              styles.input,
              { paddingRight: props.rightComponent ? scale(45) : scale(18) },
            ]}
            {...props}
          />
          <View style={styles.rightComponent}>{props.rightComponent}</View>
        </View>
      ) : (
        <TextInput
          style={[
            styles.input,
            { paddingRight: props.rightComponent ? scale(45) : scale(18) },
          ]}
          {...props}
        />
      )}
    </>
  );
}

const styles = StyleSheet.create({
  input: {
    backgroundColor: Color.primaryColor,
    color: Color.contrastColor,
    borderRadius: scale(15),
    fontSize: FontSize.medium,
    paddingTop: scale(18),
    paddingBottom: scale(18),
    paddingLeft: scale(18),
    marginBottom: scale(14),
  },
  rightComponent: {
    position: 'absolute',
    right: 15,
    top: 20,
  },
});
