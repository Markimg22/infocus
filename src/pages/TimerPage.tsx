import React from 'react';
import { View } from 'react-native';
import { Countdown } from '../components/Countdown';
import { PlayOrPauseButton } from '../components/PlayOrPauseButton';
import { ResetButton } from '../components/ResetButton';

export function TimerPage() {
  return (
    <View>
      <Countdown />
      <PlayOrPauseButton />
      <ResetButton />
    </View>
  );
}
