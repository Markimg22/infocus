import React from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  TouchableOpacityProps,
  Text,
} from 'react-native';

import { Color, FontSize, scale } from '../config/style';

interface ButtonProps extends TouchableOpacityProps {
  text: string;
}

export function Button(props: ButtonProps) {
  return (
    <TouchableOpacity
      style={[
        styles.button,
        {
          backgroundColor: props.disabled ? Color.grayColor : Color.purpleColor,
        },
      ]}
      {...props}>
      <Text style={styles.buttonText}>{props.text}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    borderRadius: scale(15),
    padding: scale(15),
  },
  buttonText: {
    color: Color.primaryColor,
    fontSize: FontSize.button,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
