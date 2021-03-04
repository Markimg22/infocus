import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import { Task } from './Task';

interface ListTasksProps {
  tasks: any;
  removeTask: (text: string) => void;
}

export function ListTasks({ tasks, removeTask }: ListTasksProps) {
  return (
    <View style={styles.container}>
      <FlatList
        data={tasks}
        keyExtractor={(item) => item.toString()}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => {
          return <Task item={item} removeTask={removeTask} />;
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
