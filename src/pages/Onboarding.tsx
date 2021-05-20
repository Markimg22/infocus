import React, { useState } from 'react';
import { View, ScrollView, Text, StyleSheet, Dimensions } from 'react-native';

import { Button } from '../components/Button';

import { Color, FontSize, scale } from 'config/style';

const itens: string[] = [
  'O Infocus se baseia no método Pomodoro, ciclos para gerenciar seu tempo, aumentando seu desempenho e concentração.',
  'Dividi suas tarefas em períodos de 25 minutos, separados por intervalos de 5 minutos.',
  'Cadastre suas tarefas, concentre-se e deixe o resto conosco. 😉',
];

const screenWidth: number = Dimensions.get('window').width;

export function Onboarding({ navigation }: any) {
  const [itemIndex, setItemIndex] = useState(0);

  const updateItemIndex = (event: any) => {
    const scrollPosition = event.nativeEvent.contentOffset.x;
    setItemIndex(Math.round(scrollPosition / screenWidth));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Seja muito bem-vindo!</Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        automaticallyAdjustContentInsets={false}
        scrollEventThrottle={10}
        pagingEnabled
        onMomentumScrollEnd={(event) => updateItemIndex(event)}>
        {itens.map((item, index) => (
          <View key={index} style={styles.item}>
            <Text style={styles.itemText}>{item}</Text>
          </View>
        ))}
      </ScrollView>
      <View style={styles.bulletsContainer}>
        {new Array(3).fill(null).map((_, index) => (
          <View
            key={index}
            style={itemIndex === index ? styles.activeBullet : styles.bullet}
          />
        ))}
      </View>
      <View style={styles.buttonContainer}>
        <Button
          text={'Vamos lá!'}
          onPress={() => navigation.navigate('BottomBar')}
          disabled={itemIndex !== 2}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  bulletsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  activeBullet: {
    width: scale(10),
    height: scale(10),
    borderRadius: scale(10),
    margin: scale(10),
    backgroundColor: Color.primaryColor,
  },
  bullet: {
    width: scale(10),
    height: scale(10),
    borderRadius: scale(10),
    margin: scale(10),
    opacity: 0.6,
    backgroundColor: Color.grayColor,
  },
  title: {
    fontSize: FontSize.headline,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: scale(30),
  },
  itemText: {
    textAlign: 'center',
    color: Color.grayColor,
    fontSize: scale(25),
  },
  container: {
    flex: 1,
    backgroundColor: Color.backgroundColor,
  },
  item: {
    backgroundColor: Color.contrastColor,
    borderRadius: scale(15),
    width: screenWidth,
    justifyContent: 'center',
    marginVertical: scale(65),
  },
  buttonContainer: {
    paddingRight: scale(10),
    paddingLeft: scale(10),
    marginBottom: scale(20),
  },
});
