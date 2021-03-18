import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

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
    color: '#CFD8DC',
    fontSize: 14,
  },
  infoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  container: {
    padding: 20,
  },
  subtitle: {
    color: '#fff',
    fontSize: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#CFD8DC',
    marginBottom: 20,
  },
});
