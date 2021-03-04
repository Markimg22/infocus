import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

interface TaskProps {
  item: string;
  removeTask: (item: string) => void;
}

export function Task({ item, removeTask }: TaskProps) {
  const [done, setDone] = useState<boolean>(false);

  return (
    <View style={styles.container}>
      <Icon
        style={styles.checkboxIcon}
        name={done ? 'check-circle' : 'circle'}
        onPress={() => setDone(!done)}
      />
      <Text style={done ? styles.taskDoneText : styles.taskNormalText}>
        {item}
      </Text>
      <Icon
        style={styles.deleteIcon}
        name="minus-circle"
        onPress={() => removeTask(item)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 350,
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignSelf: 'center',
    justifyContent: 'space-between',
    borderRadius: 15,
    padding: 10,
    margin: 10,
  },
  checkboxIcon: {
    color: '#282631',
    fontSize: 30,
    fontWeight: 'bold',
  },
  taskNormalText: {
    color: '#282631',
    fontSize: 23,
    fontWeight: 'bold',
  },
  taskDoneText: {
    textDecorationLine: 'line-through',
    color: '#282631',
    fontSize: 23,
    fontWeight: 'bold',
  },
  deleteIcon: {
    color: '#FF5757',
    fontSize: 25,
  },
});
