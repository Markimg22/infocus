import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

import { TaskContext } from '../contexts/TaskContext';
import { AuthContext } from '../contexts/AuthContext';

import { Task } from '../types/Task';

import { Color, FontSize, scale } from '../config/style';

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
        name={item.isCompleted ? 'check-circle' : 'circle'}
        onPress={() =>
          loggedInUser && item._id
            ? updateTask(item._id, !item.isCompleted)
            : updateLocalTask(item)
        }
      />
      <Text
        style={item.isCompleted ? styles.taskDoneText : styles.taskNormalText}>
        {item.title}
      </Text>
      <Icon
        style={styles.deleteIcon}
        name="times-circle"
        onPress={() =>
          loggedInUser && item._id
            ? removeTask(item._id)
            : removeLocalTask(item)
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: scale(350),
    backgroundColor: Color.primaryColor,
    flexDirection: 'row',
    alignSelf: 'center',
    justifyContent: 'space-between',
    borderRadius: scale(15),
    padding: scale(10),
    margin: scale(10),
  },
  checkboxIcon: {
    color: Color.contrastColor,
    fontSize: FontSize.title,
    fontWeight: 'bold',
  },
  taskNormalText: {
    color: Color.contrastColor,
    fontSize: FontSize.medium,
    fontWeight: 'bold',
  },
  taskDoneText: {
    textDecorationLine: 'line-through',
    color: Color.contrastColor,
    fontSize: FontSize.medium,
    fontWeight: 'bold',
  },
  deleteIcon: {
    color: Color.redColor,
    fontSize: FontSize.title,
  },
});
