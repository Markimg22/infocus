import React, { useContext } from 'react';
import { View, FlatList, StyleSheet } from 'react-native';

// import { TaskContext } from '../contexts/TaskContext';
import { AuthContext } from '../contexts/AuthContext';

import { TaskComponent } from './TaskComponent';

export function ListTasks() {
  // const { tasks } = useContext(TaskContext);
  const { tasks } = useContext(AuthContext);

  return (
    <View style={styles.container}>
      <FlatList
        data={tasks}
        keyExtractor={(item) => item.id}
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
