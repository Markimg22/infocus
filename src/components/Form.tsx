import React from 'react';
import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  StyleSheet,
} from 'react-native';

interface FormProps {
  newTask: string;
  addTask: () => void;
  setNewTask: (text: string) => void;
}

export function Form({ newTask, addTask, setNewTask }: FormProps) {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textInput}
        value={newTask}
        placeholder="Insira uma tarefa..."
        maxLength={20}
        onChangeText={(text) => setNewTask(text)}
      />
      <TouchableOpacity onPress={() => addTask()} style={styles.button}>
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
