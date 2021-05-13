import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

import { TaskContext } from '../contexts/TaskContext';
import { AuthContext } from '../contexts/AuthContext';

import { Task } from '../types/Task';

interface TaskProps {
  item: Task;
}

export function TaskComponent({ item }: TaskProps) {
  const { removeTask, updateTask, loggedInUser } = useContext(AuthContext);
  const { removeLocalTask, updateLocalTask } = useContext(TaskContext);

  return (
    <View style={styles.container}>
      <Icon
        style={styles.checkboxIcon}
        name={item.is_completed ? 'check-circle' : 'circle'}
        onPress={() =>
          loggedInUser && item.id ? updateTask(item.id) : updateLocalTask(item)
        }
      />
      <Text
        style={item.is_completed ? styles.taskDoneText : styles.taskNormalText}>
        {item.title}
      </Text>
      <Icon
        style={styles.deleteIcon}
        name="times-circle"
        onPress={() =>
          loggedInUser && item.id ? removeTask(item.id) : removeLocalTask(item)
        }
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
