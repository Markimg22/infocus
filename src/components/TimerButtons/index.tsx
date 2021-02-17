import React from 'react';
import { StyleSheet, View, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

interface ButtonsProps {
  isPlaying: boolean;
  handleTimer: () => void;
  resetTimer: () => void;
}

export default function TimerButtons({
  isPlaying = false,
  handleTimer,
  resetTimer,
}: ButtonsProps): JSX.Element {
  return (
    <View style={styles.container}>
      <Icon
        name={isPlaying ? 'pause-circle' : 'play-circle'}
        color={isPlaying ? '#CFD8DC' : '#fff'}
        style={styles.iconPlay}
        onPress={handleTimer}
      />
      <Icon name="undo-alt" style={styles.iconReset} onPress={resetTimer} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get('window').width,
    alignItems: 'center',
    marginTop: -80,
  },
  iconPlay: {
    fontSize: 120,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  iconReset: {
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
