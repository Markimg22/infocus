import React, { useContext } from 'react';
import { StyleSheet } from 'react-native';
import { CountdownContext } from 'contexts/CountdownContext';
import Icon from 'react-native-vector-icons/FontAwesome5';

export function ResetButton() {
  const { resetCountdown } = useContext(CountdownContext);

  return <Icon name="undo-alt" style={styles.icon} onPress={resetCountdown} />;
}

const styles = StyleSheet.create({
  icon: {
    fontSize: 40,
    color: '#fff',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    marginLeft: 200,
    marginBottom: 60,
  },
});
