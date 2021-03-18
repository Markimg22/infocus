import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Input } from '../components/Input';
import { Button } from '../components/Button';

export function RegisterPage({ navigation }: any) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Cadastre uma conta para ter acesso as suas tarefas e desempenho em
        qualquer dispositivo.
      </Text>
      <View style={styles.form}>
        <Input textContentType="username" placeholder="Insira seu nome" />
        <Input
          textContentType="password"
          placeholder="Insira sua senha"
          secureTextEntry
        />
        <Input
          textContentType="password"
          placeholder="Confirme sua senha"
          secureTextEntry
        />
        <Button text="Cadastrar" />
        <TouchableOpacity
          style={styles.accountContainer}
          onPress={() => navigation.navigate('LoginPage')}>
          <Text style={styles.accountText}>Não tenho uma conta</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  accountContainer: {
    marginTop: 14,
    alignSelf: 'flex-start',
  },
  accountText: {
    color: '#CFD8DC',
    textDecorationLine: 'underline',
    fontSize: 15,
  },
  title: {
    textAlign: 'center',
    fontSize: 30,
    color: '#fff',
    fontWeight: 'bold',
    marginTop: 30,
  },
  container: {
    flex: 1,
    backgroundColor: '#333238',
  },
  form: {
    width: '90%',
    alignSelf: 'center',
    marginTop: 30,
  },
});
