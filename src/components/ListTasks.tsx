import React, { useContext } from 'react';
import { View, FlatList, StyleSheet } from 'react-native';

import { TaskContext } from '../contexts/TaskContext';
import { AuthContext } from '../contexts/AuthContext';

import { TaskComponent } from './TaskComponent';

export function ListTasks() {
  const { localTasks } = useContext(TaskContext);
  const { tasks, loggedInUser } = useContext(AuthContext);

  return (
    <View style={styles.container}>
      <FlatList
        data={loggedInUser ? tasks : localTasks}
        keyExtractor={(_, index) => String(index)}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => {
          return <TaskComponent item={item} />;
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
