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
import { PrimaryButton } from '../components/PrimaryButton';
import { ErrorComponent } from '../components/ErrorComponent';

import { Color, FontSize, scale } from '../config/style';

export function CreateTasksPage() {
  const [title, setTitle] = useState('');

  const { createLocalTask, loadingLocal } = useContext(TaskContext);
  const { createTask, loggedInUser, errorMessage, clearErrors, loading } =
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
        {!!errorMessage && <ErrorComponent message={errorMessage} />}
        <PrimaryButton
          text="Adicionar"
          disabled={title === '' || loading || loadingLocal}
          loading={loading || loadingLocal}
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
    marginTop: scale(40),
    fontSize: FontSize.title,
    color: Color.primaryColor,
    fontWeight: 'bold',
  },
  titleContainer: {
    width: '60%',
    alignSelf: 'center',
  },
});
