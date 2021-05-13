/* eslint-disable react-native/no-inline-styles */
import React, { useState, useContext } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import CheckBox from '@react-native-community/checkbox';

import { Input } from '../components/Input';
import { Button } from '../components/Button';
import { TermOfUse } from '../components/TermOfUse';

import { AuthContext } from '../contexts/AuthContext';

export function RegisterPage({ navigation }: any) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordAgain, setPasswordAgain] = useState('');
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const [showTermOfUse, setShowTermOfUse] = useState(false);

  const { register, errorMessage } = useContext(AuthContext);

  const showModal = (value: boolean) => {
    setShowTermOfUse(value);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Cadastre uma conta para ter acesso as suas tarefas e desempenho em
        qualquer dispositivo.
      </Text>
      <View style={styles.form}>
        <Input
          placeholder="Insira seu e-mail"
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
        <Input
          textContentType="password"
          placeholder="Insira sua senha"
          value={password}
          onChangeText={(text) => setPassword(text)}
          secureTextEntry
        />
        <Input
          textContentType="password"
          placeholder="Confirme sua senha"
          value={passwordAgain}
          onChangeText={(text) => setPasswordAgain(text)}
          secureTextEntry
        />
        <View style={styles.checkboxContainer}>
          <CheckBox
            value={acceptedTerms}
            onValueChange={setAcceptedTerms}
            style={styles.checkbox}
            tintColors={{
              true: '#BB86FC',
              false: '#fff',
            }}
          />
          <TouchableOpacity onPress={() => showModal(true)}>
            <Text
              style={[
                styles.termText,
                { color: acceptedTerms ? '#BB86FC' : '#fff' },
              ]}>
              Termos de uso
            </Text>
          </TouchableOpacity>
        </View>
        <TermOfUse visible={showTermOfUse} showModal={showModal} />
        {!!errorMessage && (
          <View style={styles.errorMessageContainer}>
            <Text style={styles.errorMessage}>{errorMessage}</Text>
          </View>
        )}
        <Button
          text="Cadastrar"
          onPress={() => register(email, password, passwordAgain)}
        />
        <TouchableOpacity
          style={styles.accountContainer}
          onPress={() => navigation.navigate('LoginPage')}>
          <Text style={styles.accountText}>Eu tenho uma conta</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  checkbox: {
    transform: [{ scaleX: 1.4 }, { scaleY: 1.4 }],
  },
  termText: {
    fontSize: 20,
    textDecorationLine: 'underline',
    marginLeft: 10,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 14,
  },
  errorMessageContainer: {
    backgroundColor: '#ccc',
    width: '100%',
    padding: 10,
    borderRadius: 10,
    marginBottom: 14,
  },
  errorMessage: {
    color: '#ec2027',
    fontSize: 16,
    textAlign: 'center',
  },
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
