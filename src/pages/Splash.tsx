import React from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';

import { Color, FontSize, scale } from '../config/style';

export function Splash() {
  return (
    <View style={styles.container}>
      <Image source={require('../assets/img/logo.png')} style={styles.logo} />
      <Text style={styles.text}>Infocus App ©</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.backgroundColor,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: scale(250),
    height: scale(250),
  },
  text: {
    position: 'absolute',
    color: Color.grayColor,
    fontSize: FontSize.small,
    bottom: scale(10),
  },
});
