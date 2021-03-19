import React, { useContext, useState } from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { ListTasks } from '../components/ListTasks';
import { Input } from '../components/Input';
import { Button } from '../components/Button';
import { TaskContext } from '../contexts/TaskContext';

export function CreateTasksPage() {
  const { createTask } = useContext(TaskContext);
  const [title, setTile] = useState('');

  return (
    <KeyboardAvoidingView
      keyboardVerticalOffset={0}
      behavior="padding"
      style={styles.container}
      enabled={Platform.OS === 'ios'}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Organize as suas tarefas</Text>
      </View>
      <ListTasks />
      <View style={styles.form}>
        <Input
          value={title}
          placeholder="Insira uma tarefa"
          maxLength={20}
          onChangeText={(text) => setTile(text)}
        />
        <Button
          text="Adicionar"
          onPress={() => {
            createTask(title);
            setTile('');
          }}
        />
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333238',
  },
  form: {
    paddingVertical: 20,
    alignSelf: 'center',
    width: '90%',
    borderTopWidth: 1,
  },
  title: {
    textAlign: 'center',
    marginTop: 30,
    fontSize: 30,
    color: '#fff',
    fontWeight: 'bold',
  },
  titleContainer: {
    width: '60%',
    alignSelf: 'center',
  },
});
