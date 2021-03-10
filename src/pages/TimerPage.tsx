import React, { useContext } from 'react';
import { View, StyleSheet } from 'react-native';
import { Countdown } from '../components/Countdown';
import { StartOrPauseButton } from '../components/StartOrPauseButton';
import { ResetButton } from '../components/ResetButton';
import { TaskComponent } from '../components/TaskComponent';
import { CountdownProvider } from '../contexts/CountdownContext';
import { TaskContext, Task } from '../contexts/TaskContext';

export function TimerPage() {
  const { tasks } = useContext(TaskContext);

  let tasksNotCompleted: Task[] = [];

  return (
    <CountdownProvider>
      <View style={styles.container}>
        {tasks.forEach((task) => {
          if (!task.isCompleted) {
            tasksNotCompleted.push(task);
          }
        })}
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
