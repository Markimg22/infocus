import React, { useState, useContext } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome5';

import { Input } from '../components/Input';
import { PrimaryButton } from '../components/PrimaryButton';
import { ErrorComponent } from '../components/ErrorComponent';

// import { Google, Facebook } from '../assets/svg/icon';

import { AuthContext } from '../contexts/AuthContext';

import { Color, FontSize, scale } from '../config/style';

export function LoginPage({ navigation }: any) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [hidePassword, setHidePassword] = useState(true);

  const { errorMessage, signIn, clearErrors, loading } =
    useContext(AuthContext);

  return (
    <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
      <Text style={styles.title}>
        Entre na sua conta para ter acesso as suas tarefas e desempenho.
      </Text>

      <View style={styles.form}>
        <Input
          keyboardType={'email-address'}
          textContentType={'emailAddress'}
          autoCompleteType={'email'}
          placeholder="Insira seu e-mail"
          value={email}
          onChangeText={(text) => setEmail(text)}
          autoCapitalize={'none'}
        />
        <Input
          textContentType="password"
          placeholder="Insira sua senha"
          secureTextEntry={hidePassword}
          value={password}
          onChangeText={(text) => setPassword(text)}
          rightComponent={
            <TouchableOpacity onPress={() => setHidePassword(!hidePassword)}>
              {hidePassword ? (
                <Icon name="eye" size={scale(22)} color={Color.grayColor} />
              ) : (
                <Icon
                  name="eye-slash"
                  size={scale(22)}
                  color={Color.grayColor}
                />
              )}
            </TouchableOpacity>
          }
        />
        {!!errorMessage && <ErrorComponent message={errorMessage} />}
        <PrimaryButton
          text="Entrar"
          onPress={() => signIn(email, password)}
          disabled={email === '' || password === '' || loading}
          loading={loading}
        />
      </View>

      <View style={styles.orContainer}>
        <View style={styles.line} />
        <Text style={styles.text}>Ou</Text>
        <View style={styles.line} />
      </View>

      <View style={styles.buttonContainer}>
        <PrimaryButton
          text="Criar nova conta"
          onPress={() => {
            clearErrors();
            navigation.navigate('RegisterPage');
          }}
        />
      </View>

      {/* <View style={styles.logginWithContainer}>
        <Text style={styles.text}>Entre com:</Text>
        <View style={styles.imagesContainer}>
          <TouchableOpacity>
            <Google />
          </TouchableOpacity>
          <TouchableOpacity>
            <Facebook />
          </TouchableOpacity>
        </View>
      </View> */}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  // logginWithContainer: {
  //   alignSelf: 'center',
  //   marginTop: scale(20),
  // },
  // imagesContainer: {
  //   flexDirection: 'row',
  //   justifyContent: 'space-evenly',
  //   width: '90%',
  //   marginTop: scale(20),
  //   marginBottom: scale(20),
  // },
  buttonContainer: {
    width: '90%',
    alignSelf: 'center',
  },
  orContainer: {
    marginTop: scale(25),
    marginBottom: scale(25),
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
  title: {
    textAlign: 'center',
    marginTop: scale(40),
    fontSize: FontSize.title,
    color: Color.primaryColor,
    fontWeight: 'bold',
    paddingHorizontal: scale(15),
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
