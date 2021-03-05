import React, { useState, useEffect } from 'react';
import {
  Alert,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import { ListTasks } from '../components/ListTasks';
import { Form } from '../components/Form';

export function CreateTasksPage() {
  const [tasks, setTasks] = useState<string[]>([]);
  const [newTask, setNewTask] = useState<string>('');

  async function addTask(): Promise<void> {
    const search = tasks.filter((task) => task === newTask);

    if (search.length !== 0) {
      Alert.alert('Atenção', 'Nome da tarefa repetido!');
      return;
    }

    setTasks([...tasks, newTask]);
    setNewTask('');

    Keyboard.dismiss();
  }

  async function removeTask(item: string): Promise<void> {
    setTasks(tasks.filter((task) => task !== item));
  }

  /** Carregar e Salvar dados */
  useEffect(() => {
    async function loadTasks() {
      const task = await AsyncStorage.getItem('task');

      if (task) {
        setTasks(JSON.parse(task));
      }
    }

    loadTasks();
  }, []);

  useEffect(() => {
    async function saveTasks() {
      AsyncStorage.setItem('task', JSON.stringify(tasks));
    }
    saveTasks();
  }, [tasks]);

  return (
    <KeyboardAvoidingView
      keyboardVerticalOffset={0}
      behavior="padding"
      style={styles.container}
      enabled={Platform.OS === 'ios'}>
      <Text style={styles.title}>Organize as suas tarefas</Text>
      <ListTasks tasks={tasks} removeTask={removeTask} />
      <Form newTask={newTask} addTask={addTask} setNewTask={setNewTask} />
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333238',
  },
  title: {
    textAlign: 'center',
    marginTop: 20,
    fontSize: 39,
    color: '#fff',
    fontWeight: 'bold',
  },
});
