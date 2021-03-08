import React from 'react';
import { KeyboardAvoidingView, Platform, StyleSheet, Text } from 'react-native';
import { ListTasks } from '../components/ListTasks';
import { Form } from '../components/Form';

export function CreateTasksPage() {
  return (
    <KeyboardAvoidingView
      keyboardVerticalOffset={0}
      behavior="padding"
      style={styles.container}
      enabled={Platform.OS === 'ios'}>
      <Text style={styles.title}>Organize as suas tarefas</Text>
      <ListTasks />
      <Form />
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
