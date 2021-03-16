import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { TaskContext, Task } from '../contexts/TaskContext';

interface TaskProps {
  item: Task;
}

export function TaskComponent({ item }: TaskProps) {
  const { removeTask, checkTask } = useContext(TaskContext);

  return (
    <View style={styles.container}>
      <Icon
        style={styles.checkboxIcon}
        name={item.isCompleted ? 'check-circle' : 'circle'}
        onPress={() => checkTask(item)}
      />
      <Text
        style={item.isCompleted ? styles.taskDoneText : styles.taskNormalText}>
        {item.title}
      </Text>
      <Icon
        style={styles.deleteIcon}
        name="times-circle"
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
    fontSize: 30,
  },
});
