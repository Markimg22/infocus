import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { Color, FontSize, scale } from '../config/style';

export function UserPerformance() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Desempenho:</Text>
      <View style={styles.infoContainer}>
        <Text style={styles.subtitle}>Total de tarefas concluídas:</Text>
        <Text style={styles.infoText}>10</Text>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.subtitle}>Tempo total de foco:</Text>
        <Text style={styles.infoText}>04h30m12s</Text>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.subtitle}>Tempo total de descanso:</Text>
        <Text style={styles.infoText}>01h20m10s</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  infoText: {
    color: Color.grayColor,
    fontSize: FontSize.small,
  },
  infoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  container: {
    padding: scale(20),
  },
  subtitle: {
    color: Color.primaryColor,
    fontSize: FontSize.small,
  },
  title: {
    fontSize: FontSize.medium,
    fontWeight: 'bold',
    color: Color.grayColor,
    marginBottom: scale(20),
  },
});
