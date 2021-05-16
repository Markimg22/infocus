import React, { useContext, useState } from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import { TaskContext } from '../contexts/TaskContext';
import { AuthContext } from '../contexts/AuthContext';

import { ListTasks } from '../components/ListTasks';
import { Input } from '../components/Input';
import { Button } from '../components/Button';

import { Color, FontSize, scale } from '../config/style';

export function CreateTasksPage() {
  const [title, setTitle] = useState('');

  const { createLocalTask } = useContext(TaskContext);
  const { createTask, loggedInUser, errorMessage, clearErrors } =
    useContext(AuthContext);

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
          onChangeText={(text) => setTitle(text)}
        />
        {!!errorMessage && (
          <View style={styles.errorMessageContainer}>
            <Text style={styles.errorMessage}>{errorMessage}</Text>
          </View>
        )}
        <Button
          text="Adicionar"
          onPress={() => {
            if (loggedInUser) {
              createTask(title);
            } else {
              createLocalTask(title);
            }

            clearErrors();
            setTitle('');
          }}
        />
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  errorMessageContainer: {
    backgroundColor: Color.grayColor,
    width: '100%',
    padding: scale(10),
    borderRadius: scale(15),
    marginBottom: scale(14),
  },
  errorMessage: {
    color: Color.redColor,
    fontSize: FontSize.small,
    textAlign: 'center',
  },
  container: {
    flex: 1,
    backgroundColor: Color.backgroundColor,
  },
  form: {
    paddingVertical: scale(20),
    alignSelf: 'center',
    width: '90%',
    borderTopWidth: scale(2),
    borderColor: Color.contrastColor,
  },
  title: {
    textAlign: 'center',
    marginTop: scale(30),
    fontSize: FontSize.title,
    color: Color.primaryColor,
    fontWeight: 'bold',
  },
  titleContainer: {
    width: '60%',
    alignSelf: 'center',
  },
});
