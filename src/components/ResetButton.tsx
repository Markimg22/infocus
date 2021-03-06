import React, { useContext } from 'react';
import { CountdownContext } from 'contexts/CountdownContext';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { StyleSheet } from 'react-native';

export function ResetButton() {
  const { resetCountdown } = useContext(CountdownContext);

  return (
    <Icon name="undo" size={40} onPress={resetCountdown} style={styles.icon} />
  );
}

const styles = StyleSheet.create({
  icon: {
    color: '#fff',
    alignSelf: 'flex-end',
  },
});
