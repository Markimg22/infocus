import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';

import AsyncStorage from '@react-native-community/async-storage';

import { Color, FontSize, scale } from '../config/style';

export function Splash({ navigation }: any) {
  const [isFirstAccess, setIsFirstAccess] = useState(null);

  useEffect(() => {
    async function checkIsFirstAccess() {
      await AsyncStorage.getItem('@InfocusApp:alreadyLaunched').then(
        async (value) => {
          if (value === null) {
            await AsyncStorage.setItem('@InfocusApp:alreadyLaunched', 'true');
            // @ts-ignore
            setIsFirstAccess(true);
          } else {
            // @ts-ignore
            setIsFirstAccess(false);
          }
        },
      );
    }

    checkIsFirstAccess();
  }, []);

  setTimeout(() => {
    navigation.replace(isFirstAccess ? 'Onboarding' : 'BottomBar');
  }, 2000);

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
