import React, { useContext } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

import { AuthContext } from '../contexts/AuthContext';

import { Color, FontSize, scale } from '../config/style';

export function Profile() {
  const { signOut, loggedInUser } = useContext(AuthContext);

  const formatName = (value: string | undefined) => {
    let result = '';

    if (value) {
      value.split('');
      for (let i = 0; i <= value.length; i++) {
        result += value[i];

        if (value[i + 1] === '@') {
          break;
        }
      }

      return result;
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.userInfoContainer}>
        <Icon name="user-circle" style={styles.iconAvatar} solid />
        <Text style={styles.userNameText}>
          {formatName(loggedInUser?.email)}
        </Text>
      </View>
      <TouchableOpacity onPress={signOut}>
        <Icon name="sign-out-alt" style={styles.iconLoggout} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  userInfoContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconLoggout: {
    color: Color.contrastColor,
    fontSize: FontSize.title,
  },
  iconAvatar: {
    color: Color.primaryColor,
    fontSize: scale(60),
    borderColor: Color.primaryColor,
  },
  container: {
    flexDirection: 'row',
    marginTop: scale(30),
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '90%',
    alignSelf: 'center',
  },
  userNameText: {
    color: Color.primaryColor,
    fontSize: FontSize.title,
    fontWeight: 'bold',
    marginLeft: scale(10),
    maxWidth: scale(230),
  },
});
