import React from 'react';
import { View } from 'react-native';
import Timer from '../../components/Timer';

export default function TimerPage(): JSX.Element {
  return (
    <View>
      <Timer timeTask={25} timeRest={5} />
    </View>
  );
}
