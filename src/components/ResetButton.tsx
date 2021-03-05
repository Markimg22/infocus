import React, { useContext } from 'react';
import { CountdownContext } from 'contexts/CountdownContext';
import Icon from 'react-native-vector-icons/FontAwesome5';

export function ResetButton() {
  const { resetCountdown } = useContext(CountdownContext);

  return <Icon name="undo" size={40} onPress={resetCountdown} color={'#fff'} />;
}
