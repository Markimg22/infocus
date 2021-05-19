import React, { useState, useContext } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

import { Input } from '../components/Input';
import { Button } from '../components/Button';
import { ErrorComponent } from '../components/ErrorComponent';

import { Google, Facebook } from '../assets/svg/icon';

import { AuthContext } from '../contexts/AuthContext';

import { Color, FontSize, scale } from '../config/style';

export function LoginPage({ navigation }: any) {
  const [email, setEmail] = useState('user3@hotmail.com');
  const [password, setPassword] = useState('123');

  const { errorMessage, signIn, clearErrors } = useContext(AuthContext);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Entre na sua conta para ter acesso as suas tarefas e desempenho.
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
          secureTextEntry={true}
          value={password}
          onChangeText={(text) => setPassword(text)}
        />
        {!!errorMessage && <ErrorComponent message={errorMessage} />}
        <Button
          text="Entrar"
          onPress={() => signIn(email, password)}
          disabled={email === '' || password === ''}
        />
        <TouchableOpacity
          style={styles.notAccountContainer}
          onPress={() => {
            clearErrors();
            navigation.navigate('RegisterPage');
          }}>
          <Text style={styles.notAccountText}>Não tenho uma conta</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.orContainer}>
        <View style={styles.line} />
        <Text style={styles.text}>Ou</Text>
        <View style={styles.line} />
      </View>

      <View style={styles.logginWithContainer}>
        <Text style={styles.text}>Entre com:</Text>
        <View style={styles.imagesContainer}>
          <TouchableOpacity>
            <Google />
          </TouchableOpacity>
          <TouchableOpacity>
            <Facebook />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  logginWithContainer: {
    alignSelf: 'center',
    marginTop: scale(20),
  },
  imagesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: '90%',
    marginTop: scale(20),
  },
  orContainer: {
    marginTop: scale(25),
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  line: {
    backgroundColor: Color.grayColor,
    height: scale(2),
    width: '40%',
  },
  text: {
    color: Color.grayColor,
    fontSize: FontSize.medium,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  notAccountText: {
    color: Color.grayColor,
    textDecorationLine: 'underline',
    fontSize: FontSize.small,
  },
  notAccountContainer: {
    marginTop: scale(14),
    alignSelf: 'flex-end',
  },
  title: {
    textAlign: 'center',
    marginTop: scale(30),
    fontSize: FontSize.title,
    color: Color.primaryColor,
    fontWeight: 'bold',
  },
  container: {
    flex: 1,
    backgroundColor: Color.backgroundColor,
  },
  form: {
    marginTop: scale(30),
    width: '90%',
    alignSelf: 'center',
  },
});
