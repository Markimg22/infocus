import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Input } from '../components/Input';
import { Button } from '../components/Button';
import { Google, Facebook } from '../assets/svg/icon';

export function LoginPage({ navigation }: any) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Entre na sua conta para ter acesso as suas tarefas e desempenho.
      </Text>

      <View style={styles.form}>
        <Input placeholder="Insira seu e-mail ou nome" />
        <Input
          textContentType="password"
          placeholder="Insira sua senha"
          secureTextEntry={true}
        />
        <Button text="Entrar" />
        <TouchableOpacity
          style={styles.notAccountContainer}
          onPress={() => navigation.navigate('RegisterPage')}>
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
    marginTop: 20,
  },
  imagesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: '90%',
    marginTop: 20,
  },
  orContainer: {
    marginTop: 25,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  line: {
    backgroundColor: '#CFD8DC',
    height: 2,
    width: '40%',
  },
  text: {
    color: '#CFD8DC',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  notAccountText: {
    color: '#CFD8DC',
    textDecorationLine: 'underline',
    fontSize: 15,
  },
  notAccountContainer: {
    marginTop: 14,
    alignSelf: 'flex-end',
  },
  title: {
    textAlign: 'center',
    marginTop: 30,
    fontSize: 30,
    color: '#fff',
    fontWeight: 'bold',
  },
  container: {
    flex: 1,
    backgroundColor: '#333238',
  },
  form: {
    marginTop: 30,
    width: '90%',
    alignSelf: 'center',
  },
});
