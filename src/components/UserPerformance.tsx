import React, { useContext } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

import { Color, FontSize, scale } from '../config/style';

import { AuthContext } from '../contexts/AuthContext';

export function UserPerformance() {
  const { performance, loading } = useContext(AuthContext);

  /** Work Time */
  const hoursWork = Math.floor(performance.totalWorkingTime / 3600);
  const minutesWork = Math.floor(
    (performance.totalWorkingTime - hoursWork * 3600) / 60,
  );
  const secondsWork = Math.floor(performance.totalWorkingTime % 60);

  const [hourWorkLeft, hourWorkRight] = String(hoursWork)
    .padStart(2, '0')
    .split('');
  const [minuteWorkLeft, minuteWorkRight] = String(minutesWork)
    .padStart(2, '0')
    .split('');
  const [secondWorkLeft, secondWorkRight] = String(secondsWork)
    .padStart(2, '0')
    .split('');

  /** Rest Time */
  const hoursRest = Math.floor(performance.totalRestTime / 3600);
  const minutesRest = Math.floor(
    (performance.totalRestTime - hoursRest * 3600) / 60,
  );
  const secondsRest = Math.floor(performance.totalRestTime % 60);

  const [hourRestLeft, hourRestRight] = String(hoursRest)
    .padStart(2, '0')
    .split('');
  const [minuteRestLeft, minuteRestRight] = String(minutesRest)
    .padStart(2, '0')
    .split('');
  const [secondRestLeft, secondRestRight] = String(secondsRest)
    .padStart(2, '0')
    .split('');

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Desempenho:</Text>
        <View style={styles.line} />
      </View>
      {loading ? (
        <Image
          source={require('../assets/animations/loading.gif')}
          style={styles.gif}
        />
      ) : (
        <>
          <View style={styles.infoContainer}>
            <Text style={styles.subtitle}>Total tarefas concluídas:</Text>
            <Text style={styles.infoText}>
              {performance.totalTasksCompleted}
            </Text>
          </View>
          <View style={styles.infoContainer}>
            <Text style={styles.subtitle}>Total tempo de foco:</Text>
            <Text style={styles.infoText}>
              {hourWorkLeft}
              {hourWorkRight}:{minuteWorkLeft}
              {minuteWorkRight}:{secondWorkLeft}
              {secondWorkRight}
            </Text>
          </View>
          <View style={styles.infoContainer}>
            <Text style={styles.subtitle}>Total tempo de descanso:</Text>
            <Text style={styles.infoText}>
              {hourRestLeft}
              {hourRestRight}:{minuteRestLeft}
              {minuteRestRight}:{secondRestLeft}
              {secondRestRight}
            </Text>
          </View>
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  gif: {
    width: scale(60),
    height: scale(60),
    alignSelf: 'center',
  },
  titleContainer: {
    width: '100%',
    marginTop: scale(30),
    marginBottom: scale(20),
  },
  line: {
    width: '100%',
    height: scale(2),
    alignSelf: 'center',
    backgroundColor: Color.grayColor,
  },
  infoText: {
    color: Color.purpleColor,
    fontWeight: 'bold',
    fontSize: FontSize.headline,
  },
  infoContainer: {
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: scale(10),
  },
  container: {
    padding: scale(20),
  },
  subtitle: {
    color: Color.primaryColor,
    fontSize: FontSize.medium,
    fontWeight: 'bold',
  },
  title: {
    fontSize: FontSize.medium,
    fontWeight: 'bold',
    color: Color.grayColor,
    marginBottom: scale(5),
  },
});
