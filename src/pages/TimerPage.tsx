import React, { useContext } from 'react';
import { View, StyleSheet } from 'react-native';

import { Countdown } from '../components/Countdown';
import { StartOrPauseButton } from '../components/StartOrPauseButton';
import { ResetButton } from '../components/ResetButton';
import { TaskComponent } from '../components/TaskComponent';

import { CountdownProvider } from '../contexts/CountdownContext';
import { TaskContext } from '../contexts/TaskContext';
import { AuthContext } from '../contexts/AuthContext';

import { Task } from '../types/Task';

export function TimerPage() {
  const { locaTasks } = useContext(TaskContext);
  const { tasks, loggedInUser } = useContext(AuthContext);

  let tasksNotCompleted: Task[] = [];

  const showTaskNotComplete = (listTasks: Task[]) => {
    listTasks.forEach((task) => {
      if (!task.is_completed) {
        tasksNotCompleted.push(task);
      }
    });
  };

  return (
    <CountdownProvider>
      <View style={styles.container}>
        {loggedInUser
          ? showTaskNotComplete(tasks)
          : showTaskNotComplete(locaTasks)}
        {tasksNotCompleted.length > 0 && (
          <TaskComponent item={tasksNotCompleted[0]} />
        )}
        <Countdown />
        <View style={styles.buttonsContainer}>
          <StartOrPauseButton />
          <ResetButton />
        </View>
      </View>
    </CountdownProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    backgroundColor: '#333238',
  },
  buttonsContainer: {
    width: '50%',
    alignItems: 'center',
  },
});
