import React, { useContext, useState } from 'react';
import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  StyleSheet,
} from 'react-native';
import { TaskContext } from '../contexts/TaskContext';

export function Form() {
  const { createTask } = useContext(TaskContext);
  const [title, setTile] = useState('');

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textInput}
        value={title}
        placeholder="Insira uma tarefa..."
        maxLength={20}
        onChangeText={(text) => setTile(text)}
      />
      <TouchableOpacity
        onPress={() => {
          createTask(title);
          setTile('');
        }}
        style={styles.button}>
        <Text style={styles.textButton}>+ Adicionar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
    alignSelf: 'center',
    width: 350,
    borderTopWidth: 1,
  },
  textInput: {
    backgroundColor: '#fff',
    color: '#282631',
    borderRadius: 12,
    fontSize: 25,
    fontWeight: 'bold',
    padding: 18,
    marginBottom: 20,
  },
  button: {
    borderColor: '#CFD8DC',
    borderStyle: 'dashed',
    borderRadius: 12,
    borderWidth: 2,
    padding: 18,
  },
  textButton: {
    color: '#CFD8DC',
    fontSize: 25,
    textAlign: 'center',
  },
});
