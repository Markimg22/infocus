import React from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  TouchableOpacityProps,
  Text,
  Image,
} from 'react-native';

import { Color, FontSize, scale } from '../config/style';

interface PrimaryButtonProps extends TouchableOpacityProps {
  text: string;
  loading?: boolean;
}

export function PrimaryButton(props: PrimaryButtonProps) {
  return (
    <TouchableOpacity
      style={[
        styles.button,
        {
          backgroundColor: props.disabled ? Color.grayColor : Color.purpleColor,
        },
      ]}
      {...props}>
      {props.loading ? (
        <Image
          source={require('../assets/animations/loading.gif')}
          style={styles.gif}
        />
      ) : (
        <Text style={styles.buttonText}>{props.text}</Text>
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  gif: {
    width: scale(35),
    height: scale(35),
    alignSelf: 'center',
  },
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
