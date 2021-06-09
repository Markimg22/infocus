import React, { useState, useContext } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Alert,
  ScrollView,
} from 'react-native';
import CheckBox from '@react-native-community/checkbox';

import Icon from 'react-native-vector-icons/FontAwesome5';

import { Input } from '../components/Input';
import { PrimaryButton } from '../components/PrimaryButton';
import { TermOfUse } from '../components/TermOfUse';
import { ErrorComponent } from '../components/ErrorComponent';

import { AuthContext } from '../contexts/AuthContext';

import { Color, FontSize, scale } from '../config/style';

export function RegisterPage({ navigation }: any) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordAgain, setPasswordAgain] = useState('');
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const [showTermOfUse, setShowTermOfUse] = useState(false);

  const [hidePassword, setHidePassword] = useState(true);
  const [hidePasswordAgain, setHidePasswordAgain] = useState(true);

  const { register, errorMessage, clearErrors, loading } =
    useContext(AuthContext);

  const showModal = (value: boolean) => {
    setShowTermOfUse(value);
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
      <Text style={styles.title}>
        Cadastre uma conta para ter acesso as suas tarefas e desempenho em
        qualquer dispositivo.
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
          value={password}
          onChangeText={(text) => setPassword(text)}
          secureTextEntry={hidePassword}
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
        <Input
          textContentType="password"
          placeholder="Confirme sua senha"
          value={passwordAgain}
          onChangeText={(text) => setPasswordAgain(text)}
          secureTextEntry={hidePasswordAgain}
          rightComponent={
            <TouchableOpacity
              onPress={() => setHidePasswordAgain(!hidePasswordAgain)}>
              {hidePasswordAgain ? (
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
        <View style={styles.checkboxContainer}>
          <CheckBox
            value={acceptedTerms}
            onValueChange={setAcceptedTerms}
            style={styles.checkbox}
            tintColors={{
              true: Color.purpleColor,
              false: Color.primaryColor,
            }}
          />
          <Text style={styles.text}>
            Declaro que li e aceito os{' '}
            <TouchableOpacity onPress={() => showModal(true)}>
              <Text style={styles.termText}>termos de uso.</Text>
            </TouchableOpacity>
          </Text>
        </View>
        <TermOfUse visible={showTermOfUse} showModal={showModal} />
        {!!errorMessage && <ErrorComponent message={errorMessage} />}
        <PrimaryButton
          text="Cadastrar"
          disabled={
            email === '' ||
            password === '' ||
            passwordAgain === '' ||
            !acceptedTerms ||
            loading
          }
          loading={loading}
          onPress={async () => {
            if (acceptedTerms) {
              const result = await register(email, password, passwordAgain);

              // @ts-ignore
              if (!result.errors) {
                navigation.navigate('BottomBar');
              }
            } else {
              Alert.alert(
                'Aceitar Termos de Uso!',
                'Você deve aceitar os Termos de Uso para se registrar.',
              );
            }
          }}
        />
        <TouchableOpacity
          style={styles.accountContainer}
          onPress={() => {
            clearErrors();
            navigation.navigate('LoginPage');
          }}>
          <Text style={styles.accountText}>Eu tenho uma conta</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  checkbox: {
    transform: [{ scaleX: 1.4 }, { scaleY: 1.4 }],
  },
  text: {
    fontSize: FontSize.medium,
    color: Color.primaryColor,
    marginLeft: scale(10),
  },
  termText: {
    fontSize: FontSize.medium,
    textDecorationLine: 'underline',
    color: Color.purpleColor,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: scale(14),
    padding: scale(5),
    marginRight: scale(10),
  },
  accountContainer: {
    marginTop: scale(14),
    alignSelf: 'flex-start',
    marginBottom: scale(20),
  },
  accountText: {
    color: Color.grayColor,
    textDecorationLine: 'underline',
    fontSize: FontSize.small,
  },
  title: {
    textAlign: 'center',
    fontSize: FontSize.title,
    color: Color.primaryColor,
    fontWeight: 'bold',
    marginTop: scale(40),
    paddingHorizontal: scale(15),
  },
  container: {
    flex: 1,
    backgroundColor: Color.backgroundColor,
  },
  form: {
    width: '90%',
    alignSelf: 'center',
    marginTop: scale(30),
  },
});
