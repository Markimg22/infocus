import React, { useContext } from 'react';
import { StyleSheet } from 'react-native';
import { CountdownContext } from 'contexts/CountdownContext';
import Icon from 'react-native-vector-icons/FontAwesome5';

export function ResetButton() {
  const { resetCountdown } = useContext(CountdownContext);

  return (
    <Icon name="undo" size={40} onPress={resetCountdown} style={styles.icon} />
  );
}

const styles = StyleSheet.create({
  icon: {
    color: '#fff',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
});
